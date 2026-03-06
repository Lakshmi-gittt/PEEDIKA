const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  type: String,
  district: String,

  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point"
    },
    coordinates: {
      type: [Number], // [lng, lat]
      default: [0, 0]
    }
  }
});

bookSchema.index({ location: "2dsphere" });
app.get("/books", async (req, res) => {

  const { lat, lng, district } = req.query;

  try {

    // CASE 1: GPS allowed → show books within 20km
    if (lat && lng) {

      const books = await Book.aggregate([
        {
          $geoNear: {
            near: {
              type: "Point",
              coordinates: [parseFloat(lng), parseFloat(lat)]
            },
            distanceField: "distance",
            spherical: true,
            maxDistance: 20000 // 20km
          }
        }
      ]);

      return res.json(books);
    }

    // CASE 2: GPS denied → district fallback
    if (district) {

      const books = await Book.find({ district });

      return res.json(books);
    }

    res.status(400).json({ message: "Location or district required" });

  } catch (err) {

    res.status(500).json(err);

  }

});
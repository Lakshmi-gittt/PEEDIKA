const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  type: String,
  district: String,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number]
  }
});

bookSchema.index({ location: "2dsphere" });


app.get("/books/district/:district", async (req, res) => {
  const { lat, lng } = req.query;
  const district = req.params.district;

  // If no GPS provided → simple district filter
  if (!lat || !lng) {
    const books = await Book.find({ district });
    return res.json(books);
  }

  // If GPS provided → include distance calculation
  const books = await Book.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(lng), parseFloat(lat)]
        },
        distanceField: "distance",
        spherical: true,
        query: { district }
      }
    }
  ]);

  res.json(books);
});
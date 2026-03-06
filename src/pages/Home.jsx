import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";

function Home({ books, setBooks }) {

  const genres = [
    "All",
    "Fiction",
    "Academic",
    "Romance",
    "Sci-Fi",
    "Self-Help",
    "Mystery",
    "Entrance Prep",
    "Novels",
    "Horror",
    "Fairy tales",
  ];

  const handleExploreClick = () => {
    const section = document.getElementById("recentUploads");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  function getBooks() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          fetch(`https://peedika-1.onrender.com/books?lat=${lat}&lng=${lng}`)
            .then((res) => res.json())
            .then((data) => setBooks(data));
        },
        function () {
          const district = "Kottayam";

          fetch(`https://peedika-1.onrender.com/books?district=${district}`)
            .then((res) => res.json())
            .then((data) => setBooks(data));
        }
      );
    } else {
      console.log("Geolocation not supported");
    }
  }

  return (
    <div>
      <Navbar />

      {/* GENRE BAR */}
      <div style={styles.genreBar}>
        {genres.map((genre, index) => (
          <button key={index} style={styles.genreBtn}>
            {genre}
          </button>
        ))}
      </div>
    {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Discover & Share Books in Your Community
          </h1>

          <p style={styles.heroSubtitle}>
            Buy and sell academic and leisure books easily with Peedika.
          </p>

          <button style={styles.heroBtn} onClick={handleExploreClick}>
            Explore Now
          </button>

          <br /><br />

          <button onClick={getBooks}>
            Find Nearby Books
          </button>
        </div>

        <div style={styles.heroImageBox}>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* BOOKS */}
      <section id="recentUploads" style={styles.bookSection}>
        <h2 style={styles.sectionTitle}>Recent Uploads</h2>

        <div style={styles.grid}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
const styles = {
  hero: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px 10%",
    background: "linear-gradient(to right, #1a1a1a, #122a2c)",
    color: "#f3d5b5",
  },

  heroText: { flex: 1 },

  heroTitle: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "25px",
    color: "#f3d5b5",
  },

  heroSubtitle: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#d6c1a4",
  },

  heroBtn: {
    padding: "14px 28px",
    backgroundColor: "#8B4513",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  heroImageBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  heroImage: {
    width: "420px",
    borderRadius: "16px",
  },

  bookSection: {
    width: "100%",
    padding: "80px 10%",
    backgroundColor: "#121212",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "40px",
    color: "#f3d5b5",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
    gap: "20px",
  },
};
export default Home;
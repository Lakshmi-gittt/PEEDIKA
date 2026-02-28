import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function BookDetails({ books }) {
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div style={{ color: "white", padding: "50px" }}>
        Book not found
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.imageSection}>
          <img src={book.image} alt={book.title} style={styles.image} />
        </div>

        <div style={styles.detailsSection}>
          <h1>{book.title}</h1>
          <p>by {book.author}</p>

          {book.mode === "sell" && (
            <h2 style={{ color: "#4CAF50" }}>₹ {book.price}</h2>
          )}

          <p><strong>Location:</strong> {book.place}</p>
          <p>{book.description}</p>

          <button style={styles.chatBtn}>
            Chat with Seller
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#121212",
  },
  container: {
    display: "flex",
    gap: "40px",
    padding: "100px 10%",
    color: "#f3d5b5",
  },
  imageSection: {
    flex: 1,
  },
  image: {
    width: "100%",
    borderRadius: "12px",
  },
  detailsSection: {
    flex: 1,
  },
  chatBtn: {
    padding: "12px 25px",
    backgroundColor: "#8B4513",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default BookDetails;   // 🔥 THIS LINE IS REQUIRED
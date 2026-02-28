import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
    const navigate = useNavigate();
  return (
    <div style={styles.card}>
      {/* Image Section */}
      <div style={styles.imageContainer}>
        <img src={book.image} alt={book.title} style={styles.image} />

        {/* Buy / Exchange badge */}
        <div style={styles.badge}>
          {book.mode === "sell" ? "BUY" : "EXCHANGE"}
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.content}>
        <h3 style={styles.title}>{book.title}</h3>
        <p style={styles.author}>by {book.author}</p>

        {book.mode === "sell" && (
          <p style={styles.price}>₹ {book.price}</p>
        )}

        <div style={styles.buttonRow}>
          <button style={styles.viewBtn}>View</button>
          <button style={styles.chatBtn}>Chat</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
  backgroundColor: "#1c1c1c",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
  transition: "0.3s",
},

  imageContainer: {
    position: "relative",
    backgroundColor: "#000",
  },

 image: {
  width: "100%",
  aspectRatio: "3 / 4",   // 🔥 perfect book ratio
  objectFit: "cover",
},

  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "#8B4513",
    color: "white",
    padding: "5px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
  },

  content: {
    padding: "15px",
    color: "#f3d5b5",
  },

  title: {
    fontSize: "16px",
    margin: "5px 0",
  },

  author: {
    fontSize: "13px",
    color: "#c9b79c",
  },

  price: {
    fontSize: "30px",
    color: "#4CAF50",
    margin: "8px 0",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },

  viewBtn: {
    flex: 1,
    marginRight: "5px",
    padding: "8px",
    backgroundColor: "#2a1f18",
    color: "#f3d5b5",
    border: "1px solid #3a2a20",
    borderRadius: "6px",
    cursor: "pointer",
  },

  chatBtn: {
    flex: 1,
    marginLeft: "5px",
    padding: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default BookCard;
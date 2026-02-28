import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function SellBook({ addBook }) {
  const navigate = useNavigate();

  const [mode, setMode] = useState("sell");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      author,
      place,
      description,
      price: mode === "sell" ? price : null,
      image,
      mode,
    };

    addBook(newBook);   // 🔥 send book to App state

    // Clear form
    setTitle("");
    setAuthor("");
    setPlace("");
    setDescription("");
    setPrice("");
    setImage(null);

    alert("Book posted successfully!");

    navigate("/");  // 🔥 go back to Home
  };

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.heading}>List Your Book</h1>

        <div style={styles.toggleContainer}>
          <button
            style={mode === "sell" ? styles.activeBtn : styles.toggleBtn}
            onClick={() => setMode("sell")}
          >
            Sell
          </button>

          <button
            style={mode === "exchange" ? styles.activeBtn : styles.toggleBtn}
            onClick={() => setMode("exchange")}
          >
            Exchange
          </button>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Book Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Place / Location"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
            style={styles.input}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.textarea}
          />

          {mode === "sell" && (
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={styles.input}
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(URL.createObjectURL(e.target.files[0]))
            }
            required
            style={styles.input}
          />

          <button type="submit" style={styles.submitBtn}>
            Post Book
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #1a1a1a, #2c1b12)",
  },

  container: {
    padding: "100px 10%",
    color: "#f3d5b5",
  },

  heading: {
    marginBottom: "40px",
    fontSize: "36px",
    fontFamily: "'Playfair Display', serif",
  },

  toggleContainer: {
    display: "flex",
    gap: "15px",
    marginBottom: "40px",
  },

  toggleBtn: {
    padding: "10px 25px",
    borderRadius: "30px",
    border: "1px solid #3a2a20",
    backgroundColor: "#1c1c1c",
    color: "#f3d5b5",
    cursor: "pointer",
  },

  activeBtn: {
    padding: "10px 25px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#8B4513",
    color: "white",
    cursor: "pointer",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "500px",
    backgroundColor: "#121212",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
  },

  input: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #3a2a20",
    backgroundColor: "#1c1c1c",
    color: "#f3d5b5",
    outline: "none",
  },

  textarea: {
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #3a2a20",
    backgroundColor: "#1c1c1c",
    color: "#f3d5b5",
    minHeight: "100px",
    outline: "none",
  },

  submitBtn: {
    padding: "14px",
    backgroundColor: "#8B4513",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default SellBook;
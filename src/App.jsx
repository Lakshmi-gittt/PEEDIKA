import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import SellBook from "./pages/SellBook";
import Login from "./pages/Login";
import BookDetails from "./pages/BookDetails";

function App() {

  const [books, setBooks] = useState([]);

  // Load books when app starts
  useEffect(() => {
    fetch("https://peedika-1.onrender.com/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [newBook, ...prevBooks]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
        <Route path="/sell" element={<SellBook addBook={addBook} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/:id" element={<BookDetails books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
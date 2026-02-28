import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import SellBook from "./pages/SellBook";
import Login from "./pages/Login";
import BookDetails from "./pages/BookDetails";

function App() {

  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [newBook, ...prevBooks]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/sell" element={<SellBook addBook={addBook} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/:id" element={<BookDetails books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
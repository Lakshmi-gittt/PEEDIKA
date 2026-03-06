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

import { useState } from "react";

function App() {

  const [books, setBooks] = useState([]);

  function getBooks() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(

        function(position) {

          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          fetch(`https://peedika-1.onrender.com?lat=${lat}&lng=${lng}`)
            .then(res => res.json())
            .then(data => setBooks(data));

        },

        function() {

          const district = "Kottayam";

          fetch(`https://peedika-1.onrender.com??district=${district}`)
            .then(res => res.json())
            .then(data => setBooks(data));

        }

      );

    } else {
      console.log("Geolocation not supported");
    }

  }

  return (

    <div>

      <h2>Nearby Books</h2>

      <button onClick={getBooks}>
        Find Nearby Books
      </button>

      {books.map((book, index) => {

        const distanceText = book.distance
          ? (book.distance / 1000).toFixed(1) + " km away"
          : "";

        return (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.district}</p>
            <span>{distanceText}</span>
          </div>
        )

      })}

    </div>

  )

}

export default App;
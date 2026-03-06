import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
function getBooks() {

  console.log("running");

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
function getBooks() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

      function(position) {

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        fetch(`http://localhost:5000/books?lat=${lat}&lng=${lng}`)
          .then(res => res.json())
          .then(data => displayBooks(data));

      },

      function() {

        const district = "Kottayam";

        fetch(`http://localhost:5000/books?district=${district}`)
          .then(res => res.json())
          .then(data => displayBooks(data));

      }

    );

  } else {

    console.log("Geolocation not supported");

  }

}

function displayBooks(books){

  const container = document.getElementById("books");

  container.innerHTML = "";

  books.forEach(book => {

    const distanceText = book.distance
      ? (book.distance / 1000).toFixed(1) + " km away"
      : "";

    const card = `
      <div class="book-card">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.district}</p>
        <span>${distanceText}</span>
      </div>
    `;

    container.innerHTML += card;

  });

}

window.onload = getBooks;

// import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faFilter } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

import Book from './components/Book/Book';
import Header from './components/Header/Header';

const App = () => {
  library.add(faHeart, faFilter);

  const [books, setBooks] = useState();
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')));

  const fetchBooks = async () => {
    const response = await axios.get('https://gnikdroy.pythonanywhere.com/api/book/');
    setBooks(response.data.results);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('favorites'));
    if (items) {
      setFavorites(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  return (
    <>
      <Header favorites={favorites} />
      <div className="App">
        {books ? (
          books.map((book, key) => <Book key={key} props={book} favorites={favorites} setFavorites={setFavorites} />)
        ) : 'loading'}
      </div>
    </>
  );
}
export default App;

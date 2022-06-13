import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Info from './components/Info/Info';

const App = () => {
  library.add(faHeart, faFilter, faMagnifyingGlass);

  const [books, setBooks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);
  const [searchValue, setSearchValue] = useState('');

  const fetchBooks = async () => {
    const response = await axios.get('https://gnikdroy.pythonanywhere.com/api/book/');
    setBooks(response.data.results);
    setIsLoading(false);
  };

  const searchSubmitted = async () => {
    console.log("start-search: ", searchValue);
    console.log(books)

    setIsLoading(true);
    const response = await axios.get(`https://gnikdroy.pythonanywhere.com/api/book?search=${searchValue}`);
    setBooks(response.data.results);
    setIsLoading(false);

  }

  useEffect(() => {
    fetchBooks();
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
      <Header
        favorites={favorites}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchSubmitted={searchSubmitted}
      />
      <div className="App">
        {!isLoading ? (
          books.length ? books.map((book, key) => <Book key={key} props={book} favorites={favorites} setFavorites={setFavorites} />) : <Info message={'Nie znaleziono pasujących książek'} />
        ) : <Info loading={isLoading}/>}
      </div>
    </>
  );
}
export default App;

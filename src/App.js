import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Modal from './components/Modal/Modal';

const App = () => {
  library.add(faHeart, faFilter, faMagnifyingGlass);

  const [books, setBooks] = useState();
  const [filteredBooks, setFilteredBooks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const fetchBooks = async () => {
    const response = await axios.get('https://gnikdroy.pythonanywhere.com/api/book/');
    setBooks(response.data.results);
    setIsLoading(false);
  };

  const searchSubmitted = async () => {

    setIsLoading(true);
    setIsFiltering(false)
    const response = await axios.get(`https://gnikdroy.pythonanywhere.com/api/book?search=${searchValue}`);
    setBooks(response.data.results);
    setIsLoading(false);
  }

  const filterBooks = (lang) => {
    setShowModal(!showModal);
    if (!lang) {
      return 0;
    }

    if (lang === 'en' || lang === 'pl') {
      setFilteredBooks(books.filter(book => book.languages[0] === lang));
      setIsFiltering(true);
    }
  }

  const removeFilter = () => {
    setIsFiltering(false);
    setShowModal(!showModal);
  }

  const closeModal = () => {
    setShowModal(!showModal);
  }

  useEffect(() => {
    showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [showModal]);

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
      <Modal
        showModal={showModal}
        filter={filterBooks}
        removeFilter={removeFilter}
        closeModal={closeModal}
      />
      <Header
        favorites={favorites}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchSubmitted={searchSubmitted}
        filterBooks={filterBooks}
      />
      <div className="App">
        {
          !isLoading ? (
            isFiltering ? (

              filteredBooks.length ? (
                filteredBooks.map((book, key) => <Book key={key} props={book} favorites={favorites} setFavorites={setFavorites} />)
              ) : <Info message={'Nie znaleziono pasujących książek'} />

            ) : books.length ? (
              books.map((book, key) => <Book key={key} props={book} favorites={favorites} setFavorites={setFavorites} />)

            ) : <Info message={'Nie znaleziono pasujących książek'} />
          ) : <Info loading={isLoading} />
        }
      </div>
    </>
  );
}
export default App;

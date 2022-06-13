import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss';

const Header = ({ favorites, searchValue, setSearchValue, searchSubmitted }) => { 

    return (
        <div className="header">
            <div className="container">
                <a className="title-header" href="/">BOOKS APP</a>
                <div className="options">
                    <div className="search-container">
                        <input className="search-input" type="text" placeholder="Szukaj..." value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                        <div className="search-icon" onClick={searchSubmitted} >
                            <FontAwesomeIcon icon="fa-magnifying-glass" />
                        </div>
                    </div>
                    <a className="favorites" href="/favorites">
                        <FontAwesomeIcon icon="fa-heart" />
                        <span> {favorites.length ? `(${favorites.length})` : null}</span>
                    </a>
                    <div className="filter">
                        <FontAwesomeIcon icon="fa-filter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

// dodać wyszukiwanie ksiązki po nazwie, nazłuchiwać inputchange i po odczekaniu 1 sec wysyła zapytanie z adresem po przyjściu zapytania podmienia się state books
// dodać modal z filtrami (checkbox z kategoriami)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss';

const Header = ({ favorites, searchValue, setSearchValue, searchSubmitted, filterBooks }) => {

    return (
        <div className="header">
            <div className="container">
                <a className="title-header" href="/books-app">BOOKS APP</a>
                <div className="options">
                    <div className="search-container">
                        <input className="search-input" type="text" placeholder="Tytuł..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                        <div className="search-icon" onClick={searchSubmitted} >
                            <FontAwesomeIcon icon="fa-magnifying-glass" />
                        </div>
                    </div>
                    <div className="buttons-container">
                        <div className="favorites">
                            <FontAwesomeIcon icon="fa-heart" />
                            <span> {favorites.length ? `(${favorites.length})` : null}</span>
                        </div>
                        <div className="filter" onClick={filterBooks}>
                            <FontAwesomeIcon icon="fa-filter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
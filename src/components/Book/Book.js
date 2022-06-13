import React from 'react';
import { useState, useEffect } from 'react';
import './book.scss';

const Book = ({ props, favorites, setFavorites }) => {

    const [favoriteTitleButton, setFavoriteTitleButton] = useState();

    useEffect(() => {
        favorites.includes(props.id) ? setFavoriteTitleButton('Usuń z Ulubionych') : setFavoriteTitleButton('Dodaj do Ulubionych')
    }, [favorites, props]);

    const getImgUrl = () => {
        return props.resources.filter(url => url.uri.includes('cover.medium.jpg'))
    }

    const getTextUrl = () => {
        if (props.resources.filter(url => url.uri.includes('.pdf.images')).length) {
            return props.resources.filter(url => url.uri.includes('.pdf.images'))
        } else {
            return props.resources.filter(url => url.uri.includes('.txt'));
        }
    }

    const handleFavoritesBook = () => {

        if (favorites.filter(id => id === props.id).length) {
            setFavorites(favorites.filter(id => id !== props.id))
            setFavoriteTitleButton('Dodaj do Ulubionych')

        } else {

            if (favorites) {
                if (!favorites.includes(props.id)) setFavorites([...favorites, props.id])
            } else setFavorites([props.id]);
            setFavoriteTitleButton('Usuń z Ulubionych')

        }
    }

    return (
        <div className="book">
            <div className="info-book">
                <img src={getImgUrl()[0].uri} alt='books' />
                <p className="title-book" title={props.title}>{props.title}</p>
            </div>
            <div className="buttons">
                <div className="button add-fav-button" onClick={handleFavoritesBook}>{favoriteTitleButton}</div>
                <a href={getTextUrl()[0].uri} target="_blank" rel="noreferrer" >
                    <div className="button read-button">Czytaj</div>
                </a>
            </div>
        </div>
    )
}

export default Book;
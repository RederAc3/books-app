import { useState, useEffect } from 'react';
import './book.scss';

const Book = ({ props, favorites, setFavorites }) => {

    const [favoriteTitleButton, setFavoriteTitleButton] = useState();

    useEffect(() => {
        favorites.includes(props.id) ? setFavoriteTitleButton('Ulubione') : setFavoriteTitleButton('Dodaj do Ulubionych')
    }, [favorites, props]);

    const getImgUrl = () => {
        return props.resources.filter(url => url.uri.includes('cover.medium.jpg'))
    }

    const getTextUrl = () => {
        return props.resources.filter(url => url.uri.includes('.txt'))
    }

    const addFavoritesBook = () => {
        setFavoriteTitleButton('Ulubione')
        return favorites ? (
            !favorites.includes(props.id) ? setFavorites([...favorites, props.id]) : null
        ) : setFavorites([props.id]);
    }



    return (
        <div className="book">
            <div className="info-book">
                <img src={getImgUrl()[0].uri} alt='books' />
                <p className="title-book">{props.title}</p>
                {/* <p className="download-count">Ilośc pobrań: {props.downloads}</p> */}
            </div>
            <div className="buttons">
                <div className="button add-fav-button" onClick={addFavoritesBook}>{favoriteTitleButton}</div>
                <a href={getTextUrl()[0].uri} >
                    <div className="button read-button">Czytaj</div>
                </a>
            </div>
        </div>
    )
}

export default Book;
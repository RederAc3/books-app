import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss';

const Header = ({favorites}) => {

    return (
        <div className="header">
            <div className="container">
                <a className="title-header" href="/">BOOKS APP</a>
                <div className="options">
                    <a className="favorites" href="/favorites">
                    <FontAwesomeIcon icon="fa-heart" /> 
                    <span> {favorites.length ? `(${favorites.length})` : null }</span>
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
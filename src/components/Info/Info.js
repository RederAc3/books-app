import React from 'react';
import './info.scss';

const Info = ({ message, loading }) => {
    if (message) return <p>{message}</p>
    
    if (loading) {
        return (
            <>
                <div className="loading-container">
                    <div className="loader"></div>
                    <p>Ładowanie...</p>
                </div>
            </>
        );
    }

}

export default Info;
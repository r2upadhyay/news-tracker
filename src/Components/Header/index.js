import React from 'react';
import './styles.scss';
import image from '../../image/news-1644696_1280.png'

const Header = (props) => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="header-img">
                    <img src={image} className="header-content__logo" alt="logo"/>
                </div>
                <nav className="header__details">
                    <a href="" className="jobs">Jobs</a>
                    <a href ="" className="headlines">Headlines</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;
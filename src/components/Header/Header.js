import React from 'react';
import './Header.scss';
import image from '../../assets/tumblr-2151051_1280.png';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-img">
                    <img src={image} className="header-content__logo" alt="logo" />

                </div>
                <h1 className="text">News Tracker</h1>
            </header>
        );
    }
}
export default Header;
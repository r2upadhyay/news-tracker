import React from 'react';
import './styles.scss';
import SearchBox from '../Search-box/index';
import Button from '../Button/index';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="header-name">
                    <h1>News Tracker</h1>
                </div>
                <div className="header__details">
                    <div className="header__details--search">
                        <SearchBox placeholder="Enter date"/>
                    </div>
                    <div className="header__details--button">
                        <Button icon="btn">Search</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
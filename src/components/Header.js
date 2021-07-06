import React from 'react';

const Header = ({title}) => {
    return (
    <header className="header">
        <nav className="nav">
            <div className="nav__container container">
                <div className="nav__logo">
                    <h1>{title}</h1>
                </div>
                <div className="nav__items">

                </div>
            </div>
        </nav>
    </header>
    );
}

export default Header;
import React from 'react';
import Nav from './Nav';

const Header = ({changeLoct , setUbicationWrote}) => {
    return (
        <header>
            <div className="logoCont">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="logo" className='logo' />
            </div>
            
            <Nav changeLoct={changeLoct} setUbicationWrote={setUbicationWrote}/>
        </header>
    );
};

export default Header;
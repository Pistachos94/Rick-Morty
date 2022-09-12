import React from 'react';

const Nav = ({changeLoct, setUbicationWrote}) => {
    return (
        <nav>
            <div className='searchCont'>
                <input 
                    className='search'
                    type="text"  
                    placeholder='Type a location' 
                    onChange={e=>setUbicationWrote(e.target.value)}
                    />
                <button onClick={changeLoct} className='searchButton'>Search</button>
            </div>
        </nav>
    );
};

export default Nav;
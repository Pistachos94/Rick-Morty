import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterElement from './CharacterElement';
import Header from './Header';

const RickMorty = () => {

    const [ubication, setUbication] = useState({});
    const [ubicationWrote, setUbicationWrote] = useState("")
    useEffect(() => {
        const randomLoc = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomLoc}`)
            .then(res => setUbication(res.data))

    }, [])
    const changeLoct = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${ubicationWrote}`)
            .then(res => setUbication(res.data))
    }
    const population = (ubication.residents)?.length;
    return (
        <div className='generalCont'>
            <Header changeLoct={changeLoct} setUbicationWrote={setUbicationWrote} />
            <div className="contAll">
                <main>
                    <div className="contInfoLoct disflex wrap">
                        <div className='col-6 col-m-12'>
                            <h4>Name:</h4>
                            <span className='infoLocat'>{ubication.name}</span>
                        </div>
                        <div className='col-6 col-m-12'>
                            <h4>Type:</h4>
                            <span className='infoLocat'>{ubication.type}</span>
                        </div>
                        <div className='col-6 col-m-12'>
                            <h4>Dimension</h4>
                            <span className='infoLocat'>{ubication.dimension}</span>
                        </div>
                        <div className='col-6 col-m-12'>
                            <h4>Population:</h4>
                            <span className='infoLocat'>{population}</span>
                        </div>
                    </div>
                </main>

                <section>
                    <h2 className='colorWhite'>Residents:</h2>
                    <ul className='characterInfoCont disflex'>
                        {ubication.residents?.map(resident => (
                            <CharacterElement key={resident} resident={resident} />
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default RickMorty;
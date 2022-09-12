import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CharacterElement = ({ resident }) => {
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios.get(resident)
            .then(res => setCharacter(res.data))
    }, [])
    const episodes=(character.episode?.[0])?.length
    return (
        <li className='characterCont'>
            <div className="imgCont">
                <div className="statusCha disflex">
                    <div className="circleStatus"
                        style={{ background: character.status === "Dead" ? "red" : 
                                character.status === "Alive" ? "green" : "gray" }}>
                    </div>
                    <span className='infoStatus colorWhite bold'>{character.status}</span>
                </div>
                <img src={character.image} alt="" />
            </div>
            <div className='totalInfo'>
                <h3 className='colorWhite'>{character.name}</h3>
                <hr/>
                <div className="categoryCont">
                    <p className='category'>Race</p>
                    <span className='colorWhite bold'>{character.species}</span>
                </div>
          
                <div className="categoryCont">
                    <p className='category'>Origin</p>
                <   span className="colorWhite bold">{character.origin?.name}</span>
                </div>
             
                <div className="categoryCont">
                    <p className='category'>Episodes where appear</p>
                    <span className="colorWhite bold">{episodes}</span>
                </div>
               
            </div>
        </li>
    );
};

export default CharacterElement;
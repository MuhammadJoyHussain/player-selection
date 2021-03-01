import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const {name, born, birthPlace, country, role, battingStyle, bowlingStyle, salary, img} = props.player;
    // console.log(props)
    const addInSelection = props.addInSelection;
    return (
          <div className='players-container'>
        <div className='player-container'>
        <img src={img} alt=""/>
        <h3>Name: {name}</h3>
        <h3>Born: {born}</h3>
        <h3>Birth Place: {birthPlace}</h3>
        <h3>Country: {country}</h3>
        <h3>Role: {role}</h3>
        <h3>Batting Style: {battingStyle}</h3>
        <h3>Bowling Style: {bowlingStyle}</h3>
        <h3>Salary Per Month: {salary}</h3>
        <br/>
        <Button color="success" onClick={() => addInSelection(props.player)}><FontAwesomeIcon icon={faPlus}/> Select Player</Button>
        </div>
        </div>
    );
};

export default Player;
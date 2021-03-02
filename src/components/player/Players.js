import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Players = (props) => {

    const { id, image, name, email, salary } = props.player;
    const nameStyle = { border: '2px solid lightgray', margin: '30px', padding: '20px' }
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div className="players-container">

            <div style={nameStyle} className="player-container">

              <h3>Player Id NO:{' ' + id}</h3>
                <h3>Player Name: {' ' + name}</h3>
                <img src={image} alt="" />
                <p>Player Email: {' ' + email}</p>
                <p><small>Player Salary: {' ' + salary}</small></p>
                <button className="btn-btn" onClick={() => handleAddPlayer(props.handleAddPlayer)}><FontAwesomeIcon icon={faUserPlus} /> Add player</button>

            </div>

            <div className="addPlayer-container">

               <h5>Name:{}</h5>
               <h5><p>Email: {}</p></h5>
                <h5><p><small>Salary:{}</small></p></h5>

            </div>

        </div>
    );
};

export default Players;
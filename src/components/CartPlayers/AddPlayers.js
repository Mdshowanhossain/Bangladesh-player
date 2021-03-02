import React from 'react';

const AddPlayers = (props) => {

    const addPlayer = props.addPlayer;

    const bdStayle = { backgroundColor: 'black', color: 'red' }
    return (
        <div>
            <h1 style={bdStayle}>Bangladesh</h1>
        </div>
    );
};

export default AddPlayers;
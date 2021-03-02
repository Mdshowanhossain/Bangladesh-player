import './App.css';
import { useEffect, useState } from 'react';
import Players from './components/player/Players';
import AddPlayer from './components/CartPlayers/AddPlayers';
import './components/player/Players.css';

// import 'Badge';


function App() {
  const [players, setPlayers] = useState([])

  const [addPlayer, setAddPlayer] = useState([]);

  useEffect(() => {

    fetch('https://api.mocki.io/v1/2b926d98')
      .then(res => res.json())
      .then(data => setPlayers(data))

  }, [])

  const handleAddPlayer = (player) => {
    const newAddPlayer = [...addPlayer, player];
    setAddPlayer(newAddPlayer);

   
  }
  const headerStyle={backgroundColor: 'black', color: 'orange'}
  return (
    <div className="App">

      <h1 style={headerStyle}>Cricket Player list In Bangladesh </h1>

   

      {/* HERE I AM USE BOOTSTRAP */}

      {/* <Badge pill variant="success">
        Success
      </Badge>{' '} */}

      {/* HERE I AM USE BOOTSTRAP */}

      <AddPlayer addPlayer={addPlayer} ></AddPlayer>

      <h1>Total Players:{players.length}</h1>
      <h3>Player added:{addPlayer.length}</h3>
      <h4><p><small>Salary: </small></p></h4>


      <ul>
        {
          players.map(player => <Players player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Players>)
        }
      </ul>
      <h2></h2>


    </div>
  );
}

export default App;

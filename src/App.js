import React, { useEffect, useState } from 'react';
import './App.css';
import Selection from './Components/Player-Selection/Selection';
import Player from './Components/Players-Info/Player';
import Players from './Data/db.json'






function App() {
  const [players, setPlayers] = useState([]);
  useEffect (()=>{
    setPlayers(Players);
  }, []);
  const [selectionArea, setselectionArea] = useState([]);

  const addInSelection = (Select) =>{
    console.log('add')
    const newSelect = [...selectionArea, Select];
    setselectionArea(newSelect);
  }
  return (
    <div className='App'>
       <h1>ODI Team Selection</h1>
      <div className='container'>
      <div className='player-info'>
        <h2>Total Players: {players.length}</h2>
      {
        players.map(player => <Player addInSelection={addInSelection} player={player}></Player>)
      }
    </div>
    <div>
      <Selection selectionArea={selectionArea}></Selection>
    </div>
    </div>
    </div>  
   );
}

export default App;

import { useState } from 'react';
import './App.css';
import WorldList from './WorldList';
import World from './World';

const NUM_TRIES = 6;
const WORD_LENGTH = 5;
const states = {
  EMPTY: 'empty',
  ABSENT: 'absent',
  PRESENT: 'present',
  CORRECT: 'correct',
  TBD: 'tbd',
};
const statesByScore = [states.ABSENT, states.PRESENT, states.CORRECT];
const stateIcons = {
  [states.ABSENT]: '⬛',
  [states.PRESENT]: '🟨',
  [states.CORRECT]: '🟩',
};

function App() {

  let lIndex = 0;
  const initialWorld = {
    Id: 0,
    Letters: [
      {Status: 0, Id: lIndex++},
      {Status: 0, Id: lIndex++},
      {Status: 0, Id: lIndex++},
      {Status: 0, Id: lIndex++},
      {Status: 0, Id: lIndex++},
    ]
  }

  const colors = ['white', 'yellow', 'green', 'grey'];

  const [letter, setLetter] = useState();
  const [currWorld, setCurrWorld] = useState(initialWorld);
  const [worlds, setWorlds] = useState([]);

  function changeStatusClick(letter) {
    console.log('prev status: ' + letter.Status);
    letter.Status++;
    if(letter.Status > 3)
      letter.Status = 0;
    letter.Color = colors[letter.Status];
    setLetter(letter);
    //setCurrWorld(currWorld);
    console.log('new status: ' + letter.Status);
  }

  function addWorldClick(world){
    worlds.push({
      Id: worlds.length + 1,
      Letters: world.Letters
    })

    setCurrWorld({
      Id: worlds.length + 5,
      Letters: [
        {Status: 0, Id: lIndex++, Char: 'w'},
        {Status: 0, Id: lIndex++},
        {Status: 0, Id: lIndex++},
        {Status: 0, Id: lIndex++},
        {Status: 0, Id: lIndex++},
      ]
    });
    setWorlds(worlds);

    console.log('addWorldClick');
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className='main-grid'>
          <WorldList worlds={worlds} onClick={changeStatusClick}/> 

          <World world={currWorld} isEditEnable={true} onClick={() => {}}/>

          <button className='button-add' onClick={() => addWorldClick(currWorld)}/>
        </div>
      </header>
    </div>
  );
}

export default App;

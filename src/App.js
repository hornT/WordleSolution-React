import { useState } from 'react';
import './App.css';
import WordList from './WordList';
import Word from './Word';
import wordsVacabulary from './data/words.json';
import SuggestionList from './SuggestionList';

const NUM_TRIES = 6;

const states = {
  ABSENT: 'absent',
  PRESENT: 'present',
  CORRECT: 'correct',
};

const stateColors = {
  [states.ABSENT]: 'grey',
  [states.PRESENT]: 'yellow',
  [states.CORRECT]: 'green',
};

function App() {

  const getEmptyWord = (startId) => {
    let index = 0;

    return {
      Id: 0,
      Letters: [
        {Status: states.ABSENT, Id: startId++, Index: index++, Color: 'grey'},
        {Status: states.ABSENT, Id: startId++, Index: index++, Color: 'grey'},
        {Status: states.ABSENT, Id: startId++, Index: index++, Color: 'grey'},
        {Status: states.ABSENT, Id: startId++, Index: index++, Color: 'grey'},
        {Status: states.ABSENT, Id: startId++, Index: index++, Color: 'grey'},
      ]
    }
  }

  const [currWord, setCurrWord] = useState(getEmptyWord(0));
  const [wordLists, setWords] = useState([]);
  const [index, setIndex] = useState(5);
  const [currTry, setTry] = useState(1);
  const [currVacabulary, setCurrVacabulary] = useState(wordsVacabulary);
  const [filters, setFilters] = useState([]);

  const getNextStatus = (currStatus) => {
    switch (currStatus) {
      case states.ABSENT:
        return states.PRESENT;
      case states.PRESENT:
        return states.CORRECT;
      case states.CORRECT:
        return states.ABSENT;
      default:
        return states.ABSENT;
    }
  };
  
  const changeStatusClick = (word, index) => {
    const letter = word.Letters[index];

    letter.Status = getNextStatus(letter.Status);
    letter.Color = stateColors[letter.Status];

    setCurrWord({
      Id: word.Id,
      Letters: word.Letters
    });
  }

  const applyFilters = () => {

    let newVacabulary = currVacabulary;

    filters.forEach(filter => {
      newVacabulary = newVacabulary.filter((word) => filter(word));
    });

    setCurrVacabulary(newVacabulary);
  }

  const addFilter = (letters) => {

    const newFilters = filters;

    letters.forEach((letter) => {
      switch (letter.Status) {
        case states.ABSENT:
          newFilters.push((word) => word.indexOf(letter.Char) === -1);
          break;
        case states.PRESENT:
          newFilters.push((word) => word.indexOf(letter.Char) !== -1);
          newFilters.push((word) => word.indexOf(letter.Char) !== letter.Index);
          break;
        case states.CORRECT:
          newFilters.push((word) => word[letter.Index] === letter.Char);
          break;
        default:
          break;
      }
    });

    setFilters(newFilters);

    applyFilters();
  };

  const addWordClick = () => {
    wordLists.push({
      Id: wordLists.length + 1,
      Letters: currWord.Letters
    })

    addFilter(currWord.Letters);

    setCurrWord(getEmptyWord(index));
    setIndex(index + 5);

    setWords(wordLists);

    setTry(currTry + 1);

    if(currTry >= NUM_TRIES)
      reset();
  }

  const reset = () => {
    setCurrWord(getEmptyWord(0));
    setIndex(5);
    setWords([]);
    setTry(1);
    setCurrVacabulary(wordsVacabulary);
    setFilters([]);
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className='main-grid'>
          <WordList words={wordLists} onClick={() => {}}/> 

          <Word word={currWord} isEditEnable={true} onClick={changeStatusClick}/>

          <SuggestionList words={currVacabulary} />

          <button className='button-add' onClick={addWordClick} >Add</button>
          <button className='button-reset' onClick={reset} >Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
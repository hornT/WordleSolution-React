//import logo from './logo.svg';
import './App.css';
//import worlds from '/.worlds';
import WorldList from './WorldList';
import World from './World';

function App() {

  const [currProduct, setStatus] = useState();

  let worlds = [];
  let currWorld = {
    Id: 0,
    Letters: [
      {Status: None},
      {Status: None},
      {Status: None},
      {Status: None},
      {Status: None},
    ]
  }

  function changeStatusClick(l) {
    setStatus(l);
  }

  function addWorldClick(){
    addWorldClick();
  }

  return (
    <div className="App">
      <header className="App-header">

        <WorldList worlds={worlds} onClick={changeStatusClick} /> 

        <World world={currWorld}/>

        <button onClick={addWorldClick}/>

      </header>
    </div>
  );
}

export default App;

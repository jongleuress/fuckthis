import logo from './logo.svg';
import './App.css';
import Weather from './weather';
import WeatherAjax from './searchajax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>test</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Weather />
        <WeatherAjax city='Arrecife'/>
      </header>
    </div>
  );
}

export default App;

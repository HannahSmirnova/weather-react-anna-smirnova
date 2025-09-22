import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />

        <footer>
          Coded by anna Smirnova and is{" "}
          <a
            href="https://github.com/HannahSmirnova/weather-react-anna-smirnova.git"
            rel="Github"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;

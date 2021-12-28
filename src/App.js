import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container app-frame">
        <Weather />
        <footer>
          <a href="https://github.com/tuvtuv1876/react-weather-app" alt="">
            open sourced
          </a>{" "}
          coded by tu vy ho hosted on{" "}
          <a href="https://friendly-meninsky-d87091.netlify.app" alt="">
            netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

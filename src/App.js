import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        <Weather defaultCity="Zurich" />
        <footer>
          <a href="https://github.com/tuvtuv1876/react-weather-app" alt="">
            open source
          </a>{" "}
          coded by tu vy ho and hosted on{" "}
          <a href="https://friendly-meninsky-d87091.netlify.app" alt="">
            netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

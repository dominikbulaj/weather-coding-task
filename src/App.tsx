import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import CityContextProvider from "./context/city";
import Landing from "./pages/Landing";

function App() {
  // catch missing API_KEY
  if (!process.env.REACT_APP_OPENWEATHERMAP_API_KEY) {
    return (
      <div className="text-lg text-red-500">
        <h1>
          Error: <strong>Open Weather Map API KEY</strong> missing! 🙉
        </h1>
        <p>
          Did you provided API KEY in <code>.env</code> file prior starting/building the app? 🧐
        </p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <CityContextProvider>
        <Landing />
      </CityContextProvider>
    </ErrorBoundary>
  );
}

export default App;

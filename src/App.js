import logo from "./logo.svg";
import "./App.css";
import Navigation from "./navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './scss/main.scss'


function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;

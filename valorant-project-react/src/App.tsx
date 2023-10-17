import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Agent from './components/Agent';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="home/:name" element={ <Agent /> } />
      <Route path="/about" element={ <About /> } />

    </Routes>
  );
}

export default App;

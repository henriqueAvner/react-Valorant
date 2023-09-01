import { useNavigate } from 'react-router-dom';
import NavBar from './nav-bar';

export default function About() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate('/home');
  }
  return (
    <>
      <NavBar />
      <h1>Sobre o Projeto:</h1>
      <h3>
        Esse projeto possui o intuito de reafirmar os conceitos aprendidos sobre o
        Framework React, através de rotas,
        rotas dinâmicas, além da montagem de componentes com High Order Functions
      </h3>
      <button onClick={ HandleClick }>Início</button>
    </>
  );
}

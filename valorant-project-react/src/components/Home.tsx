import { useNavigate } from 'react-router-dom';
import NavBar from './nav-bar';

export default function Home() {
  const navigate = useNavigate();
  function Click() {
    navigate(-1);
  }
  return (
    <>
      <NavBar />
      <div>
        <h1>Escolha um agente:</h1>
        <button onClick={ Click }>Voltar</button>
      </div>
    </>
  );
}

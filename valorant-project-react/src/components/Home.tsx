import { Link, useNavigate } from 'react-router-dom';
import NavBar from './nav-bar';
import agentData from '../data';

export default function Home() {
  const navigate = useNavigate();
  function Click() {
    navigate(-1);
  }
  return (
    <>
      <NavBar />
      <div>
        <h1>Agentes</h1>
        {agentData.map((agent) => {
          return (

            <div key={ agent.id }>
              <Link to={ `/home/${agent.name}` }><h2>{agent.name}</h2></Link>
              <img src={ agent.image } alt={ agent.name } />
            </div>
          );
        })}
        <button onClick={ Click }>Voltar</button>
      </div>
    </>
  );
}
// img - 201x350

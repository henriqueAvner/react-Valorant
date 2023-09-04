import { useParams, Link, useNavigate } from 'react-router-dom';
import agentData from '../data';

export default function Agent() {
  const params = useParams();
  const navigate = useNavigate();
  function Click() {
    navigate(-1);
  }
  const currAgent = agentData
    .find((agent) => agent.name === params.name);
  if (!currAgent) {
    return (
      <div>
        <h1>Oops! Esse agente não está disponível</h1>
        <h2>
          Acesse a
          {' '}
          <Link to="/home">página de Agentes</Link>
          {' '}
          e selecione um dos agentes presentes.
        </h2>
      </div>
    );
  }

  return (
    <div>
      <div key={ currAgent.id }>
        <h2>{`${currAgent.name}: ${currAgent.classe}`}</h2>
        <img src={ currAgent.image } alt={ currAgent.name } />
        <div>
          {currAgent.habilidades.map((habil) => {
            return (
              <h3 key={ habil }>{habil}</h3>
            );
          })}
        </div>
        <h3>{`Orbes para ultimate: ${currAgent.orbes}`}</h3>
      </div>
      <button type="button" onClick={ Click }>Voltar</button>
    </div>
  );
}

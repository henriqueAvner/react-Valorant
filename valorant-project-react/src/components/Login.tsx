import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [login, setLogin] = useState('');
  const navigate = useNavigate();
  function HandleClick() {
    navigate('/home');
  }
  return (
    <form>
      <h3>Digite seu login:</h3>
      <input
        type="text"
        value={ login }
        onChange={ (event) => setLogin(event.target.value) }
      />
      <div>
        <button disabled={ login.length < 3 } onClick={ HandleClick }>Conectar</button>
      </div>
    </form>
  );
}

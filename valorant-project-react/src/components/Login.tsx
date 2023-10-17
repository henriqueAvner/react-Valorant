import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAccess } from './redux/actions/actions';

export default function Login() {
  const [login, setLogin] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function HandleClick() {
    dispatch(userAccess(login));
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
        <button
          disabled={ login.length < 3 }
          type="button"
          onClick={ HandleClick }
        >
          Conectar
        </button>
      </div>
    </form>
  );
}

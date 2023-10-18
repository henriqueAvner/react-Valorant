import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAccess } from './redux/actions/actions';
import styles from './styles/Login.module.css';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function HandleClick() {
    dispatch(userAccess(login));
    navigate('/home');
  }
  function HandleLogin(event: any) {
    setLogin(event.target.value);
  }
  function HandlePassword(e: any) {
    setPassword(e.target.value);
  }

  return (
    <form className={ styles.formClass }>
      <h3>LOG IN:</h3>
      <input
        className={ styles.input1 }
        type="text"
        placeholder="username"
        value={ login }
        onChange={ HandleLogin }
      />
      <input
        className={ styles.input2 }
        type="password"
        value={ password }
        placeholder="password"
        onChange={ HandlePassword }
      />
      <div>
        <button
          className={ styles.ClassButton }
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

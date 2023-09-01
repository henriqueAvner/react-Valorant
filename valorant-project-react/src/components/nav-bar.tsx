import { NavLink } from 'react-router-dom';
import './nav-bar.css';

export default function NavBar() {
  return (
    <nav>
      <div>
        <NavLink to="/">Entre com outro login</NavLink>
      </div>
      <div>
        <NavLink to="/home">Agentes</NavLink>
      </div>
      <div>
        <NavLink to="/about">Sobre</NavLink>
      </div>
    </nav>
  );
}

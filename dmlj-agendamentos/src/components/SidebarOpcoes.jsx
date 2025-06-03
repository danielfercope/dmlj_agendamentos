import { Link } from 'react-router-dom';
import './Styles/Sidebar.css';

export default function Sidebar() {

  return (
    <div className={`sidebar`}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/usuarios">Cadastro de Usuários</Link></li>
          <li><Link to="/empresas">Cadastro de Empresas</Link></li>
          <li><Link to="/servicos">Cadastro de Servicos</Link></li>
          <li><Link to="/agendamentos">Cadastro de Agendamentos</Link></li>
        </ul>
      </nav>
    </div>
  );
}
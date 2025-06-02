import UsuarioForm from './UsuarioForm'
import TabelaUsuarios from './TabelaUsuarios';
import Cadastro from './Styles/Cadastro.css'


export default function CadastroUsuario() {
  return (
      <div className='Cadastro'>
        <h1 style={{ textAlign: 'center' }}>Cadastro de Usuários</h1>
        <UsuarioForm onSuccess={() => window.location.reload()} />
        <TabelaUsuarios />
      </div>
  );
}

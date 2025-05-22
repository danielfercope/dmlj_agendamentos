import UsuarioForm from './components/UsuarioForm';
import TabelaUsuarios from './components/TabelaUsuarios';
import TabelaEmpresas from './components/TabelaEmpresas';
import EmpresaForm from './components/EmpresaForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <div>
        <h1>Cadastro de Usuários</h1>
        <UsuarioForm onSuccess={() => window.location.reload()} />
        <TabelaUsuarios />
      </div>

      <div>
        <h1>Cadastro de Empresas</h1>
        <EmpresaForm onSuccess={() => window.location.reload()} />
        <TabelaEmpresas />
      </div>
    </div>

    //necessario ainda colocar os outros componentes para funcionar (Agendamento e Servico)
  );
}

export default App;

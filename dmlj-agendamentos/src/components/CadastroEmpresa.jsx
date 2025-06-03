import TabelaEmpresas from './TabelaEmpresas';
import EmpresaForm from './EmpresaForm';
import Cadastro from './Styles/Cadastro.css';

export default function CadastroEmpresa() {
  return (
      <section className='Cadastro'>
        <h1 style={{ textAlign: 'center' }}>Cadastro de Empresas</h1>
        <EmpresaForm onSuccess={() => window.location.reload()} />
        <TabelaEmpresas />
      </section>
  );
}

import TabelaServicos from './TabelaServicos';
import ServicoForm from './ServicoForm';
import Cadastro from './Styles/Cadastro.css';

export default function CadastroServico() {
  return (
      <section className='Cadastro'>
        <h1 style={{ textAlign: 'center' }}>Cadastro de Serviços</h1>
        <ServicoForm onSuccess={() => window.location.reload()} />
        <TabelaServicos />
      </section>
  );
}

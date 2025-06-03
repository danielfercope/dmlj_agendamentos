import TabelaAgendamentos from './TabelaAgendamentos';
import AgendamentoForm from './AgendamentoForm';
import Cadastro from './Styles/Cadastro.css';

export default function CadastroAgendamento() {
  return (
      <section className='Cadastro'>
        <h1 style={{ textAlign: 'center' }}>Cadastro de Agendamento</h1>
        <AgendamentoForm onSuccess={() => window.location.reload()} />
        <TabelaAgendamentos />
      </section>
  );
}

import { useState } from 'react';
import api from '../api';

export default function AgendamentoForm({ onSuccess }) {
  const [servicoId, setServicoId] = useState('');
  const [idUsuario, setIdUsuario] = useState('');
  const [data, setData] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [acoes, setAcoes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/users', { nome: servicoId, cpf: idUsuario });
    setServicoId('');
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={servicoId} onChange={e => setServicoId(e.target.value)} placeholder="Serviço ID" />
      <input value={idUsuario} onChange={e => setIdUsuario(e.target.value)} placeholder="Usuario ID" />
      <input type="time" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} placeholder="Data" />
      <input type="time" value={data} onChange={e => setData(e.target.value)} placeholder="Hora Inicio" />
      <input value={acoes} onChange={e => setAcoes(e.target.value)} placeholder="Ações" />
      <button type="submit">Cadastrar Agendamento</button>
    </form>
  );
}

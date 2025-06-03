import { useState } from 'react';
import api from '../api';

export default function ServicoForm({ onSuccess }) {
  const [nomeServico, setNomeServico] = useState('');
  const [idEmpresa, setIdEmpresa] = useState('');
  const [valor, setValor] = useState('');
  const [duracao, setDuracao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/users', { nome: nomeServico, cpf: idEmpresa });
    setNomeServico('');
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nomeServico} onChange={e => setNomeServico(e.target.value)} placeholder="Nome" />
      <input value={idEmpresa} onChange={e => setIdEmpresa(e.target.value)} placeholder="CNPJ" />
      <input type="time" value={duracao} onChange={e => setDuracao(e.target.value)} placeholder="Inicio do Expediente" />
      <input type="time" value={valor} onChange={e => setValor(e.target.value)} placeholder="Fim do Expediente" />
      <button type="submit">Cadastrar Empresa</button>
    </form>
  );
}

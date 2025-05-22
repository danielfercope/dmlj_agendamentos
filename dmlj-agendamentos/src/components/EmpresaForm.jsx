import { useState } from 'react';
import api from '../api';

export default function EmpresaForm({ onSuccess }) {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [inicioExpediente, setInicioExpediente] = useState('');
  const [fimExpediente, setfimExpediente] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/users', { nome, cpf: cnpj });
    setNome('');
    setCnpj('');
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
      <input value={cnpj} onChange={e => setCnpj(e.target.value)} placeholder="CNPJ" />
      <input type="time" value={inicioExpediente} onChange={e => setInicioExpediente(e.target.value)} placeholder="Inicio do Expediente" />
      <input type="time" value={fimExpediente} onChange={e => setfimExpediente(e.target.value)} placeholder="Fim do Expediente" />
      <button type="submit">Cadastrar Empresa</button>
    </form>
  );
}

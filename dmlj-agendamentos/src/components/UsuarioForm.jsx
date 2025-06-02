import { useState } from 'react';
import './Styles/Forms.css'
import api from '../api';

export default function UsuarioForm({ onSuccess }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/users', { nome, cpf });
    setNome('');
    setCpf('');
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
      <input value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" />
      <button type="submit">Cadastrar Usuário</button>
    </form>
  );
}

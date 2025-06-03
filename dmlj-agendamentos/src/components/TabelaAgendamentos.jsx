import { useEffect, useState } from 'react';
import './Styles/TabelaComponent.css';
import api from '../api';

export default function TabelaAgendamentos() {
  const [empresas, setEmpresas] = useState([]);

//   useEffect(() => {
//     api.get('/empresa').then(res => setUsuarios(res.data));
//   }, []); usar quando a api estiver pronta*

useEffect(() => {
    setEmpresas([
      { nome: 'Daniel', cnpj: '123.456.789-00', empresa: 'DML', valor: 'R$ 100,00', duracao: '1h', acoes: 'Editar | Excluir' }
    ]);
  }, []);
  

  return (
    <table>
      <thead>
        <tr><th>SERVIÇO ID</th><th>USUÁRIO ID</th><th>DATA</th><th>HORA INÍCIO</th><th>AÇÕES</th></tr>
      </thead>
      <tbody>
        {empresas.map(u => (
          <tr key={u.serviceId}><td>{u.usuarioId}</td><td>{u.data}</td><td>{u.horaInicio}</td><td>{u.acoes}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

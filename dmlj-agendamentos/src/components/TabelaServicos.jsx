import { useEffect, useState } from 'react';
import './Styles/TabelaComponent.css';
import api from '../api';

export default function TabelaServicos() {
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
        <tr><th>ID</th><th>Nome</th><th>EMPRESA</th><th>VALOR</th><th>DURAÇÃO</th><th>AÇÕES</th></tr>
      </thead>
      <tbody>
        {empresas.map(u => (
          <tr key={u.nome}><td>{u.cnpj}</td><td>{u.empresa}</td><td>{u.valor}</td><td>{u.duracao}</td><td>{u.acoes}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

import { useEffect, useState } from 'react';
import './Styles/TabelaComponent.css';
import api from '../api';

export default function TabelaEmpresas() {
  const [empresas, setEmpresas] = useState([]);

//   useEffect(() => {
//     api.get('/empresa').then(res => setUsuarios(res.data));
//   }, []); usar quando a api estiver pronta*

useEffect(() => {
    setEmpresas([
      { nome: 'DML', cnpj: '123.456.789-00', inicioExpediente: '08:00', fimExpediente: '17:00' }
    ]);
  }, []);
  

  return (
    <table>
      <thead>
        <tr><th>CNPJ</th><th>Nome</th><th>USER_ID</th><th>INICO DE EXPEDIENTE</th><th>FIM_EXPEDIENTE</th></tr>
      </thead>
      <tbody>
        {empresas.map(u => (
          <tr key={u.cnpj}><td>{u.nome}</td><td>{u.cnpj}</td><td>{u.inicioExpediente}</td><td>{u.fimExpediente}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

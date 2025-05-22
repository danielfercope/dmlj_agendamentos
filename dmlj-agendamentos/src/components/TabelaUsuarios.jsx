import { useEffect, useState } from 'react';
import api from '../api';

export default function TabelaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

//   useEffect(() => {
//     api.get('/users').then(res => setUsuarios(res.data));
//   }, []); usar quando a api estiver pronta*

useEffect(() => {
    setUsuarios([
      { id: '1', nome: 'Daniel', cpf: '123.456.789-00' }
    ]);
  }, []);
  

  return (
    <table>
      <thead>
        <tr><th>ID</th><th>Nome</th><th>CPF</th></tr>
      </thead>
      <tbody>
        {usuarios.map(u => (
          <tr key={u.id}><td>{u.id}</td><td>{u.nome}</td><td>{u.cpf}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

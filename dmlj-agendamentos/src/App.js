import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SidebarOpcoes';
import CadastroUsuario from './components/CadastroUsuario';
import CadastroEmpresa from './components/CadastroEmpresa';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', minHeight: '100vh' }}>
        <Sidebar />

        <main style={{
           flexGrow: 1,
            height: '100%'  // <-- i
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<CadastroUsuario />} />
            <Route path="/empresas" element={<CadastroEmpresa />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

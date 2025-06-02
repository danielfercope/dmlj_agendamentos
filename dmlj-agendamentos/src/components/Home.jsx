import "./Styles/Home.css"

export default function Home() {

  return (
      <div className="Home">
      <h1>Sistema de Gestão</h1>

      <div className="Conteudo">
        <p>
          Nossa plataforma permite criar empresas, cadastrar usuários e gerenciar
          todas as operações de forma rápida, segura e eficiente. Otimize
          processos, centralize informações e facilite o crescimento do seu
          negócio com uma solução completa e intuitiva.
        </p>

        <div className="features">
          <div className="feature-item">
            <h2>🔒 Segurança</h2>
            <p>Proteção de dados e autenticação robusta para manter sua empresa segura.</p>
          </div>
          <div className="feature-item">
            <h2>⚙️ Personalização</h2>
            <p>Configure o sistema conforme as necessidades específicas do seu negócio.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
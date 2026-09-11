import "./Sidebar.css"

// TODO: Permitir receber o nome do usuário para mostrar no final da Sidebar
// TODO: Toda utilidade da Sidebar

export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">

                <img
                    src="/src/assets/logo.png"
                    alt="Logo LHSA"
                />

                <h1>LHSA</h1>

                <p>
                    APRENDER.<br />
                    PROTEGER.<br />
                    SERVIR.
                </p>

            </div>


            <nav>

                <button className="sidebar-button">
                    🏠 Início
                </button>

                <button className="sidebar-button">
                    📋 Formulário
                </button>

            </nav>


            <div className="sidebar-bottom">

                <div className="user-info">

                    <div className="user-avatar">
                        👤
                    </div>

                    <span>
                        Usuário<br />
                        Nome
                    </span>

                </div>

                <button className="logout-button">
                    ↪ Sair
                </button>

            </div>

        </aside>
    );
}
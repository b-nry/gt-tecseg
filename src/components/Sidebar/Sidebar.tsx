import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../shared/contexts/AuthContext";

import "./Sidebar.css"

// TODO: Permitir receber o nome do usuário para mostrar no final da Sidebar (irrelevante no cenário atual)
// TODO: Pode ser interessante componetizar as partes da sidebar, como cada opção do menu, parte do perfil...

export function Sidebar() {

    const navigate = useNavigate()

    const { logout } = useAuthContext();

    const handleLogout = () => {
        logout();
    }

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

                <button 
                    className="sidebar-button"
                    onClick={() => navigate(`/home`)}
                    >
                    🏠 Início
                </button>

                <button 
                    className="sidebar-button"
                    onClick={() => navigate(`/questionario/1`)}
                    >
                    📋 Questionário
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

                <button 
                    className="logout-button"
                    onClick={handleLogout}
                    >
                    ↪ Sair
                </button>

            </div>

        </aside>
    );
}
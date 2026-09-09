import { useNavigate } from "react-router-dom";
import "./Home.css"




export function Home() {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/questionario/1`);
    }

    return (
        <div className="questionary-page">

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

                    <button className="sidebar-button active">
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

            <div>
                <div>
                    <h1> Bem vindo ao LHSA - Plataforma de Cibereducação </h1>
                </div>

                <h2> Esse protótipo tem por objetivo auxiliar as entrevistas realizadas pela equipe.</h2>
                <h2> Agradecemos muito pela atenção para nos ajudar.</h2>
                <h3> Por favor, clique no link abaixo para iniciar o questionário.</h3>

                <button
                onClick={handleNavigation}>Iniciar formulário</button>
                


            </div>
            

        </div>
    );
}
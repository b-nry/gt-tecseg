import { useNavigate } from "react-router-dom";

import { Sidebar } from "../../components/Sidebar/Sidebar";

import "../../styles/global.css"

export function Home() {

    const navigate = useNavigate();

    return (
        <div className="home-page">

            < Sidebar />

            <div>
                <div>
                    <h1> Bem vindo ao LHSA - Plataforma de Cibereducação </h1>
                </div>

                <h2> Esse protótipo tem por objetivo auxiliar as entrevistas realizadas pela equipe.</h2>
                <h2> Agradecemos muito pela sua atenção para nos ajudar.</h2>
                <h3> Por favor, clique no link abaixo para iniciar o questionário.</h3>

                <button
                    onClick={() => navigate(`/questionario/1`)}
                    >
                    Iniciar formulário
                </button>
                
            </div>
            
        </div>
    );
}
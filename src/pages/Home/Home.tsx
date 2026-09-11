import { useNavigate } from "react-router-dom";
import "../../styles/global.css"

import { Sidebar } from "../../components/Sidebar/Sidebar";



export function Home() {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/questionario/1`);
    }

    return (
        <div className="home-page">

            < Sidebar />

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
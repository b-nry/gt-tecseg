import { useNavigate, useParams } from "react-router-dom";

import { questions } from "../../data/questions";

import "./Context.css";


export function Context() {

    const { id } = useParams();

    const navigate = useNavigate();


    const question = questions.find(
        (question) => question.id === Number(id)
    );


    if (!question) {
        return <p>Contexto não encontrado.</p>;
    }


    const handleNext = () => {

        const nextQuestion = questions.find(
            (item) => item.id === question.id + 1
        );

        if (nextQuestion) {
            navigate(`/questionario/${nextQuestion.id}`);
        }

    };


    return (

        <div className="context-page">

            {/* Sidebar */}

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


            {/* Conteúdo */}

            <main className="context-content">

                <div className="context-card">

                    <div className="context-body">

                        <h2>
                            💡 {question.context.title}
                        </h2>


                        {question.context.paragraphs.map(
                            (paragraph, index) => (

                                <p key={index}>
                                    {paragraph}
                                </p>

                            )
                        )}


                        <p className="context-source">
                            {question.context.source}
                        </p>

                    </div>


                    <div className="context-footer">

                        <button
                            className="back-button"
                            onClick={() =>
                                navigate(`/questionario/${question.id}`)
                            }
                        >
                            Voltar
                        </button>


                        <button
                            className="next-button"
                            onClick={handleNext}
                        >
                            Próxima
                        </button>

                    </div>

                </div>

            </main>

        </div>
    );
}
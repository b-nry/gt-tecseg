import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { questions } from "../../data/questions";

import "./Questionary.css";


export function Questionary() {

    const { id } = useParams();

    const navigate = useNavigate();

    const question = questions.find(
        (question) => question.id === Number(id)
    );


    const [selectedAnswer, setSelectedAnswer] = useState<string>("");


    if (!question) {
        return <p>Questão não encontrada.</p>;
    }


    const handleNext = () => {

        if (selectedAnswer === "") {
            return;
        }

        navigate(`/contexto/${question.id}`);

    };

    const handleBack = () => {

        if (question.id != 1){ // deve dar problema se fizer várias perguntas!
            navigate(`/contexto/${Number(id) - 1}`)
        }
        else{
            navigate(`/home`)
        }
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


            <main className="questionary-content">

                <div className="question-card">

                    <div className="question-body">

                        <h2>
                            Pergunta: {question.question}
                        </h2>

                        <p className="question-description">
                            Selecione uma das alternativas abaixo.
                        </p>


                        <div className="options">

                            {question.options.map((option) => (

                                <label
                                    key={option}
                                    className="option"
                                >

                                    <input
                                        type="radio"
                                        name="answer"
                                        value={option}
                                        checked={
                                            selectedAnswer === option
                                        }
                                        onChange={() =>
                                            setSelectedAnswer(option)
                                        }
                                    />

                                    <span>
                                        {option}
                                    </span>

                                </label>

                            ))}

                        </div>

                    </div>


                    <div className="question-footer">

                        <button
                            className="back-button"
                            onClick={handleBack}
                        >
                            Voltar
                        </button>


                        <button
                            className="next-button"
                            onClick={handleNext}
                            disabled={selectedAnswer === ""}
                        >
                            Próxima
                        </button>

                    </div>

                </div>

            </main>

        </div>
    );
}
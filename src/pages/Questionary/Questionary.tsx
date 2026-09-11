import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { questions } from "../../data/questions";

import { Sidebar } from "../../components/Sidebar/Sidebar";
import { NavButtons } from "../../components/NavButtons/NavButtons";

import "../../styles/global.css"

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

            <Sidebar />

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

                    {/* BOTÕES DE NAVEGAÇÃO */}
                    <NavButtons 
                        onReturn={handleBack} 
                        onAdvance={handleNext}
                    />

                </div>

            </main>

        </div>
    );
}
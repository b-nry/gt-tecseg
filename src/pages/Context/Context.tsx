import { useNavigate, useParams } from "react-router-dom";

import { Sidebar } from "../../components/Sidebar/Sidebar";
import { NavButtons } from "../../components/NavButtons/NavButtons";

import { questions } from "../../data/questions";

import "../../styles/global.css"

// TODO: Pensei em deixar o botão de próxima escrito Finalizar se for a última pergunta

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
        else {
            navigate(`/agradecimento`)
        }

    };


    return (

        <div className="context-page">

            <Sidebar />

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

                    {/* BOTÕES DE NAVEGAÇÃO */}
                    <NavButtons 
                        onReturn={() => navigate(`/questionario/${question.id}`)} 
                        onAdvance={handleNext}
                    />

                </div>

            </main>

        </div>
    );
}
import styles from "./NavButtons.module.css";

interface INavButtons {
    onReturn(): void;
    onAdvance(): void;
}

// TODO: Consertar a questão do disabled

export const NavButtons = ({onReturn, onAdvance}: INavButtons) => {
    
    return (
        <div className={styles[`button-footer`]}>
            <button
                className={styles[`back-button`]}
                onClick={onReturn}
            >
                Voltar
            </button>


            <button
                className={styles[`next-button`]}
                onClick={onAdvance}
                //disabled={selectedAnswer === ""}
            >
                Próxima
            </button>
        </div>
    )
}
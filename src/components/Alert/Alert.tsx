import './Alert.css'

type AlertType = "success" | "error" | "warning";

interface IAlertProps {
    type: AlertType | null;
    message: string | null;
    onClose(): void;
}

export const Alert = ({type, message, onClose}: IAlertProps) => {

    return (
        <div className={`alert alert-${type}`}>
            <span>{message}</span>
            <button
                className={`alert-close`}
                onClick={onClose}
                aria-label="Fechar"
                >
                    ✕
                </button>
        </div>
    )
}
interface IInputField {
    label: string;
    id: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder: string;
    value: string;
    onChange(value: string): void;
    isLoading: boolean;
}

export const InputField = ({ label, id, type= 'text', placeholder, value, onChange, isLoading }: IInputField) => {

    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={isLoading}
            />
        </div>
    )
}
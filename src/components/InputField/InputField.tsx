interface IInputField {
    label: string;
    id: string;
    placeholder: string;
    value: string;
    onChange(value: string): void;
    isLoading: boolean;
}

export const InputField = ({ label, id, placeholder, value, onChange, isLoading }: IInputField) => {

    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={isLoading}
            />
        </div>
    )
}
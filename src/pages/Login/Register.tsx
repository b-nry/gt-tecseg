import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from 'dayjs';

import logo from "../../assets/logo.png";
import { InputField } from "../../components/InputField/InputField";

import "../../styles/global.css"


export function Register() {
    const [name, setName] = useState<string>('');
    const [institution, setInstitution] = useState<string>('');
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();


    const handleRegister = async () => {

        if (password != passwordConfirmation) {
            // TODO: Retornar aviso de senhas diferentes
            return;
        }
        setIsLoading(true);

        try {
            // await api.post('/register', { name, institution, birthDate, username, email, password });

            setShowSuccess(true);

            // Aguarda 2 segundos para o usuário ler e redireciona
            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">

                <div className="login-header">
                    <img
                        src={logo}
                        alt="Logo do LHSA com um cachorro"
                        className="login-logo"
                    />
                    <h1> LHSA </h1>
                    <h2> Crie sua conta </h2>
                    <h3> Comece sua jornada de aprendizado em cibersegurança! </h3>
                </div>

                <div className="login-form">

                    <InputField
                        label="Nome Completo:"
                        id="nome"
                        placeholder="Digite seu nome completo"
                        value={name}
                        onChange={setName}
                        isLoading={false}
                    />

                    <div className="input-group">
                        <label htmlFor="institution">Instituição</label>

                        <select
                            id="institution"
                            value={institution}
                            onChange={(e) => (setInstitution(e.target.value))}
                        >
                            <option value="">
                                Selecione sua instituição
                            </option>

                            <option value="uff">
                                UFF - Universidade Federal Fluminense
                            </option>

                            <option value="uerj">
                                UERJ - Universidade do Estado do Rio de Janeiro
                            </option>

                            <option value="cefetrj">
                                CEFET/RJ - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca
                            </option>

                        </select>
                    </div>

                    <div className="input-group">

                        <label htmlFor="birthDate">
                            Data de Nascimento:
                        </label>

                        <DatePicker
                            value={birthDate}
                            onChange={(newValue) => setBirthDate(newValue)}
                            openTo="year"
                            views={['year', 'month', 'day']}
                            maxDate={dayjs()}
                            slotProps={{
                                textField: {
                                    sx: {
                                        width: '100%',
                                        backgroundColor: 'white',

                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '20px',
                                        },

                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: '2px solid #C7AB43',
                                        },
                                    },
                                },
                            }}
                        />

                    </div>

                    <InputField
                        label="Nome de Usuário:"
                        id="username"
                        placeholder="Digite seu nome de usuário"
                        value={username}
                        onChange={setUsername}
                        isLoading={false}
                    />

                    <InputField
                        label="Email:"
                        id="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={setEmail}
                        isLoading={false}
                    />

                    {/*TODO: Limitar senha a 8 caracteres */}
                    <InputField
                        label="Senha:"
                        id="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={setPassword}
                        isLoading={false}
                    />

                    <InputField
                        label="Confirmação de Senha:"
                        id="passwordConfirmation"
                        placeholder="Digite novamente sua senha"
                        value={passwordConfirmation}
                        onChange={setPasswordConfirmation}
                        isLoading={false}
                    />
                </div>

                {showSuccess && (
                    <div className="alert-success">
                        <span>✓</span> Conta cadastrada com sucesso! Redirecionando...
                    </div>
                )}

                <button
                    className="login-button"
                    onClick={handleRegister}
                    disabled={isLoading}
                >
                    {isLoading ? "Cadastrando..." : "Cadastrar"}
                </button>

                <NavLink to="/login">
                    Voltar
                </NavLink>

            </div>
        </div >
    );
}
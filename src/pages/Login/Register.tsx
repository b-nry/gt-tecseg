import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from 'dayjs';

import { InputField } from "../../components/InputField/InputField";
import { Alert } from "../../components/Alert/Alert";

import logo from "../../assets/logo.png";

/* TODO: Limitação de nome de usuário e email únicos deve estar relacionada a verificar
no banco de dados se já existe um parecido */

export function Register() {

    // Dados Cadastrais
    const [name, setName] = useState<string>('');
    const [institution, setInstitution] = useState<string>('');
    const [birthDate, setBirthDate] = useState<Dayjs | null>(null);
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    // Auxiliares
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [alert, setAlert] = useState<{
        type: "success" | "error" | "warning";
        message: string;
    } | null>(null);
    const navigate = useNavigate();

    // Funções
    const handleRegister = async () => {

        if(password.length > 8){
            setAlert({
                type: "error",
                message: "A senha deve ter no máximo 8 caracteres."
            });
            
            return;
        }

        if (password != passwordConfirmation) {
            setAlert({
                type: "error",
                message: "As senhas não coincidem."
            });

            return;
        }

        setIsLoading(true);

        try {
            // await api.post('/register', { name, institution, birthDate, username, email, password });

            setAlert({
                type: "success",
                message: "Cadastro realizado com sucesso, redirecionando..."
            });

            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } 
        catch (error) {
            // TODO: Manter isso ao botar em produção???
            console.error("Erro ao cadastrar:", error);

            setAlert({
                type: "error",
                message: "Não foi possível realizar o cadastro.."
            });

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

                        <label htmlFor="birthDate"> Data de Nascimento: </label>

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
                                        borderRadius: '20px',
                                        border: '2px solid var(--lhsa-gold)'
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

                    <InputField
                        label="Senha:"
                        id="password"
                        type='password'
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={setPassword}
                        isLoading={false}
                    />
                    <div className="input-tip">
                        <h3> Atenção: Senha deve ter no máximo 8 caracteres.</h3>
                    </div>

                    <InputField
                        label="Confirmação de Senha:"
                        id="passwordConfirmation"
                        type='password'
                        placeholder="Digite novamente sua senha"
                        value={passwordConfirmation}
                        onChange={setPasswordConfirmation}
                        isLoading={false}
                    />
                </div>

                <button
                    className="login-button"
                    onClick={handleRegister}
                    disabled={isLoading}
                >
                    {isLoading ? "Cadastrando..." : "Cadastrar"}
                </button>

                <NavLink 
                    to="/login"
                    className="login-redirect"
                    >
                    Voltar
                </NavLink>

                {alert && (
                    <Alert
                        type={alert.type}
                        message={alert.message}
                        onClose={() => setAlert(null)}
                    />
                )}

            </div>
        </div >
    );
}
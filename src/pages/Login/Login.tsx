import { useState } from "react"
import { NavLink } from "react-router";

import { useAuthContext } from "../../shared/contexts/AuthContext";
import { InputField } from "../../components/InputField/InputField";

import logo from "../../assets/logo.png"
import "../../styles/global.css"

// TODO: Permitir que usuários façam login pelo nome de usuário também? Não sei como seria

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { login } = useAuthContext();

    // TODO: Função provisória para linkar com FastAPI
    const handleLogin = async () => {
        setIsLoading(true);

        try {
            // await api.get('/register', {email, password });

        } catch (error) {
            console.error("Erro ao obter informações de usuário:", error)
            setIsLoading(false);
        }

        login(email, password);

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

                    <h2> Bem-vindo novamente</h2>
                </div>

                <div className="login-form">

                    <InputField
                        label="Login:"
                        id="email"
                        placeholder="Digite seu login"
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
                </div>

                <button
                    className="login-button"
                    onClick={() => handleLogin()}
                    disabled={isLoading}
                >
                    {isLoading ? "Fazendo login..." : "Fazer Login"}
                </button>

                <NavLink to="/cadastro">
                    Cadastre-se aqui
                </NavLink>
            </div>
        </div>
    );
}
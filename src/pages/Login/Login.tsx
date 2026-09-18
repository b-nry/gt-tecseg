import { useState } from "react"
import { NavLink } from "react-router";

import { useAuthContext } from "../../shared/contexts/AuthContext";
import { InputField } from "../../components/InputField/InputField";
import { Alert } from "../../components/Alert/Alert";

import logo from "../../assets/logo.png"


export function Login() {

    // Dados de Login
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // Auxiliares
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [alert, setAlert] = useState<{
        type: "success" | "error" | "warning";
        message: string;
    } | null>(null);
    const { login } = useAuthContext();

    // Funções
    const handleLogin = async () => {

        if(password.length > 8) {
            setAlert({
                type: "error",
                message: "A senha deve ter no máximo 8 caracteres."
            });
            
            return;
        }

        setIsLoading(true);

        try {
            // await api.get('/register', {email, password });

        } catch (error) {
            // TODO: Manter isso ao botar em produção???
            console.error("Erro ao obter informações de usuário:", error)

            setAlert({
                type: "error",
                message: "Usuário ou Senha incorretos..."
            });

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

                    <InputField
                        label="Senha:"
                        id="password"
                        type="password"
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

                <NavLink 
                    className="login-redirect"
                    to="/cadastro"
                    >
                    Cadastre-se aqui
                </NavLink>

                {alert && (
                    <Alert
                        type={alert.type}
                        message={alert.message}
                        onClose={() => setAlert(null)}
                    />
                )}

            </div>
        </div>
    );
}
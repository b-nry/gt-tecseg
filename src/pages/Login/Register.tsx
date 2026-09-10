import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

// TODO: Manter ou remover dependendo da implementação do fastAPI
// import { useAuthContext } from "../../shared/contexts/AuthContext";
import logo from "../../assets/logo.png";

import "./Login.css";

export function Register() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    // Esse async provavelmente é algo para o FastAPI
    const handleRegister = async () => {
        setIsLoading(true);

        try {
            // Exemplo da chamada ao FastAPI:
            // await api.post('/register', { email, password });

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
                
                {/* Banner de Sucesso */}
                {showSuccess && (
                    <div className="alert-success">
                        <span>✓</span> Conta cadastrada com sucesso! Redirecionando...
                    </div>
                )}

                <div className="login-header">
                    <img 
                        src={logo} 
                        alt="Logo do LHSA com um cachorro"
                        className="login-logo"
                    />
                    <h1> LHSA </h1>
                    <h2> Crie sua conta </h2>
                    <h3> Comece sua jornada de aprendizado em cibersegurança </h3>
                </div>

                <div className="login-form">
                    <div className="input-group">
                        <label htmlFor="email">Login:</label> 
                        <input
                            id="email"
                            type="text"
                            placeholder="Digite seu login"
                            value={email}                              
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}                             
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

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
            </div>
        </div>
    );
}
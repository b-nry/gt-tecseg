import { useState } from "react"
import { NavLink } from "react-router";

import { useAuthContext } from "../../shared/contexts/AuthContext";

import logo from "../../assets/logo.png"
import "../../styles/global.css"


export function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { login } = useAuthContext();

    // TODO: Função provisória para linkar com FastAPI
    const handleLogin = async () => {

        try {
            // await api.get('/register', {email, password });
        } catch (error) {
            console.error("Erro ao obter informações de usuário:", error)
        }
        login(email, password);
    };

    return (
        <div className="login-page">

            <div className="login-container">

                {/* Logo e título */}
                <div className="login-header">
                    <img 
                        src={logo} 
                        alt="Logo do LHSA com um cachorro"
                        className="login-logo"
                    />

                    <h1> LHSA </h1>
                    
                    <h2> Bem-vindo novamente</h2>
                </div>

                {/* Formulário */}
                <div className="login-form">

                    <div className="input-group">
                        <label htmlFor="email">Login:</label> 
                        {/* Segundo GPT essa estrutura facilita acessibilidade */}
                        <input
                            id="email"
                            type="text"
                            placeholder="Digite seu login"
                            value={email}                              
                            onChange={(e) => setEmail(e.target.value)}
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
                        />
                    </div>

                    <button
                        className="login-button"
                        onClick={() => handleLogin()}>
                        Fazer Login
                   </button>

                    <NavLink to="/cadastro">
                        Cadastre-se aqui
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
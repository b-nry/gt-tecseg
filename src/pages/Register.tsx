import { useState } from "react"
import { useAuthContext } from "../shared/contexts/AuthContext";
import logo from "../assets/logo.png"
import "./Login.css"
import { NavLink } from "react-router";

export function Register() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { login } = useAuthContext();

    const handleLogin = () => {
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
                    
                    <h2> Crie sua conta </h2>

                    <h3> Comece sua jornada de aprendizado em cibersegurança </h3>
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

                    <NavLink to="/login">
                        Voltar
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
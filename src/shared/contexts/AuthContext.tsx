import { createContext, useCallback, useContext, useMemo, useState } from "react"

interface IAuthContextProps {
    email: string | undefined;
    accessToken: string | undefined;

    login(email: string, password: string): void;
    logout(): void;
}

const AuthContext = createContext({} as IAuthContextProps); // Armazena os valores compartilhado na aplicação

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [accessToken, setAccessToken] = useState<string>(); // Removi o null dos parênteses pois estava reclamando
    const [email, setEmail] = useState<string>();

    const logout = useCallback(() => {
        setEmail(undefined);
        setAccessToken(undefined);
    }, []);

    const login = useCallback((email: string, password: string) => {
        // Chamada ao backend para validação
        setEmail(email);
        setAccessToken(crypto.randomUUID()); // Talvez mudar isso aqui
    }, []);

    const detailedUser = useMemo(() => {
        return `O email é ${email}`
    }, [email])

    return (
        <AuthContext.Provider value={{ login, logout, accessToken, email }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const useIsAuthenthicated = () => { // Macete para verificar se tem algum accessToken
    const { accessToken } = useAuthContext();
    (accessToken)
    return !!accessToken;
}

export const useAuthEmail = () => {
    const { email } = useAuthContext();
    return email;
}


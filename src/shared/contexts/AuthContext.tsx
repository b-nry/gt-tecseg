import { createContext, useCallback, useContext, useMemo, useState } from "react"

// TODO: Mais adaptações para o FastAPI serão necessárias

interface IAuthContextProps {
    email: string | undefined;
    accessToken: string | undefined;

    login(email: string, password: string): void;
    logout(): void;
}

const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [accessToken, setAccessToken] = useState<string>();
    const [email, setEmail] = useState<string>();


    const logout = useCallback(() => {
        setEmail(undefined);
        setAccessToken(undefined);
    }, []);


    const login = useCallback((email: string, password: string) => {
        setEmail(email);
        setAccessToken(crypto.randomUUID());
    }, []);

    // Exemplo de adaptação para FastAPI
    /*
    const login = async ( email: string, password: string ) => {

        const response = await api.post("/login", { email, password });

        setEmail(email);
        setAccessToken(response.data.access_token);
    };
    */

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

export const useIsAuthenthicated = () => {
    const { accessToken } = useAuthContext();
    (accessToken)
    return !!accessToken;
}

export const useAuthEmail = () => {
    const { email } = useAuthContext();
    return email;
}


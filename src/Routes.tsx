import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useIsAuthenthicated } from './shared/contexts/AuthContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register'
import { Index } from './pages/Index'

export const AppRoutes = () => {

    // Aqui tem a lógica que só deixa entrar se tiver autenticado
    const isAuthenthicated = useIsAuthenthicated(); // Obrigatorio prefixo "use" para custom hooks

    return (
        <BrowserRouter>
            {isAuthenthicated && (
                    <Routes>
                        <Route path='*' element={<Index />} />
                    </Routes>
            )}
            {!isAuthenthicated && (
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/cadastro' element={<Register />} />
                    <Route path='*' element={<Navigate to='/login' />} />
                </Routes>
            )}
        </BrowserRouter >
    )
}
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useIsAuthenthicated } from './shared/contexts/AuthContext';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Login/Register'
import { Home } from './pages/Home/Home'
import { Questionary } from './pages/Questionary/Questionary';
import { Context } from './pages/Context/Context';
import { Thanks } from './pages/Thanks/Thanks';

export const AppRoutes = () => {

    // Aqui tem a lógica que só deixa entrar se tiver autenticado
    const isAuthenthicated = useIsAuthenthicated(); // Obrigatorio prefixo "use" para custom hooks

    return (
        <BrowserRouter>
            {isAuthenthicated && (
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/questionario/:id' element={<Questionary />} />
                        <Route path='/contexto/:id' element={<Context />} />
                        <Route path='/agradecimento' element={<Thanks />} />
                        <Route path='*' element={<Home />} />
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
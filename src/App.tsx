import { AuthProvider } from "./shared/contexts/AuthContext";
import { AppRoutes } from "./Routes";
import './App.css'

export function App() {
 
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

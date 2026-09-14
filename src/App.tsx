import { AuthProvider } from "./shared/contexts/AuthContext";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppRoutes } from "./Routes";

export function App() {

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="pt-br"
    >
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </LocalizationProvider>
  );
}

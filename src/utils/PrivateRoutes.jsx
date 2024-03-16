import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
    const authToken = Cookies.get('auth');

    // Check if authToken exists and is not empty
    const isAuthenticated = authToken && authToken !== '';
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
}
export default PrivateRoutes;
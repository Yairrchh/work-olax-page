import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { session, loading } = useAuth();

    if (loading) return null;

    if (!session) return <Navigate to="/admin-xk90" replace />;

    return children;
};

export { ProtectedRoute };

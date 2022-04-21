import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    console.log(localStorage.getItem("token"))
    if (!localStorage.getItem("token")) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

  export default ProtectedRoute;
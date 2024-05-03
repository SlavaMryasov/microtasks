import { Navigate } from "react-router-dom";
import { ReactComponentElement } from "react";
import { ReactElement } from "react";

type PropsType = {
    children: ReactElement<any>;
};

export const ProtectedRoute: React.FC<PropsType>
= ({ children }) => {
    const logged= true

    return logged
        ? children : <Navigate to="/error" />;
};
import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

type Props = {
    children: ReactNode
}

export const ProtectedRoute = ({ children }: Props) => {

    const [valid, setValid] = useState(true)
    return (
        <>
            {valid ? children : <Navigate to='/error' />}
        </>
    );
};

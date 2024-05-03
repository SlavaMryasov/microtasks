import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Error404 } from "../pages/Error404";
import { Adidas } from "../pages/Adidas";
import { Puma } from "../pages/Puma";
import { Abibas } from "../pages/Abibas";
import { Prices } from "../pages/Prices";
import { Crosses } from "../pages/Crosses";
import { Model } from "../pages/Model";
import { ProtectedPage } from "../pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  MODEL: "/:model/:id",
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // автоматом App
    errorElement: <Error404 />,
    children: [
      //все остальное чилдрены APP
      {
        path: '/',
        element: <Navigate to={PATH.ADIDAS} />,
      },
      {
        path: PATH.ADIDAS,
        element: <Adidas />,
      },
      {
        path: PATH.PUMA,
        element: <Puma />,
      },
      {
        path: PATH.ABIBAS,
        element: <Abibas />,
      },
      {
        path: PATH.PRICES,
        element: <Prices />,
      },
      {
        path: PATH.MODEL,
        element: <Model />,
      },
      {
        path: "/protected",
        element: (
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        ),
      },
      {
        path: './error',
        element: <Error404 />,
      },
    ],
  },
]);

// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Crosses />, // автоматом Crosses
//       errorElement: <Error404 />,
//       children: [  //все остальное чилдрены APP
//         {
//           path: PATH.ADIDAS,
//           element: <Adidas />,
//         },
//       ],
//     },
//   ]);

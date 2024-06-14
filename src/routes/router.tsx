import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "../../src/App";
import { Error404 } from "../../src/components/pages/Error404";
import { Adidas } from "../../src/components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Model } from "../components/pages/Model";
import { Prices } from "../components/pages/Prices";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";


export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES: '/prices',
  PROTECTED: '/protected'
} as const


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
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
        element: <Prices />
      }
      ,
      {
        path: `/:firm/:id`,
        element: <Model />
      }
      ,
      {
        path: `/error`,
        element: <Error404 />
      }
      ,
      {
        path: `/*`,
        element: <Error404 />
      }
      ,
      {
        path: PATH.PROTECTED,
        element: <ProtectedRoute>
          <ProtectedPage />
        </ProtectedRoute>
      }

    ]
  },

]);

//useNavigation, useMatches, useRouteError
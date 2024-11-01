import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../components";
import {
  Categories,
  Customer,
  Home,
  Layout,
  Login,
  Products,
  Reports,
  Riders,
  Settings,
  Variants,
  Vendors,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "dashboard",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <Categories /> },
      { path: "products", element: <Products /> },
      { path: "variants", element: <Variants /> },
      { path: "customers", element: <Customer /> },
      { path: "vendors", element: <Vendors /> },
      { path: "riders", element: <Riders /> },
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <Home /> },
    ],
  },
  {
    path: "*",
    element: <Login />,
  },
]);

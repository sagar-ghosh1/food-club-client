import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Component/Section/Home/Home";
import Blog from "../Component/pages/Blog/Blog";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Component/pages/Login/Login";
import Register from "../Component/pages/Register/Register";
import ErrorPage from "../Component/pages/ErrorPage/ErrorPage";
import ChefDetails from "../layouts/ChefDetails";
import About from "../Component/pages/About/About";
import PrivateRoute from "./PrivateRoute";
import Chef from "../layouts/Chef";
import ChefLayout from "../layouts/ChefLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    },
    {
        path: 'chef',
        element: <ChefLayout></ChefLayout>,
        children: [
            {
                path: '/chef',
                element: <Chef></Chef>,
            },
            {
                path: ':id',
                element: (
                    <PrivateRoute>
                        <ChefDetails></ChefDetails>
                    </PrivateRoute>
                ),
            }
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }

]);

export default router;
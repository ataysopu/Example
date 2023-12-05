import About from "../pages/about";
import Posts from "../pages/posts";
import {createBrowserRouter} from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import Layout from "../pages/layout";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
    {
        path: "/signin",
        element: <SignIn/>,
    },
    {
        element: <Layout/>,
        path: '/',
        children: [
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/posts',
                element: <Posts/>,
            },
            {
                path: '/posts/:id',
                element: <PostIdPage/>,
            }
        ],
    },
]);
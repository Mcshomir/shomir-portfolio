import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Header/Home/Home";

import About from "../../Components/About/About";
import Blog from "../../Components/Blog/Blog";
import Services from "../../Components/Services/Services";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Contuct from "../../Components/Contuct/Contuct";


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/home', element: <Home></Home> },
            { path: '/about', element: <About></About> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/services', element: <Services></Services> },
            { path: '/portflio', element: <Portfolio></Portfolio> },
            { path: '/contuct', element: <Contuct></Contuct> },

            { path: '/*', element: <h1>Not Found | 404</h1> }
        ]
    }
])
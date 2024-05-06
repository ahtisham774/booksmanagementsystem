import App from '../App.jsx'
import { createBrowserRouter } from "react-router-dom";
import Home from "../home/home.jsx";
import Shop from "../shop/shop.jsx";
import About from "../components/about.jsx"
import Blog from "../components/blog.jsx"
import SingleBook from '../shop/SingleBook.jsx';
import DashboardLayout from '../dashboard/DashboardLayout.jsx';
import Dashboard from '../dashboard/Dashboard.jsx';
import UploadBook from '../dashboard/UploadBook.jsx';
import ManageBooks from '../dashboard/ManageBooks.jsx';
import EditBooks from '../dashboard/EditBooks.jsx';
import Signup from '../components/Signup.jsx';
import Login from '../components/Login.jsx';
import PrivateRouter from '../firebase/privaterouter/PrivateRouter.jsx';
import Logout from '../components/Logout.jsx';
import ManageAllBooks from '../dashboard/ManageAllBooks.jsx';
import BASE_URL from '../server.js';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            }, {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`${BASE_URL}/book/${params.id}`)
            }

        ]
    },
    {
        path: "/user/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/user/dashboard",
                element: <PrivateRouter><Dashboard /></PrivateRouter>
            },
            {
                path: "/user/dashboard/upload",
                element: <UploadBook />
            },
            {
                path: "/user/dashboard/manage",
                element: <ManageBooks />
            },
            {
                path: "/user/dashboard/manage-all",
                element: <ManageAllBooks />
            },
            {
                path: "/user/dashboard/edit-book/:id",
                element: <EditBooks />,
                loader: ({ params }) => fetch(`${BASE_URL}/book/${params.id}`)
            }
        ]
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/logout",
        element: <Logout />
    }

]);
export default router;

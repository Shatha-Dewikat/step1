import { createBrowserRouter } from "react-router";
import Register from "./pages/register/Register";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/login/Login";
import Forget from "./pages/forget/Forget";
import RePass from "./pages/RePass/RePass";
import Password from "./pages/password/Password";
import Home from "./pages/home/Home";



const routers = createBrowserRouter([
{
    path:'/',
    element:<MainLayout/> ,
  
    children:[
        {
            path:'/',
            element:<Home/>
        },
        
        {
            path:'/register',
            element:<Register/>
        },{
            path:'/login',
            element:<Login/>
        },{
            path:'/forget',
            element:<Forget/>
        },{
            path:'/rePass',
            element:<RePass/>
        },{
            path:'/password',
            element:<Password/>
        }

    ],
}
]);
export default routers;


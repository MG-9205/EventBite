import './App.css'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Eventform from './Components/Eventform';
const main=()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
 const route=createBrowserRouter(
  [
    {
      path:"",
      element:main(),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/Login",
          element:<Login/>
        },
        {
          path:"/SignUp",
          element:<SignUp/>
        },
        {
          path:"/CreateEvent",
          element:<Eventform/>
        }
      ]
    }
  ]
 )

function App() {
  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App

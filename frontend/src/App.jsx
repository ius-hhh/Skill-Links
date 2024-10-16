import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import Services from "./pages/services/Services"
import Service from "./pages/service/service"
import Orders from "./pages/orders/orders"
import MyServices from "./pages/myservices/myservices"
import Add from "./pages/add/add"
import Login from "./pages/login/Login"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
import Footer from "./components/footer/Footer"
import Register from "./pages/register/Register"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import "./App.scss"

function App() {

  const Layout = ()=>{
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },{
          path:"/services",
          element:<Services/>,
        },{
          path:"/service/:id",
          element:<Service/>,
        },{
          path: "/login",
          element: <Login/>,
        },{
          path:"/orders",
          element:<Orders/>,
        },{
          path:"/register",
          element:<Register/>,
        },{
          path:"/myservices",
          element:<MyServices/>,
        },{
          path:"/add",
          element:<Add/>,
        },{
          path:"/messages",
          element:<Messages/>,
        },{
          path:"/message/:id",
          element:<Message/>,
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products"
import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/Menu"
import Footer from "./components/footer/Footer"
import "./styles/global.scss"
import Product from "./pages/product/Product"
import User from "./pages/user/User"
import Error from "./pages/err/Error";



function App() {

  const Layout = () => (
    <div className="main">
      <Navbar />
      <div className="container">

        <div className="menuContainer">
          <Menu />

        </div>

        <div className="contentContainer">
          <Outlet />
        </div>

      </div>
      <Footer />
    </div>
  )

  const router = createBrowserRouter([
    {
      path: "/REA-Panel",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />,
        },
        {
          path:"/users",
          element:<Users />,
        },
        {
          path:"/products",
          element:<Products />,
        }
        ,
        {
          path:"/users/:id",
          element: <User />,
        }
        ,
        {
          path:"/products/:id",
          element:<Product />,
        }
        
      ],
      errorElement:<Error />
      
    }
  ])


  return (
    <RouterProvider router={router} />
  );
}

export default App;

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Create from "./pages/Create"
function App() {
  const routes =createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
        index:true,
        element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/create",
          element:<Create/>
        }
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App
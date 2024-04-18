import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Locations from "./pages/locations"
import Layout from "./components/MainLayout"
import Page404 from "./pages/Page404"

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/locations",
          element: <Locations/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App

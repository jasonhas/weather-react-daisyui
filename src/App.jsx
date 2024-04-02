import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
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
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App

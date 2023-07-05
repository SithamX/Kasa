import Home from './pages/Home'
import Housing from './pages/Housing';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/housing",
    element: <Housing />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

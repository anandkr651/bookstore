import Home from "./components/Home/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";

;

function App() {
  const [authUser,setAuthUser]= useAuth()
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={authUser ? <Layout /> : <Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Route>
    </>
  )
)
return(
  <>
   <RouterProvider router={router} />
      <Toaster />
  </>
)
}

export default App;

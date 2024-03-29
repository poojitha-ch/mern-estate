import { BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";

import Singout from "./pages/Singout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/signin";
import Header from "./components/Header";


export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/sign-in' element={<SignIn/>} />
    <Route path='/sign-out' element={<Singout/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/profile' element={<Profile/>} />
   </Routes>
   </BrowserRouter>
  )
}

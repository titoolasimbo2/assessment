import { Route, Routes } from "react-router"
import Login from '../components/login'
import About from '../components/about'
import Forgotpassword from '../components/forgotpassword'
import Contactus from '../components/contactus';
import Signup from '../components/signup';
import App from '../App'
import NotFound from '../components/notfound'
import Home from "../components/home";

const MyRoutes = () => {
    return (
        <Routes>
            < Route path="/" element={<Login />} />
            < Route path="/about" element={<About />} />
            < Route path="/contactus" element={<Contactus />} />
            < Route path="/forgotpassword" element={<Forgotpassword />} />
            < Route path='/signup' element={<Signup />} />
            < Route path="*" element={<NotFound/>} />
            < Route path= "/Home" element= {<Home /> }/> 
            < Route path= "/login" element= {<Login /> }/> 

        </Routes>
    )
}
export default MyRoutes; 

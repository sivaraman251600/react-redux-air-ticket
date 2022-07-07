import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { AiFillHome } from "react-icons/ai"
import { AiOutlineLogin } from "react-icons/ai"
import Login from './components/Pages/Login_Page/Login';
import Registration from './components/Pages/Registration_Page/Registration';
import MainPageAfterLogin from './components/Pages/Routing_Pages/Main_Page_After_Login/MainPageAfterLogin';

function App() {
  return (
    <div className="App">
      <div className='navigation-wrapper'>
      <nav className='navigation-bar'>
        <BrowserRouter>
        <Link to={"/"} className="home-link-tag"><AiFillHome/></Link>
        <Link to={"/login"} className="login-link-tag"><AiOutlineLogin /></Link>
        <Link to={"/registration"} className="register-link-tag">Register</Link>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/registration' element={<Registration />}/>
          <Route path='/mainpage' element={<MainPageAfterLogin />}/>
        </Routes>
        </BrowserRouter>
      </nav>
      </div>
    </div>
  );
}

export default App;

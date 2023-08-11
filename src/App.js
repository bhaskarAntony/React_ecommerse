import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import Regester from './pages/Regester';
import Login from './pages/Login';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Favorate from './pages/Favorate';
import Profile from './pages/Profile';
import Pnf from './pages/Pnf';
import Products from './pages/Products';

function App() {
  return (

             
        <div>
          <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover  
      theme="colored" />
     <Router>
    <Navbar/>
     <Routes>
     <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/register'} element={<Regester/>}/>
      <Route path={'/orders'} element={<Orders/>}/>
      <Route path={'/search'} element={<Search/>}/>
      <Route path={'/cart'} element={<Cart/>}/>
      <Route path={'/favorate'} element={<Favorate/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
      <Route path={'/products'} element={<Products/>}/>
      <Route path={'/*'} element={<Pnf/>}/>
     </Routes>
    </Router>
    </div>
  );
}

export default App;

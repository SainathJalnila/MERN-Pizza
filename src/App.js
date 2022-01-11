import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './screen/Home';
import cart from './screen/Cart';
import login from './screen/Login';
import register from './screen/Register';



import { BrowserRouter, Link, Route , Routes, Switch }  from 'react-router-dom'
import Order from './screen/Order';
import admin from './admin/Admin';



function App() {
  return (
    <div className="App">
    <Navbar/>    
    <BrowserRouter>            
            <Route exact path="/" component={Home} />   
            <Route path="/cart" component={cart}/>
            <Route path="/login" component={login}/>
            <Route path="/register" component={register}/>
            <Route path="/orders" component={Order}/>
            <Route path="/admin" component={admin}/>
    </BrowserRouter>
   
    </div>
  );
}

export default App;

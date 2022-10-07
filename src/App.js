import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './authentication/login';
import Signup from './authentication/signup';
import Homepage from './components/homepage';
import ChangePassword from './authentication/changepassword';
import Notepad from './components/notepad';
import Payment from './components/payment';
import React from 'react';

class App extends React.Component {
  constructor(props){
      super(props)
  }

  componentDidMount(){
    localStorage.setItem("enableuser", 0)
  }
  render()
  {
      return(
   // <div style={{marginTop : '8%'}}>
    // <BrowserRouter>
    <Routes >
         <Route path="/" element={<Homepage {...this.props} />}/>
                <Route path="/Login" element={<Login  {...this.props}/>} />
                <Route path="/Signup" element={<Signup {...this.props}/>} />
                <Route path="/Notepad" element={<Notepad {...this.props}/>} />
                <Route path ="/Payment"  element={<Payment {...this.props}/>} />
                <Route path ="/ChangePassword"  element={<ChangePassword {...this.props}/>} />
                
      </Routes>
      // </BrowserRouter>
     // </div>
     );
    }
}
export default App;

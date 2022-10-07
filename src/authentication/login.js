import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import { style } from '@mui/system';
import image from '../assests/images/doodle.webp';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import {Notepad} from '../components/notepad';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userid_helpertext : false,
            password_helpertext : false,
            emailid : "",
            password : "",
            flag : false,
            changepassword : false
        }
    }

    setEmailId = (e) =>{
        let emailid = e.target.value;
        
        this.setState({
            emailid : emailid,
          
        })
    }

    setPassword = (e) => {
        let password = e.target.value;
       
        this.setState({
            password : password,
            
        })
    }
    handleSubmit = (e) => {

        debugger;
        e.preventDefault();
        if(this.state.emailid=="")
        {
            alert("Please enter the required fields")
        }
        else{
        axios.post("http://localhost:9075/verify", {
        emailid : this.state.emailid,
        password : this.state.password
        }).then(data => {
            if(data.data.length>0)
            localStorage.setItem("enableuser", 1)
            localStorage.setItem("emailid",data.data[0].emailid)
            this.setState({flag : true})
            alert("Successfully logged in!")
        })
        }  
        
        
        
       
}
clickHandler=()=>
{
    this.setState({changepassword : true})
    
}

    render()
    {
        if(this.state.flag)
        {
            return <Navigate to="/Notepad"/>
        }
        if(this.state.changepassword)
        {
            return <Navigate to="/changepassword"/>
        }
        return(
            <>
     
             <Card sx={{  justifyContent: 'center', height:'300px',width: '40%', marginLeft:'30%', marginTop : '15%',backgroundColor:'#FADADD'}}>
                <div style={{textAlign: 'center'}}> 
            <div>
            <TextField
            value = {this.state.emailid}
          id="standard-error-helper-text"
          label="User ID"
          variant="standard"
          sx={{width : '40%'}}
          onChange = {this.setEmailId}
        />
        </div>
        <br/>
            <div>
            <TextField
            value={this.state.password}
            
          label="Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          error = {this.state.password_helpertext}
          onChange = {this.setPassword}
        />
            </div>
            <br/>
            <div>
                <Button variant ="contained"  onClick={this.handleSubmit}>Login</Button>
            </div>
            <br/>
            <div>
                <Button variant ="contained"  onClick={this.clickHandler}>Changepassword</Button>
            </div>
            <br/>
            </div>
    
 </Card> 
 
           
            </>
        );
    }
}

export default Login;
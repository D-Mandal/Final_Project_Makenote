import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import axios from 'axios';

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            emailid : "",
            password : "",
            confirm_password : "",
            
        }
    }
    handleSubmit = (e) => {
        debugger;
        e.preventDefault();

        if(this.state.emailid.length <= 8)

        {

            console.log(this.state.emailid);

            alert("Emailid must be at least 8 characters");



        }
        else if(this.state.password <=8 )
        {
            alert("Password must contain atleast 8 characters");
        }
        else if(this.state.password.search(/[a-z]/i) < 0)
        {
            alert("Password must contain atleast 1 letter");   
        }

        else if(this.state.password!==this.state.confirm_password)

        {

            alert("Passwords are not matched");

        }
        
        
        else
        {
        axios.post("http://localhost:9075/adduser", {
        emailid : this.state.emailid,
        password : this.state.password
        }).then(
            alert("Successful Registration")
        )
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
    
    setConfirmPassword = (e) => {
        
        let confirm_password = e.target.value;
       
        this.setState({
            confirm_password : confirm_password,
            
        })
    }

    render()
    {
        return(
            <>
            <Card sx={{  justifyContent: 'center', height:'80%', width: '40%', marginLeft:'30%', marginTop : '15%' ,backgroundColor:'#FADADD'}}>
            <div style={{textAlign: 'center'}}>
            <div>
            <TextField
            value = {this.state.emailid}
          id="standard-error-helper-text"
         
          label="Email ID"
          variant="standard"
          sx={{width : '40%'}}
          onChange={this.setEmailId}
        />
        </div>
        <br/>
            <div>
            <TextField
            value = {this.state.password}
        
          label="Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
          
          onChange={this.setPassword}
        />
            </div>
            <br/>
            <div>
            <TextField
            value={this.state.confirm_password}
            type="password"
          label="Re-Enter Password"
          id="standard-error-helper-text"
          variant="standard"
          sx={{width : '40%'}}
         
          onChange={this.setConfirmPassword}
          />
            </div>
            <br/>
            <div>
                <Button variant="contained"  onClick={this.handleSubmit}>Sign Up</Button>
            </div>
            <br/>
    </div>
    </Card>
           
            </>
        );
    }
}

export default Signup;
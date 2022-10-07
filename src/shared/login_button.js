import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

class Login_Button extends React.Component {
    constructor(props){
        super(props)

    }



    login = () => {
            this.props.navigate("/Login");
   
    }

    signup = () => {
        this.props.navigate("/Signup");

        }
    logout=()=>
        {
            localStorage.setItem("enableuser", 0)
            this.props.navigate("/Login");
            window.location.reload(true);
        }
    
    render()
    {
        const enable = localStorage.getItem("enableuser");
        return(
            <>
            <div style={{marginTop : '8.5%', float : 'right', display : 'flex'}}>
                <Button hidden={enable == 1} variant="contained" style={{position:'absolute',right:"10px",top:"10px",borderRadius:"25px",borderColor:'white',height:"35px",backgroundColor:'white',color:'black'}} onClick={this.login}>Login</Button>
                <div className='col-md-1'></div>
                <Button hidden={enable == 1} variant="contained"  style={{position:'absolute',right:"90px",top:"10px",borderRadius:"25px",borderColor:'white',height:"35px",backgroundColor:'black',color:'white'}} onClick={this.signup} >Signup</Button>
            </div>
            <Button hidden={enable == 0} variant="contained"  style={{position:'absolute',right:"90px",top:"10px",borderRadius:"25px",borderColor:'white',height:"35px",backgroundColor:'black',color:'white'}} onClick={this.logout} >Logout</Button>
            </>
            );
        }
    }

function Withlogin_button(props) {
    const navigate = useNavigate();
    return (
        <Login_Button {...props}  navigate={navigate} />
     );
     }

export default Withlogin_button;
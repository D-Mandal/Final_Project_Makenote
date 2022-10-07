import React from 'react';
import Logo from '../assests/images/logo.png' 
import Doodle from '../assests/images/doodle.webp';



class Homepage extends React.Component {
    constructor(props){
        super(props)
    }

    render()
    {
        return(
            <>
             <div style={{display:'flex', flexDirection:'row'}}>

             <div>
             <img src={Doodle} style={{height:'600px',width:'650px'}}/>
             </div>
            <div>
            <img src={Logo} style={{height:'600px',width:'650px'}}/>

            </div>
            </div>
           
            </>
        );
    }
}

export default Homepage;
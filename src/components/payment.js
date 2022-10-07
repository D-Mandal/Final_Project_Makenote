import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



function Payment(){

    const onToken = (token)=>{

        console.log(token);

    }
    return(

        <div className="payment_header">
            <h1>Welcome to the payment page!! </h1>
         <div className='pay'>
            <StripeCheckout

            token={onToken}

            name="Card Payment"

            currency="Inr"

            stripeKey="pk_test_51LpnJuSGTbViBjxpHhB1b7ea1C2VFu4hJHyDWSTHSXgYCU548y88j7a86RF65Pw0HJVMY7jqB1nScqoAdOyKxfN000tupk39Dl"
        
          />  
        </div>
        </div>

    )
}



export default Payment;
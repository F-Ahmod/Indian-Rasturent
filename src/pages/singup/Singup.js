import React from 'react';
import './Singup.css'

const Singup = () => {
    return (
        <div className="login-form">
        <form className="login">

             <h2>Please Sing-Up </h2>            
             <input type="text" value="Your Name" required/>
             <br />
             <input type="email" name="email" id="" placeholder="Your Email" required/>               
             <br />
             <input type="password" name="" id="" placeholder="password" required />
            
            <input style={{backgroundColor:'lightblue'}} type="submit" value="Submit" />
             
         </form>
        
        
     </div>
    );
};

export default Singup;
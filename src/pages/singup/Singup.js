import React from 'react';
import './Singup.css'

const Singup = () => {

    const hendalEmail=()=>{

    }
    const hendalPassword=()=>{
        
    }

    const hendalSingUp=e=>{
        e.preventDefault();
    }
    return (
        <div className="login-form">
        <form className="login" onSubmit={hendalSingUp} >

             <h2>Please Sing-Up </h2>            
             <input type="text" value="Your Name" required/>
             <br />
             <input onChange={hendalEmail} type="email" name="email" id="" placeholder="Your Email" required/>               
             <br />
             <input onBlur={hendalPassword} type="password" name="" id="" placeholder="password" required />
            
            <input style={{backgroundColor:'lightblue'}} type="submit" value="Sing-Up" />
             
         </form>
        
        
     </div>
    );
};

export default Singup;
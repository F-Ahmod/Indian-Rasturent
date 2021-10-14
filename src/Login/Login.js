import React from 'react';
import login from '../image/leftlogo.jpg'

const Login = () => {
    return (
        <div className=" mt-5">
        <div  className="row">
        
        <div
         className="col-md-4">
            <img style={{height:"400px"}} src={login} alt="" srcset="" />
        </div>
        <div className="col-md-5 roww">
        <h2>Please login </h2>
            <br/>
            <input type="text" value="Your Name" />
            <br /><br />
            <input type="email" value="Your Email" id="" />
            <br /><br />
            <input type="password" value="password" id="" />
            <br /><br />
            <input className="btn w-25 bg-info rounded-3"  type="button" value="Sing In with Google" />
           
        </div>
        
        

    

    </div>
    </div>
);
};

export default Login;
import React from 'react';
import  './Header.css'
import leftlogo from '../../image/res.jpg'

import { Link } from 'react-router-dom';


const Header = () => {

 

  
    return (
        <div className=" ">
        <div className="row bg-dark ">
           <div className="col-md-6 d-flex justify-content-start ">
               <img style={{height:"100%",width:"130px"}} src={leftlogo} alt="" srcset="" />
           </div>
           <div className="col-md-6 d-flex justify-content-end mt-3">
           <Link id="hedlink"className="text-light fs-4 me-2 " to="/home">Home</Link>
           <Link id="hedlink"className="text-light fs-4 me-2 " to="/login">Login</Link>
           <Link id="hedlink" className="text-light fs-4 me-3 p-1" to="/singup"><p className="bg-danger rounded-3 ">Sing-Up</p></Link>
           </div>
         </div>

        </div>
    );
};

export default Header;
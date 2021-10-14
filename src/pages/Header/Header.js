import React from 'react';
import  './Header.css'
import leftlogo from '../../image/logo2.png'

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className=" ">
        <div className="row bg-dark ">
           <div className="col-md-6 d-flex justify-content-start ">
               <img style={{height:"100%",width:"130px"}} src={leftlogo} alt="" srcset="" />
           </div>
           <div className="col-md-6 d-flex justify-content-end">
           <Link id="hedlink"className="text-light fs-4 me-2 " to="/home">Home</Link>
           
           <Link id="hedlink"className="text-light fs-4 me-2 " to="/login">Login</Link>
           <Link id="hedlink"className="text-light fs-4 me-2 " to="/details">Details</Link>
           <Link id="hedlink" className="text-light fs-4 me-3 p-1" to="/singup"><p className="bg-danger rounded-3 p-1">Sing-Up</p></Link>
           </div>
         </div>

           <div className="banner mt-5  d-flex justify-content-center align-items-center">
             <div className=" mt-5">
             <h1>Indian Rasturent</h1>
             <br />
             <div>
                 <input className="btn-in fs-6" type="text" name="" id="" placeholder="Search food" /><input type="submit" value="Search" className="btn-submit" />
             </div>
             </div>
             
           </div>
        </div>
    );
};

export default Header;
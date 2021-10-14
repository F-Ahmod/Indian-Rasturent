import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="row bg-dark mt-5">
            <div className="col-md-4 col-sm-12 text-light">
                <h2>About Us</h2>
                <p>We are Best bz of quality food.</p>
                <p>Don not Comfromise About Food Quality.</p>
            </div>
            <div className="col-md-4 col-sm-12 text-light">
                <h2>Contact With us</h2>
                <p>phone +01717918508</p>
                <p>Email : ahmod.fateh@gmail.com</p>
            </div>
            <div className="col-md-4 col-sm-12 text-light">
                <h2>Privacy </h2>
                <p>all privacy reserved by @1997 ruls</p>
               
            </div>
            
        </div>
    );
};

export default Footer;
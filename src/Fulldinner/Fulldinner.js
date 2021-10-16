import React from 'react';
import './Fulldinner.css'


const Fulldinner = ({dinner}) => {
    const {img , name , discription}=dinner;
    
    return (
        <div className="fullbrackfirst-container">
           
            <img className="rounded-circle" style={{height:"190px",width:"190px"}} src={img} alt="" srcset=""/>
            <h3 className="text-warning">{name}</h3>
            <p className="p-2">{discription}</p>
            <button id="See-details" className=" mb-2 rounded">Order Now</button>
            
            
        </div>
    );
};

export default Fulldinner;
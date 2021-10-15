import React from 'react';
import './Fulldinner.css'


const Fulldinner = ({dinner}) => {
    const {img , name , discription}=dinner;
    
    return (
        <div className="fulldinner-container">
           
           <img style={{height:"350px",width:"300px"}} src={img} alt="" srcset=""/>
            <h3 className="text-warning">{name}</h3>
            <p className="p-2">{discription}</p>
            <button className="bg-warning text-dark mb-2 rounded">Order Now</button>
            
        </div>
    );
};

export default Fulldinner;
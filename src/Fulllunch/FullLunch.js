import React from 'react';
import './FullLunch.css'


const FullLunch = ({lunch}) => {
    const {img , name , discription}=lunch;
    
    return (
        <div className="fullLunch-container">
           
           <img style={{height:"350px",width:"300px"}} src={img} alt="" srcset=""/>
            <h3 className="text-warning">{name}</h3>
            <p className="p-2">{discription}</p>
            <button className="bg-warning text-dark mb-2 rounded">Order Now</button>
            
        </div>
    );
};

export default FullLunch;
import React from 'react';
import'./Fullbrackfirst.css'

const Fullbrackfirst = ({brackfirst}) => {
    const {img , name , discription}=brackfirst;
    
    return (
        <div className="fullbrackfirst-container">
           
            <img style={{height:"350px",width:"300px"}} src={img} alt="" srcset=""/>
            <h3 className="text-warning">{name}</h3>
            <p className="p-2">{discription}</p>
            <button className="bg-warning text-dark mb-2 rounded">Order Now</button>
            
            
        </div>
    );
};

export default Fullbrackfirst;
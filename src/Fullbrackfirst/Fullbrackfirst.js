import React from 'react';
import'./Fullbrackfirst.css'

const Fullbrackfirst = ({brackfirst}) => {
    const {img , name , discription}=brackfirst;
    
    return (
        <div className="fullbrackfirst-container">
           
            <img style={{height:"350px",width:"300px"}} src={img} alt="" srcset=""/>
            <h3>{name}</h3>
            <p>{discription}</p>
            
            
        </div>
    );
};

export default Fullbrackfirst;
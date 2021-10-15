import React from 'react';


const Fulldinner = ({dinner}) => {
    const {img , name , discription}=dinner;
    
    return (
        <div className="fullbrackfirst-container">
           
            <img style={{height:"350px",width:"300px"}} src={img} alt="" srcset=""/>
            <h3>{name}</h3>
            <p>{discription}</p>
            
            
        </div>
    );
};

export default Fulldinner;
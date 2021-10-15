import React from 'react';



const FullLunch = ({lunch}) => {
    const {img , name , discription}=lunch;
    
    return (
        <div className="fullbrackfirst-container">
           
            <img style={{height:"350px",width:"300px"}} src={img} alt="" srcset=""/>
            <h3>{name}</h3>
            <p>{discription}</p>
            
            
        </div>
    );
};

export default FullLunch;
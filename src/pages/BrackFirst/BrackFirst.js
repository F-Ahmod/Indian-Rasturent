import React, { useEffect, useState } from 'react';
import Fullbrackfirst from '../../Fullbrackfirst/Fullbrackfirst';
import './BrackFirst.css'

const BrackFirst = () => {
    const [brackfirst,setBrackFirst]=useState([]);

    useEffect(()=>{
        fetch('brackfirst.json')
        .then(res => res.json())
        .then(data => setBrackFirst(data))
    },[])

    return (
        <div className="brackFirst-container mt-5">
          

           {
               brackfirst.map(brackfirst => <Fullbrackfirst 
               brackfirst={brackfirst}></Fullbrackfirst>
                )
           }
           {/* searchfood.map(food => <Food
                        key={food.id}
                        food={food}
                    
                    ></Food>) */}
           
        </div>
    );
};

export default BrackFirst;


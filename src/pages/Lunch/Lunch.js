import React, { useEffect, useState } from 'react';

import FullLunch from './../../Fulllunch/FullLunch';

const Lunch = () => {
    const [lunch,setLunch]=useState([]);

    useEffect(()=>{
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setLunch(data))
    },[])

    return (
        <div className="brackFirst-container mt-5">
          

           {
               lunch.map(lunch => <FullLunch 
               lunch={lunch}></FullLunch>
                )
           }
           {/* searchfood.map(food => <Food
                        key={food.id}
                        food={food}
                    
                    ></Food>) */}
           
        </div>
    );
};

export default Lunch;


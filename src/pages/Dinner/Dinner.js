import React, { useEffect, useState } from 'react';
import './Dinner.css'
import Fulldinner from './../../Fulldinner/Fulldinner';



const Dinner = () => {
    const [dinner,setdinner]=useState([]);

    useEffect(()=>{
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setdinner(data))
    },[])

    return (
        <div className="brackFirst-container mt-5">
          

           {
               dinner.map(dinner => <Fulldinner
               dinner={dinner}></Fulldinner>
                )
           }
          
           
        </div>
    );
};

export default Dinner;


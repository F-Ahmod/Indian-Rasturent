import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Home.css'

const Home = () => {
    const [food,setFood]=useState([])


    useEffect(()=>{
        fetch("datacare.json")
        .then(res =>res.json())
        .then(data =>setFood(data))
       
    },[])
    return (
      
        <div className="row mt-5">
           
           
            <div className="container ">
                {
                    food.map(food => <Food
                        key={food.id}
                        food={food}
                    
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import './Details.css'
import { useParams } from 'react-router';


const Details = () => {

    const { foodId } = useParams()

    const [foods, setFoods] = useState([]);
    
    // console.log(foods);

    useEffect(() => {
        fetch("/datacare.json")
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])

    const foodDetails = foods.find(food => food.id === parseInt(foodId))
    // console.log(foodDetails)

    return (
       
           
           

<div className=" d-flex justify-content-center ">
  <div className="de-container">
  <img style={{height:"350px",width:"300px"}} src={foodDetails?.img} alt="" srcset=""/>
    <div class="card-body">
      <h5 class="card-title">{foodDetails?.name}</h5>
      <p class="card-text">{foodDetails?.discription}</p>
      
    </div>
  </div>
            </div>
      
    );
};

export default Details;

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
    const hendelIncrease =()=>{
      const productPrice= document.getElementById("price")
      const countQuntity=document.getElementById("Quntity")
      countQuntity.innerText=parseInt(countQuntity.innerText)+1
     productPrice.innerText=parseInt(foodDetails.price)*parseInt(countQuntity.innerText)

    }

    return (
<div className=" d-flex justify-content-center ">
  <div className="de-container">
  <img style={{height:"350px",width:"300px"}} src={foodDetails?.img} alt="" srcset=""/>
    <div class="card-body">
      <h5 class="card-title">{foodDetails?.name}</h5>
      <p class="card-text">{foodDetails?.discription}</p>
      <h2 id="price">{foodDetails?.price}</h2>
      
    </div>
    <button onClick={hendelIncrease}>+</button>
    <span id="Quntity">1</span>
    <button >-</button>
  </div>
            </div>
      
    );
};

export default Details;

import React, { useEffect, useState } from 'react';

import { useParams} from 'react-router';


const Details = () => {

    const {foodId}=useParams()
    console.log(foodId);
    const [foods,setFoods]=useState([])
    useEffect(()=>{
        fetch("/datacare.json")
        .then(res =>res.json())
        .then(data =>setFoods(data))
       
    },[])
    
    return (
        <div>
           {
              foods.filter(fd => fd.id === foodId && console.log(fd.name))
           }
        </div>
    );
};

export default Details;
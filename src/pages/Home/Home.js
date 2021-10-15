import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Food from '../Food/Food';
import './Home.css'

const Home = () => {
    const [food,setFood]=useState([]);
    const [searchfood,setSearchfood]=useState([]);


    useEffect(()=>{
        fetch("datacare.json")
        .then(res =>res.json())
        .then(data =>{
            setFood(data)
            setSearchfood(data)
        })
       
    },[])

    const hendelSearch = (e) => {
        const searchText =  (e.target.value) 
  const foodFilder=food.filter(fd=> fd.name.toLowerCase().includes(searchText.toLowerCase()))
  setSearchfood(foodFilder)
      
        }
    return (
      
        <div className="row mt-5">
            
           <div className="mb-3 ">
                 <input onChange={hendelSearch} className="btn-in fs-6 w-75 bg-success p-2 text-dark bg-opacity-50 rounded" type="text" name="" id="" placeholder="Search food" /><input type="submit" value="Search" className="btn-submit bg-success p-2 text-dark bg-opacity-75 rounded-3" />
             </div>

             
            <div className="container ">
                {
                    searchfood.map(food => <Food
                        key={food.id}
                        food={food}
                    
                    ></Food>)
                }
                
            </div>
            
        </div>
    );
};

export default Home;
import React from 'react';
import { useHistory } from 'react-router';
import './Food.css'

const Food = ({food}) => {
 
    const {img,name,discription,id}=food;
   
    const history=useHistory()

    const handelSeeDetails=(url)=>{
       history.push(url)
    }
   
    return (

        <div className="food-container">
           
           <img className="rounded-circle" style={{height:"190px",width:"190px"}} src={img} alt="" srcset=""/>
            <h3 className="text-warning">{name}</h3>
            <p className="p-2">{discription}</p>
            <button  onClick={()=> handelSeeDetails(`details/${id}`)} type="button" id="See-details" className="btn-lg mb-3">See Details</button>
            
        </div>
        
    );
};

export default Food;
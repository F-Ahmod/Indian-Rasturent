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
           
            <img style={{height:"350px",width:"300px"}} src={img} alt="" srcset=""/>
            <h3 className="text-success">{name}</h3>
            <p>{discription}</p>
            <button  onClick={()=> handelSeeDetails(`details/${id}`)} type="button" className="btn btn-success btn-lg mb-3">See Details</button>
            
        </div>
    );
};

export default Food;
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <div className="menu-bg mt-5">
             <h4 className="text-secondary">See our more Food by clicking bellw button</h4>
             <hr className="bg-light"/>
            <Link id="hedlink"className=" fs-2 me-2  me-5 " to="/Brackfirst">Brackfirst</Link>
            <Link id="hedlink"className=" fs-2 me-2  me-5" to="/lunch">Lunch</Link>
            <Link id="hedlink"className=" fs-2 me-2  " to="/dinner">Dennar</Link>
           </div>
        </div>
    );
};

export default Menu;
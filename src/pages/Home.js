import React from 'react'
import { Link } from "react-router-dom";
import coco from '../media/hm.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${coco})` }}>
      <div className="headerContainer">
        <h1> Odida Coffee Spot </h1>
        <p> 
           Refresh yourself with the finest coffee 
        </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>

    </div>
  )
}

export default Home;

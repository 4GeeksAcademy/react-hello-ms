
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

import React from 'react';
import Jumbotron from './Jumbotron'; 
import Navbar from './Navbar';
import Card from './Card'; 
import Footer from './Footer';

const Home = () => {
  return (
    <div >
      <Navbar />
        <Jumbotron/>
        <Card/>
        <Footer/>
      
    </div>
    
  );
};

export default Home;
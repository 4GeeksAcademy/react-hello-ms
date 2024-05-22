
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
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-4 g-4">
      <Card
        title="Card title"
        description="Description for Card 1"
        buttonText="Find Out More!"
        imageUrl="https://picsum.photos/id/28/367/267"
      />
      <Card
        title="Card title"
        description="Description for Card 2"
        buttonText="Find Out More!"
        imageUrl="https://picsum.photos/id/29/367/267"
      />
      <Card
        title="Card title"
        description="Description for Card 3"
        buttonText="Find Out More!"
        imageUrl="https://picsum.photos/id/34/367/267"
      />
      <Card
        title="Card title"
        description="Description for Card 4"
        buttonText="Find Out More!"
        imageUrl="https://picsum.photos/id/35/367/267"
      />
    </div>
    </div>
        <Footer/>
      
    </div>
    
  );
};

export default Home;
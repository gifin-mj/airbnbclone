import React from 'react';
import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import datas from './data.js'

export default function App() {

  /*const data=datas.map(data=>
        <Card image={data.image} rating={data.rating} review={data.review} country={data.country}
          short={data.short} price={data.price} />
  )*/
  //or

  /*const cards =datas.map(data => {
    return(
      <Card 
            key={data.id}
            image={data.image} 
            rating={data.rating} 
            review={data.review} 
            country={data.country}
            short={data.short} 
            price={data.price}
            openspots={data.openSpots} 
            />
    )
  })*/
  //or
  const cards =datas.map(data => {
    return(
      <Card 
            key={data.id}
            //data={data} or
            {...data}
            />
    )
  })

  return (
    <div className='app'>
     
          <Navbar/> 
          <Hero/>
          <section className="cards-list">
              {cards}
          </section>
          <Footer/>
    </div>
  );
}

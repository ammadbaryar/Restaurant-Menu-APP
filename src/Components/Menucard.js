import React from 'react';
// import reactDom from 'react-dom';


import './style.css';

const Menucard = ({menuData}) => {
  return (
   <>

   {menuData.map( (currentElement) => {
    return <>
    <section className='main-card--container'>
      <div className='card-container'>
        <div className='card'>
         <div className='card-body'>
           <span className='card-number card-circle subtle' key={currentElement.id}>{currentElement.id}</span>
           <span className='card-author subtle'>{currentElement.category}</span>
           <h2 className='card-title'>{currentElement.name}</h2>
           <span className='card-description subtle'>{currentElement.description}</span>
           <div className='card-read'>Read</div>
           <div>
            <img src= {currentElement.image} alt='img' className='card-media ' />

            <span className='card-tag subtle'>Order Now </span>
           </div>
     
         </div>
        </div>
      </div>
    </section>
    </>
   } )}
    
   </>
  )
}

export default Menucard
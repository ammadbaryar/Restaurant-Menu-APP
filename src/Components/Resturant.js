import React, { useState } from 'react';
import './style.css';
import Menu from './MenuApi.js';
import Menucard from './Menucard';
// import Navbar from './Navbar.js';
import Navbar from './Navbar.js';


const Resturant = () => {

    const [menuData , setMenuData] = useState(Menu);
  

    
   const uniqueList = [ ...new Set ( Menu.map((currentElement) =>{
    return currentElement.category;
   }), "All"
  
   )]
   const [menuList, setMenuList ] = useState(uniqueList);
   setMenuList (uniqueList);
    const filterItem = (category) => {
      const updatedList = Menu.filter((currentElement) => {
          return currentElement.category === category;
      });
      setMenuData(updatedList);
    };


    
    return <>
  <Navbar filterItem = {filterItem}  menuList = {menuList} />
  <Menucard  menuData = {menuData}/>

    </>
}

export default Resturant;
import React from 'react';
import './style.css';

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
        <nav className='navbar'>
           <div className='btn-group'>

                {
                 menuList.map((currentElement)=>{
                    return(
                      <button className='btn-group__item' onClick={() => filterItem (currentElement)}>
                      {currentElement}
                      </button>
                    );
                 })}
              

            </div>
        </nav>
     </>
  );
};

export default Navbar
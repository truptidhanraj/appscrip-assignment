import React from "react" 
import "./index.css"


import {useState} from "react"
import squre from "../../Assets/squre.png"
import search from "../../Assets/search.png"
import heart from "../../Assets/heart.png"
import person from "../../Assets/person.png"
import Eng from "../../Assets/Eng.png"
import bag from "../../Assets/bag.png"
import arrow from '../../Assets/arrow.png' 

const Header = () => {
 const [selectedOption, setSelectedOption] = useState("Recommended");

 
 const options = [
    {value: "RECOMMENDED", label: "RECOMMENDED" , selected: true},
    {value: "NEWEST FIRST", label: "NEWEST FIRST"},
    {value: "POPULAR", label: "POPULAR"},
    {value: "PRICE:HIGH TO LOW", label: "HIGH TO LOW"},
    {value: "PRICE: LOW TO HIGH" , label: "LOW TO HIGH"}

 ];
 const handleChange = (event) => {
   setSelectedOption(event.target.value) 
 }

  return (
   <div>
       <div className="navbar">
   
      <div className="leftIcon">
       <img className="squre" src={squre} alt="squre"/>
      </div>
      <div className="logo">
         <h1>LOGO</h1>
      </div>
     <div className="rightIcon">
     <img className="search" src={search} alt="circle"/>
     <img className="heart" src={heart} alt="heart"/>
     <img className="bag" src={bag} alt="bag"/>
     <img className="person" src={person} alt="person"/>
     <img className="Eng" src={Eng} alt="Eng"/>
   </div>
   
   </div>
   <div className="options">
       <p>SHOP</p>
       <p>SKILLS</p>
       <p>STORIES</p>
       <p>ABOUT</p>
       <p>CONTACT US</p>
       </div>
   <hr/>
   <div className="content">
   <h1 className="heading">DISCOVER OUR PRODUCTS</h1>
   <p className="para">Lorem ipsum dolor sit amet consecteture. Amet est posuere rhoncus <br/> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
   <hr/>
   <div className="dropdown">
   <p className="items">3425 ITEMS</p>
   <p className="filter"><span><img className="arrow" src={arrow} alt="arrow"/></span>HIDE FILTER</p>
   <div>
   <select className="select" value={selectedOption} onChange={handleChange} defaultValue="RECOMMENDED">
   {options.map((option)=>(<option key={option.value} value={option.value} className="option">{option.label}</option>)
   )
}
   </select>
   </div>
   </div>
</div>
 </div>
  )
}
export default Header
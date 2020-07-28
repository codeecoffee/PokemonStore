import React, {useState, useEffect} from 'react'
import {Search, FloatCart, Toggle} from '../index'
import {Container, Row, Col }from 'react-bootstrap'
import ThemeSwitcher from '../../ThemeSwitcher/ThemeSwitcher'
// import * as themes from '../../themes'
// import ThemeContext from '../../themes/context'
import './style.css'
import logo from '../../img/Header.png'


const Header = ({purchase, toggleTheme, theme}) => {
    //cart
    const [showCart, setShowCart] = useState(false)
    //
    const openHandler = () =>{
      if(!showCart){
        setShowCart(true)
      } else{
        setShowCart(false)
      }
    }
    const closeHandler = ()=> {
      setShowCart(false)
    }
    let sideBar
    if(showCart){
      sideBar=<FloatCart close={closeHandler} cartcontainer={"Cartcontainer"} purchase={purchase} insideCart={true}/>
    }
    //
    //cart

    //Search
      const [searched, setSearched] = useState("")
      const [filter, setFilter] = useState({
        name: []
      })
      const updateSearch=(newSearchTerm)=>{
        
        console.log(newSearchTerm)

        const variable = {
      
          filter: filter,
          searched: newSearchTerm
        }
        setSearched(newSearchTerm)
      }
    //
  return(
 
    <header className="container">
      <div className="item logo">
        <img src={logo} alt="PokeStore"/>
      </div>
      <div className="searchbar">
        <Search
          refreshFunction={updateSearch}
        />
      </div>
      <div className="bttnscontainer">
        <ThemeSwitcher toggleTheme={toggleTheme}/>
        {sideBar}
          <Toggle click={openHandler}/>
      </div>
    </header>
  )
}

export default Header
 import React, {useState, useEffect, Component} from 'react';
// import React, {Component, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {ThemeProvider} from 'styled-components'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
import * as themes from './themes'
import ThemeContext from './themes/context'
// import pokemonfont from 'pokemon-font'
import { Header, Search, Cards, FloatCart } from './Components'
import Api from './api'
import './index.css'

const Body = styled.body`
  background-color: #333533;
  color: #F5CB5C;
`
// class App extends Component{
//   state ={
//     theme: themes.dark,
//     pokemon: [],
//     purchase: [],
//   }
//   toggleTheme =()=>{
//     this.setState({theme:this.state.theme === themes.dark ? themes.light : themes.dark})
//   }
//   useEffect(() => {
//         const fetchData = async () => {
//           const result = await axios(
//             'https://pokeapi.co/api/v2/type/1',
//           );
//           setData(result.data.pokemon);
//         };
//         fetchData();
//       }, []);
//   render(){
//     return(
//       <div className="App">

//       </div>
//     )
//   }
// }

// export default App

const App = () => {

  //theme
  const [theme, setTheme] = useState(themes.dark)
  function toggleTheme (theme){
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }
  //
  const [pokemon, setData] = useState([]);
 
  //search
  const search = (e) => {
    if(e.key === "Enter"){}
  }
  //
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/type/1',
      );
      setData(result.data.pokemon);
    };
    fetchData();
  }, []);

  const [purchase, setPurchase] = useState([])

  function handlePurchase(name, price, img){
    setPurchase([...purchase, {name, price, img}])
  }





  return (
    <>
    {/* <ThemeSwitcher/> */}
    <ThemeContext.Provider value={theme}>
      <ThemeContext.Consumer>
        {theme=>(
          <Body>
          <div className="container">
            <main>
              <Header purchase={purchase} toggleTheme={toggleTheme} theme={theme}/>
              <Cards pokemon={pokemon} handlePurchase={handlePurchase}/>
            </main>

          </div>
        </Body>
        )}
        
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
    </>
  )
}
//button onClick={()=>setShowCart(!showCart)}> toggle</button
export default App;

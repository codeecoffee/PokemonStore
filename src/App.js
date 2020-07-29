import React, {useState, useEffect, Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Header, Search, Cards, FloatCart } from './Components'
import Api from './api'
import getTypeFromUrl from './utils'
import './index.css'

const App = () => {

  const [pokemon, setData] = useState([]);
 
  
  const search = (e) => {
    if(e.key === "Enter"){}
  }


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/type/${getTypeFromUrl()}`,
      );
      setData(result.data.pokemon);

      document.body.style = getTypeFromUrl() === "fire" ? 'background: #E63946;' : 'background: #457B9D;';
    };
    fetchData();
  }, []);

  const [purchase, setPurchase] = useState([])

  function handlePurchase(name, price, img){
    setPurchase([...purchase, {name, price, img}])
  }

  return (
    <>
   
      <div className="container">
        <main>
          <Header purchase={purchase} />
          <Cards pokemon={pokemon} handlePurchase={handlePurchase}/>
        </main>
      </div>
        
    </>
  )
}

export default App;

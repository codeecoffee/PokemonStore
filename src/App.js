import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Header, Search, Cards, FloatCart } from './Components'
import Api from './api'
import './index.css'



const App = () => {

  //cart 
  const [product, setProduct] = useState([])
  useEffect(()=>{

  },[])

  //cart
  const [pokemon, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/type/1',
      );
      setData(result.data.pokemon);
    };
    fetchData();
  }, []);
  
  return (
    <div className="container">
      <main>
        <Header/>
        <Cards pokemon={pokemon}/>
      </main>

    </div>
  )
}
//button onClick={()=>setShowCart(!showCart)}> toggle</button
export default App;

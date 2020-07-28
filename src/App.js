import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Header, Search, Cards, FloatCart } from './Components'
import Api from './api'
import './index.css'



const App = () => {

  // //cart 
  // const [product, setProduct] = useState([])
  // useEffect(()=>{

  // },[])

  // //cart
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
  // useEffect(()=>{

  // },[handlePurchase])
  console.log("PURCHASE: ", purchase)

  return (
    <div className="container">
      <main>
        <Header purchase={purchase}/>
        <Cards pokemon={pokemon} handlePurchase={handlePurchase}/>
      </main>

    </div>
  )
}
//button onClick={()=>setShowCart(!showCart)}> toggle</button
export default App;

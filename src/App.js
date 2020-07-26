import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Header, Search, Cards, Card } from './Components'
import Api from './api'
import './index.css'



const App = () => {
  const [pokemon, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/type/1',
      );
        console.log(result)
      setData(result.data.pokemon);
    };
 
    fetchData();
  }, []);
  // const [pokemon, setPokemon]= useState([])
  // useEffect(()=>{
  //   const x=  async ()=>{
  //     await test()
  //   }
  //   x()
  // //  setPokemon( fetchData())
  // },[])

  // async function test(){
  //   const result = await fetchData()
  //   console.log(result)
  //   setPokemon(result)
  // }
  // async componentDidMount(){
  //   const data= await fetchData()
  //   console.log(data)
  // }
  //handling search
// const [search, setSearch] = useState('')
// const [result, setResult] = useState([])
// const handleInput = (e) =>{
//   let search = e.target.value

//   setSearch(prevState=>{
//     return{ ...prevState, search:search }
//   })
//   console.log(search)
// }
      return (
        <body>
            <div className="container">
            <Header/>
            <Search />
            <Cards pokemon={pokemon}/>
            {/* <h2>theme button here </h2>
            <br/>
            <br/>
            <h3>Cards HERE </h3>
            <br/>
            <h4>Card</h4>
            <h3>XXX img XXXX</h3>
            <h2>name</h2>
            <p>add to cart</p> */}
          </div>
        </body>
        
    )
}

export default App;

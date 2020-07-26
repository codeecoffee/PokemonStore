import axios from 'axios'

const url = "https://pokeapi.co/api/v2/type/1"
const Api = axios.create({
  baseURL: url,
});
export default Api



//pokemon-habitat/7/ {water pokemon}
//pokemon-habitat/9/ {waters-edge}

//pokemon-habitat/3/ { grass pokemon}
//pokemon-habitat/2/ {forest}
// export const fetchData = async () => {
//   try{
//     const {data}  = await axios.get(url)

  
//     console.log(data)
//     return data
//   } catch(error){
//     console.log(error)
//   }
// }



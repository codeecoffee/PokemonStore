import axios from 'axios'

const url = "https://pokeapi.co/api/v2/type/1"
const Api = axios.create({
  baseURL: url,
});
export default Api


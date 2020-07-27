import React, {useState} from 'react'

import './style.css'


function Search (props) {

  const [searched, setSearched] = useState("")
  const onChangeSearch = (event)=>{
    setSearched(event.currentTarget.value)
    props.refreshFunction(event.currentTarget.value)
  }

  return(
    <section className="searchbox-wrap">
      <input 
        value={searched}
        type="text" 
        className="searchbox" 
        onChange={onChangeSearch}
        placeholder="🔎 Look for your Pokemon Here "/>
    </section>
  )
}

export default Search
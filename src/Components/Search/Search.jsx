import React from 'react'

import style from './style.css'




function Search ({handleInput}) {
  return(
    <section className="searchbox-wrap">
      <input 
        type="text" 
        className="searchbox" 
        onChange={handleInput}
        placeholder="🔎 Look for your Pokemon Here "/>
    </section>
  )
}

export default Search
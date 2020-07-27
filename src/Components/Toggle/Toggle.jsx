import React, {Fragment} from 'react'
import "./style.css"

const Toggle =(props) => {
  return(
    <Fragment>
      <button id="toggle" onClick={props.click}>Cart Toggle</button>
    </Fragment>
  )
}

export default Toggle
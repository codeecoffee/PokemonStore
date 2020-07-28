// import React, { Component } from "react";

// class ThemeSwitcher extends Component {
//   render() {
//     return (
//       <div className="toggle-switch">
//         <input
//           type="checkbox"
//           className="toggle-switch-checkbox"
//           name="toggleSwitch"
//           id="toggleSwitch"
//         />
//         <label className="toggle-switch-label" htmlFor="toggleSwitch">
//           <span className="toggle-switch-inner" />
//           <span className="toggle-switch-switch" />
//         </label>
//       </div>
//     );
//   }
// }

// export default ThemeSwitcher;



import React from 'react'
const ThemeSwitcher = ({toggleTheme}) =>(
  <button onClick={toggleTheme}>Alterar tema</button>
)

export default ThemeSwitcher
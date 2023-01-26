import React from "react";
import "./navStyles.scss"

function NavBar({onChangeHandler, ...props }) {
  return (    
    <nav className="navStyle">
      <div className="container">
        <img
            className=""
            src={require(`../assets/Logo_ML.png`)}
            alt={"logo_MELI"}
            height="20px"
          />
          {props.children}
      </div>
    </nav>
  );
}
export default NavBar

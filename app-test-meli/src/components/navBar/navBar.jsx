import React from "react";
import "./navStyles.scss"

function NavBar({onChangeHandler, ...props }) {
  return (    
    <nav className="navStyle">
      <div>
        <img
            className="imgNav"
            src={require(`../../assets/Logo_ML.png`)}
            alt={"logo_MELI"}
            height="30px"
          />
      </div>
          {props.children}
    </nav>
  );
}
export default NavBar

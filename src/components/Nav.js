import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({children}) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      {children}
    </div>
  );
};

export default Nav;

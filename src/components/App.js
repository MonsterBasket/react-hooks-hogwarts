import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Sort from "./Sort";
import Hogs from "./Hogs";

import data from "../porkers_data";

function App() {
  const [pigsToShow, setPigs] = useState([...data]);

  function filter(value, min, max, other, greased){
    if(value === "all"){
      setPigs([...data])
    }
    else if(value === "weight"){
      setPigs(data.filter(a => a.weight >= min && a.weight <= max))
    }
    else if(value === "greased"){
      setPigs(data.filter(a => a[value] === !!greased))
    }
    else{
      setPigs(data.filter(a => a[value].toLowerCase().match(other)))
    }
    console.log(pigsToShow.current)
  }

  function sortBy(by){
    if (by === "name"){
      const newArray=pigsToShow.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;
        else return 0;
      });
      setPigs([...newArray]);
    }
    else{
      const newArray=pigsToShow.sort((a, b) => a.weight - b.weight)
      setPigs([...newArray]);
    }
    console.log(pigsToShow)
  }

  return (
    <div className="App">
      <Nav>
        <Filter filter={filter}/>
        <Sort sortBy={sortBy}/>
      </Nav>
      <Hogs data={pigsToShow}/>
    </div>
  );
}

export default App;

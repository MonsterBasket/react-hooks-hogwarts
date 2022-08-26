import { useState } from "react";

function Hogs({ data }) {
  const [big, setBig] = useState({hidden: "hidden"})
  let selected = {};

  function expand(e, a) {
    // const parent = e.target.parentElement;
    // e.stopPropagation();
    setBig({hidden: "visible", name: a.name, image: a.image, specialty: a.specialty, greased: a.greased ? "yes" : "no", weight: a.weight, medal:a["highest medal achieved"]})
    if (e.target === selected) {
      e.target.blur();
      selected = {};
    } else {
      selected = e.target;
    }
  }
  function contract(e) {
    if (selected === e.target) {
      selected = {};
    }
    setBig({hidden: "hidden"})
  }

  return (
    <>
      <div className="ui grid container ">
        {data.map((a) => {
          return (
            <div key = {a.name}
              style={{ backgroundImage: `url(${a.image})` }}
              className="pigTile minPigTile">
              <h3>{a.name}</h3>
              <button
                onClick={(e) => expand(e, a)}
                onBlur={(e) => contract(e, a)}
              ></button>
            </div>
          );
        })}
      </div>
      <div className={`maxPigTile ${big.hidden}`}>
        <div className="pigImg"
            style={{ backgroundImage: `url(${big.image})`}}></div>
            <h3>{big.name}</h3>
        <div>
            <div className="detailsLeft">
            Specialty:<br></br>Greased:<br></br>Weight:<br></br>Highest Medal
            Achieved:
            </div>
            <div className="detailsRight">
            {big.specialty}
            <br></br>
            {big.greased}
            <br></br>
            {big.weight}
            <br></br>
            {big.medal}
            </div>
        </div>
      </div>
    </>
  );
}

export default Hogs;

import satData from "./satData";
import './styling.css';

const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div className = "flex-container">
    {displaySats.map((sat, id) => {
      return (
        <button onClick = {() => filterByType(sat)} key = {id}>
          {sat} Orbit
        </button>
      );    
    })}
    <button onClick = {() => setSat(satData)}>All Orbits</button>
  </div>
  );
};
  
//sat and id are callbacks for map function

export default Buttons;
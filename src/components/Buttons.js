import satData from "./satData";

const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div>
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
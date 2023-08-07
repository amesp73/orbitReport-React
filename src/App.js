import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData.js";


function App() {
  // sat compares changes in state, setSat is function
  // that updates state

  // Set method prevents duplicates
  // if we only use map we would have 10 buttons many being duplicates
  const [sat, setSat] = useState(satData);
  let displaySats = [...new Set(satData.map((data) =>
data.orbitType))];
  const filterByType = (currentType) => {
      displaySats = satData.filter((newSatDisplay) => {
        return newSatDisplay.orbitType === currentType;
      });
      setSat(displaySats);
  }
  return (
    <div>
      <>
        <Banner />
        <Buttons
          filterByType={filterByType}
          setSat={setSat}
          displaySats={displaySats}
        />
        <Table sat={sat} />
      </>
    </div>
  );
}

export default App;

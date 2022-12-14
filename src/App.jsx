import React from "react";
import './resources/styles.css'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
import VenueNfo from "./components/VenueNfo/VenueNfo";


const App = () => {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
      </>

      <>
        <VenueNfo />
      </>

      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'green', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <div style={{ backgroundColor: 'yellow', height: '800px' }}></div>

      <Footer />
    </div>
  );
}

export default App;

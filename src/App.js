import React from "react";
import './App.css';
import Point from "./components/points";
import Title from "./components/Title";
import Mars from "./images/mars.jpg";



function App() {
  return (
    <div className="App">
     <div className="flex" style={{ backgroundImage: `url(${Mars})`, height:"100vh",  backgroundRepeat: "no-repeat", backgroundSize:"cover" }} >
       <Title title={"Mars Scrum"}/>
       <Point/> 
    </div>
    
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import Background from "./components/Background";
import Title from "./components/Title";
import Mars from "./images/mars.jpg";



function App() {
  return (
    <div className="App">
     <div style={{ backgroundImage: `url(${Mars})`, height:"100vh",  backgroundRepeat: "no-repeat", backgroundSize:"cover" }} >
       <Title title={"Mars Scrum"}/>
       
    </div>
    </div>
  );
}

export default App;

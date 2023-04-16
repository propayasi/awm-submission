import React from "react";
import "../Styles/home.css";
import image from "../Assets/Cubex makes it easy to run your business..png"

function Home() {
  return (
    <div className="home_main_container">
      <img className="home_image" src={image}/>
    </div>
  );
}

export default Home;
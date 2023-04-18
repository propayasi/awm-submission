import React from "react";
import "../Styles/home.css";
import arrow from "../Assets/get started arrow.png";
import maincircle from "../Assets/weird circle in the center.png";
import purplecircle from "../Assets/purpe back.png";
import stat from "../Assets/stat image.png";

function Home() {
  return (
    <div className="home_main_container">
      <div className="main_content_container_righthalf">
          <div className="large_text">
          <p>Cubex makes it easy to run your business.</p>
          </div>
          <div className="small_text">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nunc, fermentum id ex non, dapibus hendrerit eros.</p>
          </div>
          <div className="get_start">
            <p>Get Started</p>
            <div className="arrow_image">
              <img src={arrow} />
            </div>
            
          </div>
      </div>
      <div className="main_content_container_lefthalf">
          <div className="image_container_circle">
            <img src={maincircle} />
            <div className="box1">
              <div className="purple_stat_box">
                <img src={purplecircle} />      
                <img src={stat} />
              </div>
            </div>
          </div>
      </div>
    </div>

    
  );
}

export default Home;
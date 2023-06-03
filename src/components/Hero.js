import React from "react";
import "./Hero.css";


function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-text">
            <h3>Plan your trip now</h3>
            <h1>Premium car rental near you</h1>
            <p>Plan big because we have the car of your dream on a reasonable price
                What  are you waiting for book fast and get your car delivered on your desired location
            </p>
            <div className="hero-btns">
                <button className="btn--book">Book Now
                <i class="fa-solid fa-car"></i>
                </button>
                <button className="btn--learn">Learn More
                <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>


        <div className="hero-container-img">
          <img src="/images/home_main_background.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;

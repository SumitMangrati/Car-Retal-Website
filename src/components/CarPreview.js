import React from "react";
import "./CarPreview.css";

function CarPreview(props) {
  const carList = [
    {
      logo: "/images/logos/logo1.png",
      name: "Toyota 86 coupe",
      image: "/images/car1.png",
      price: "$58500 | $385 ",
      capacity: 2,
      bag: 3,
    },

    {
      logo: "/images/logos/logo2.png",
      name: "Mercedes Benz CLA 250d",
      image: "/images/car2.png",
      price: "$58500 | $385 ",
      capacity: 4,
      bag: 3,
    },

    {
      logo: "/images/logos/logo3.png",
      name: "audi R8",
      image: "/images/car3.png",
      price: "$58500 | $385 ",
      capacity: 2,
      bag: 3,
    },
    {
      logo: "/images/logos/logo4.png",
      name: "Nissan Qashqai",
      image: "/images/car4.png",
      price: "$58500 | $385 ",
      capacity: 5,
      bag: 3,
    },
    {
      logo: "/images/logos/logo5.png",
      name: "BMW Q3",
      image: "/images/car5.png",
      price: "$58500 | $385 ",
      capacity: 2,
      bag: 3,
    },
    {
      logo: "/images/logos/logo6.png",
      name: "Chevrolet Camaro",
      image: "/images/car6.png",
      price: "$58500 | $385 ",
      capacity: 2,
      bag: 3,
    },
    {
      logo: "/images/logos/logo7.png",
      name: "Lamborgini Huracane",
      image: "/images/car7.png",
      price: "$58500 | $385 ",
      capacity: 2,
      bag: 3,
    },
    {
      logo: "/images/logos/logo8.png",
      name: "Ferrari 612 Scaglietti ",
      image: "/images/car8.png",
      price: "$58500 | $385 ",
      capacity: 2,
      bag: 3,
    },
    {
      logo: "/images/logos/logo9.png",
      name: "Porsche Panamera",
      image: "/images/car9.png",
      price: "$58500 | $385 ",
      capacity: 4,
      bag: 3,
    },
    {
      logo: "/images/logos/logo10.png",
      name: "Ford Mustang",
      image: "/images/car10.png",
      price: "$58500 | $385 ",
      capacity: 4,
      bag: 3,
    },
  ];
  return (
    <>
      <div className="car-box">
        <div className="text-container">
          <div className="brand-container">
            <img src={carList[props.car - 1].logo} alt="" id="logo-img" />
            <h1>{carList[props.car - 1].name}</h1>
            <div className="brand-logo">
              <i class="fa-solid fa-user">
                <span>{carList[props.car - 1].capacity}</span>
              </i>
              <i class="fa-solid fa-suitcase">
                <span>{carList[props.car - 1].bag}</span>
              </i>
            </div>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>
        <div className="image-container">
          {<img src={carList[props.car - 1].image} alt="" id="mainImage" />}
        </div>
        <div className="price-box">
          <div className="sub-price-box">
            <h4>{carList[props.car - 1].price}</h4>
            <p>/month</p>
          </div>
          <button className="rent-btn">Rent Now</button>
        </div>
        
      </div>
    </>
  );
}

export default CarPreview;

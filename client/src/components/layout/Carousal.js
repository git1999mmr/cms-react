import React from 'react';
import '../../App.css';
import cs4 from '../../img/cs4.jpg';
import cs3 from '../../img/cs3.jpg';
import cs5 from '../../img/cs5.jpg';
import cs2 from '../../img/cs2.jpg';
import cs1 from '../../img/cs1.jpg';

export const Carousal = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="3000"
      style={{ marginTop: '1%' }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={cs4}
            alt="First slide"
            height="550px"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={cs5}
            alt="Second slide"
            height="550px"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={cs2}
            alt="Third slide"
            height="550px"
            style={{ opacity: 0.8 }}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={cs3}
            alt="Fourth slide"
            height="550px"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={cs1}
            alt="Fifth slide"
            height="550px"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        style={{ color: ' black ' }}
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousal;

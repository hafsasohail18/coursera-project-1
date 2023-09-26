import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <div className="topbar"></div>
      <div className="header">
          <img src="img/logo.png" id="logo" className="logo" alt="Logo" />

      </div>
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <br />
      </div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Welcome to Pietro's Restaurant</h1>
          <p>Taste the most delicious Italian food</p>
          <a className="button" href="#">
            Book a table now
          </a>
        </div>
      </div>
      <div className="row">
        <div className="column-left">
          <p>
            <img className="column-image" src="img/homemade-pasta.jpg" alt="Homemade Pasta" />
          </p>
        </div>
        <div className="column-right">
          <h1>Hand-made pasta</h1>
          <p className="column-paragraph">
            Our pasta is hand made, merging the most modern research with the most ancient tradition. Our special flours and pasta-making techniques will ensure a healthy and delicious experience.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column-right">
          <p>
            <img className="column-image" src="img/cafe-cozy.jpg" alt="Cozy Cafe" />
          </p>
        </div>
        <div className="column-left">
        <h1>A cozy atmosphere</h1>
          <p className="column-paragraph">
           
            Our restaurant offers a cozy yet stylish atmosphere, ideal for all occasions. Friends reunions, romantic dinners, family celebrations: our restaurant can provide you with a range of experiences for any of your dining needs.
          </p>
        </div>
      </div>
      <div className="footer">
        Pietro's restaurant 2022 - Logo created with <a href="https://www.canva.com">Canva</a> - Images by <a href="https://unsplash.com/@jorgezapatag?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jorge Zapata</a> and <a href="https://unsplash.com/@nickkarvounis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Karvounis</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </div>
  );
}

export default Home;

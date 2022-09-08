import React from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../../Global/images";
import "./Pharmacy.css";

const Pharmacy = () => {
  const brainImg = `${imgPath}brain.png`;
  const Kidney = `${imgPath}kidney.png`;
  const heart = `${imgPath}heart.png`;
  console.log(window.location);
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-2">
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">
            Phar<span className="macy">Macy</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link to="#" className="nav-link px-2">
                Home
              </Link>
              <Link to="#" className="nav-link px-3">
                Services
              </Link>
              <Link to="#" className="nav-link px-3">
                About us
              </Link>
              <Link to="#" className="nav-link px-3">
                Department
              </Link>
              <Link to="#" className="nav-link px-3">
                Specialists
              </Link>
              <Link to="#" className="nav-link px-3">
                contact us
              </Link>
            </div>
            <div className="">
              <Link to="/register">
                <button className="button">Register</button>
              </Link>
              <Link to="/login">
                <button className="button">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Medichine center on the go!</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                ex, est, inventore perspiciatis soluta similique adipisci
                voluptates eos itaque laboriosam provident
              </p>
              <button className="button1">Read More</button>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="mt-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 box text-center mt-2" >
              <img src={brainImg} className="img-fluid" width="40px" />
              <h3 >NEUROLOGY CARE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                dolorem ipsam, earum doloribus.
              </p>
              <button className="button1">View</button>
            </div>
            <div className="col-lg-4 box text-center mt-2" >
              <img src={Kidney} className="img-fluid" width="40px" />
              <h3 >CARDIOLOGY CARE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                dolorem ipsam, earum doloribus.
              </p>
              <button className="button1">View</button>
            </div>
            <div className="col-lg-4 box text-center mt-2" >
              <img src={heart} className="img-fluid" width="40px" />
              <h3>UROLOGY CARE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                dolorem ipsam, earum doloribus.
              </p>
              <button className="button1">View</button>
            </div>
          </div>
        </div>
      </section>
      <section id="pharm" className="mt-4">
        <h1> ckjdsbfkjsbdkjv</h1>
      </section>
    </>
  );
};

export default Pharmacy;

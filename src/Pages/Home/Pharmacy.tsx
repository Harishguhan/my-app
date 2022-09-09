import React from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../../Global/images";
import "./Pharmacy.css";

const Pharmacy = () => {
  const brainImg = `${imgPath}brain.png`;
  const Kidney = `${imgPath}kidney.png`;
  const heart = `${imgPath}heart.png`;
  const eye = `${imgPath}eye.png`;
  const aid = `${imgPath}first-aid-kit.png`;
  const ear = `${imgPath}ear.png`;
  const tooth = `${imgPath}tooth.png`;

  console.log(window.location);
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white">
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
            <div className="col-lg-4 box text-center mt-2">
              <img src={brainImg} className="img-fluid" width="40px" />
              <h3>NEUROLOGY CARE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                dolorem ipsam, earum doloribus.
              </p>
              <button className="button1">View</button>
            </div>
            <div className="col-lg-4 box text-center mt-2">
              <img src={Kidney} className="img-fluid" width="40px" />
              <h3>CARDIOLOGY CARE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                dolorem ipsam, earum doloribus.
              </p>
              <button className="button1">View</button>
            </div>
            <div className="col-lg-4 box text-center mt-2">
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
        <h1>a modern,full service pharmacy</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          tempora veniam odit quam aliquam esse id ut Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Numquam tempora veniam odit quam
          aliquam esse id ut.
        </p>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-2">
                  <img
                    src={brainImg}
                    className="img-fluid float-start"
                    width="80px"
                  />
                </div>
                <div className="col-lg-8">
                  <h3 className="">NEUROLOGY</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat odio voluptas
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2">
                  <img
                    src={Kidney}
                    className="img-fluid float-start"
                    width="80px"
                  />
                </div>
                <div className="col-lg-8">
                  <h3 className="">CARDIOLOGY</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat odio voluptas
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2">
                  <img
                    src={heart}
                    className="img-fluid float-start"
                    width="80px"
                  />
                </div>
                <div className="col-lg-8">
                  <h3 className="">UROLOGY</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat odio voluptas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhhcm1hY2lzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="department" className="mt-5">
        <h1>our department</h1>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-2 col-md-4 cc">
              <img src={eye} className="img-fluid" width={"100px"} />
              <p>laser eye care</p>
            </div>
            <div className="col-lg-2 col-md-4 cc">
              <img src={ear} className="img-fluid" width={"100px"} />
              <p>Heart care</p>
            </div>
            <div className="col-lg-2 col-md-4 cc">
              <img src={brainImg} className="img-fluid" width={"100px"} />
              <p>neurology</p>
            </div>
            <div className="col-lg-2 col-md-4 cc">
              <img src={tooth} className="img-fluid" width={"100px"} />
              <p>dentel care</p>
            </div>
            <div className="col-lg-2 col-md-4 cc">
              <img src={Kidney} className="img-fluid" width={"100px"} />
              <p>urology</p>
            </div>
            <div className="col-lg-2 col-md-4 cc">
              <img src={aid} className="img-fluid" width={"100px"} />
              <p>emergency</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5" id="care">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h1>care of heart</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, illo iusto culpa architecto quae error. Nobis illum
                voluptates nemo qui ullam sapiente pariatur libero. Rem nihil
                blanditiis voluptates dolorem a. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Officia, illo iusto culpa
                architecto quae error. Nobis illum voluptates nemo qui ullam
                sapiente pariatur libero. Rem nihil blanditiis voluptates
                dolorem a.
              </p>
              <button className="button d-flex justify-content-center mx-auto">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5" id="wecare">
        <h1>we care</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio
          labore maxime reiciendis doloremque libero earum porro, dolorem
          doloribus? Sint reiciendis doloremque libero earum porro, dolorem
          doloribus? Sint
        </p>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-uppercase fw-bold text-center">child care</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="button mx-5">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRlbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-uppercase fw-bold text-center">dental care</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="button mx-5">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-uppercase fw-bold text-center">birth care</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="button mx-5">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5" id="wecare">
        <h1>our spcialists</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio
          labore maxime reiciendis doloremque libero earum porro, dolorem
          doloribus? Sint reiciendis doloremque libero earum porro, dolorem
          doloribus? Sint
        </p>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-uppercase fw-bold text-center">Dr.M.Harish</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="button mx-5">View Profile</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-uppercase fw-bold text-center">dr.kishore</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="button mx-5">View Profile</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-2">
              <div className="card" style={{ width: "18rem" }}>
                <img src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-uppercase fw-bold text-center">dr.david prabhu</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="button mx-5">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h1>DORUSTREE</h1>
              <div className="d-flex justify-content-between">
              <p><i className="fa-brands fa-facebook"></i></p>
              <p><i className="fa-brands fa-instagram"></i></p>
              <p><i className="fa-brands fa-twitter"></i></p>
              <p><i className="fa-brands fa-youtube"></i></p>
              </div>
            </div>
            <div className="col-lg-2">
              <p></p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Pharmacy;

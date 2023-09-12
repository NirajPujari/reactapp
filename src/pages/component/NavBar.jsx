import React from "react";
import Logo from "./assets/Logo1.png";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              <img src={Logo} className="logo" alt="Logo.png" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex={-1}
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  <Link to="/home">
                    <img src={Logo} className="logo" alt="Logo.png" />
                  </Link>
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <div className="nav-link active">
                      <Link className="Link" to="/home">
                        Home
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link active">
                      <Link className="Link" to="/home/join">
                        Join Us
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link active">
                      <Link className="Link" to="/home/membershipform">
                        Membership Plan
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link active">
                      <Link className="Link" to="/home/contact">
                        Contact Us
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="offcanvas-footer">
                <div className="nav-icons">
                  <a
                    href="https://www.facebook.com/facebookIndia"
                    class="fa fa-facebook"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    href="#"
                    class="fa fa-twitter"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    href="#"
                    class="fa fa-youtube"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    href="#"
                    class="fa fa-instagram"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default NavBar;

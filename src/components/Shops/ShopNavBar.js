import React, { useState } from "react";
import NavbarModal from "../partials/NavbarModal";

function NavBar() {
  const [mobi, setMobil] = useState(false);

  const mobileFunc = () => {
    setMobil(!mobi);
  };

  return (
    <header
      style={{ background: "#101522", position: "fixed" }}
      id="header"
      className="d-flex align-items-center "
    >
      <div class="container-fluid container-xxl d-flex align-items-center">
        <div id="logo" className="me-auto">
          {/* <h1>
            <a href="index.html">
              The<span>Event</span>
            </a>
          </h1> */}
          <a href="/" className="scrollto">
            <img
              src="/assets/img/artfact-logo.PNG"
              alt="artfact-logo"
              title="artfact-logo"
            />
          </a>
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="/">
                Go Home
              </a>
            </li>

            <li>
              <a class="nav-link scrollto" href="#toSchedule">
                User
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#toContact">
                Cart
              </a>
            </li>
            {/* <li class="dropdown">
              <a href="#">
                <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}
          </ul>
          <div onClick={mobileFunc}>
            {" "}
            <i class="bi bi-list mobile-nav-toggle"></i>
          </div>
        </nav>

        {mobi && <NavbarModal />}

        <a class="buy-tickets scrollto" href="#toShop">
          Login
        </a>
      </div>
    </header>
  );
}

export default NavBar;

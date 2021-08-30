import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core";
import axios from "axios";

function ContactPage() {
  const [userLocation, SetLocation] = useState("");
  const [login, setLogin] = useState(true);

  const getCity = (e) => {
    SetLocation(e.target.value);
    console.log(userLocation);
    var options = {
      method: "GET",
      url: "https://andruxnet-world-cities-v1.p.rapidapi.com/",
      params: { query: userLocation, searchby: "city" },
      headers: {
        "x-rapidapi-host": "andruxnet-world-cities-v1.p.rapidapi.com",
        "x-rapidapi-key": "57f402d848msh99026e72035bf94p1409e6jsnd95caf0f8250",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line no-restricted-globals
  }; // eslint-disable-next-line no-restricted-globals
  // eslint-disable-next-line no-restricted-globals

  return (
    <div style={{ marginTop: "2rem" }}>
      {login && (
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Login</h2>
            </div>

            <div data-aos="fade-up">
              <form method="post" className="php-email-form">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    autoComplete="Off"
                    autoFocus
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    autoComplete="Off"
                    required
                  />
                </div>

                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-left">
                  <button type="submit">Login</button>
                </div>
                <div class="my-3">
                  <div>
                    Not a User?{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setLogin(!login);
                      }}
                    >
                      Sign Up!
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {!login && (
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Login</h2>
            </div>

            <div
              class="col-lg-8 mt-5 mt-lg-0 d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form method="post" className="php-email-form">
                <div className="row">
                  <div class="form-group col-md-6">
                    <label for="fName">First Name</label>
                    <input
                      type="text"
                      name="fName"
                      class="form-control"
                      id="fName"
                      placeholder="First Name"
                      autoComplete="Off"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="lName">Last Name</label>
                    <input
                      type="text"
                      name="lName"
                      class="form-control"
                      id="lName"
                      placeholder="Last Name"
                      autoComplete="Off"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      autoComplete="Off"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="number">Phone Number</label>
                    <input
                      type="number"
                      name="number"
                      class="form-control"
                      id="number"
                      placeholder="Phone Number"
                      autoComplete="Off"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div class="form-group col-md-6">
                    <label for="location">Location</label>
                    <input
                      type="text"
                      name="location"
                      class="form-control"
                      id="location"
                      value={userLocation}
                      placeholder="Location"
                      autoComplete="Off"
                      onChange={getCity}
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="cPassword">Gender</label>
                    <select class="form-control">
                      <option> Male</option>
                      <option> Female</option>
                      <option> Others</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div class="form-group col-md-6">
                    <label for="password">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      class="form-control"
                      id="dob"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="cPassword">Gender</label>
                    <select class="form-control">
                      <option> Male</option>
                      <option> Female</option>
                      <option> Others</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div class="form-group col-md-6">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="cPassword">Confirm Password</label>
                    <input
                      type="cPassword"
                      name="cPassword"
                      class="form-control"
                      id="cPassword"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>

                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-left">
                  <button type="submit">Login</button>
                </div>
                <div class="my-3">
                  <div>
                    Already a User?{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setLogin(!login);
                      }}
                    >
                      Login In!
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ContactPage;

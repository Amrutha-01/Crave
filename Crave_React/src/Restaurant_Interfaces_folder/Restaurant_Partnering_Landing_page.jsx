import React from "react";
import "./Restaurant_Partnering_Landing_page.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import carouselItems from "./carouselInfo";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

export default function Restaurant_Partnering_Landing_page() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="resto-page" style={{backgroundColor:"rgb(240, 240, 240)"}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "rgb(118, 43, 148)", fontWeight: "bold" }}
          >
            CRAVE
          </a>
          <div className="navbar-buttons">
            <button
              className="btn btn-outline-success me-2"
              type="submit"
              style={{
                borderColor: "rgb(118, 43, 148)",
                color: "rgb(118, 43, 148)",
              }}
              onMouseOver={(e) => {
                (e.target.style.backgroundColor = "rgb(118, 43, 148)"),
                  (e.target.style.color = "white");
              }}
              onMouseOut={(e) => {
                (e.target.style.backgroundColor = "white"),
                  (e.target.style.color = "rgb(118, 43, 148)");
              }}
            >
              Login
            </button>
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{
                borderColor: "rgb(118, 43, 148)",
                color: "rgb(118, 43, 148)",
              }}
              onMouseOver={(e) => {
                (e.target.style.backgroundColor = "rgb(118, 43, 148)"),
                  (e.target.style.color = "white");
              }}
              onMouseOut={(e) => {
                (e.target.style.backgroundColor = "white"),
                  (e.target.style.color = "rgb(118, 43, 148)");
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </nav>
      <img
        className="hero-img"
        src="https://img.freepik.com/premium-photo/overhead-indian-traditional-dishes-appetizers-chicken-curry-pilaf-naan-bread-samosas-paneer-chutney-rustic-background-table-with-choice-food-indian-cuisine-space-text_92134-1356.jpg"
      />
      <div className="img-overlay">
        <h1>
          Collaborate with <span className="app-name">Crave</span> to Boost Your
          Sales Online and Make Your Restaurant a Local Favorite!
        </h1>
        <div className="buttons">
          <button type="button" className="btn btn-custom">
            Register Restaurant
          </button>
          <button type="button" className="btn btn-custom">
            Login to view your Restaurants
          </button>
        </div>
      </div>
      <div className="why-crave">
        <h1>Why Partner with Crave?</h1>
        <p className="heading">
          Team up with Crave for restaurant success online, Enhance visibility,
          increase revenue, and streamline operations—all in a single platform!
        </p>
        <div className="cards-div">
          <div className="card">
            <img src="/assets/globeImg.jpg" />
            <p>
              {" "}
              Crave puts your restaurant in front of a vast audience, boosting
              your online presence.
            </p>
          </div>
          <div className="card">
            <img src="/assets/revenue.jpg" />
            <p>
              {" "}
              Unlock increased revenue potential with Crave's versatile
              platform.
            </p>
          </div>
          <div className="card">
            <img src="/assets/dashboard.jpg" />
            <p>
              {" "}
              Streamline your kitchen operations effortlessly with Crave's
              Kitchen Dashboard.
            </p>
          </div>
        </div>
      </div>
      <div className="crave-in-action">
        <img className="back-img" src={"/assets/background-img.jpg"} />
        <div className="in-action-overlay">
          <h1>Crave in Action: A Closer Look</h1>
          <div className="steps-cards-div">
            <div className="steps-card">
              <img src="/assets/createProfile.jpg" />
              <h4>Step 1: Create Your Restaurant Profile</h4>
              <p>
                Build your restaurant profile on Crave. Share menu details,
                operating hours, and unique offerings to captivate a wide
                audience.
              </p>
            </div>
            <div className="steps-card">
              <img src="/assets/clock.png" />
              <h4>Step 2: Recieve and Manage Orders in Real Time</h4>
              <p>
                Once your profile is live, start receiving orders through
                Crave's platform. Utilize the intuitive dashboard to manage
                orders in real time.
              </p>
            </div>
            <div className="steps-card">
              <img src="/assets/list.png" />
              <h4>Step 3: Optimize performance based on customers</h4>
              <p>
                Utilize Crave for valuable customer insights. Refine your menu,
                tailor promotions, and optimize your restaurant's performance
                for lasting success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="crave-offers-section">
        <h1 style={{textAlign:"center",margin:"4% 2%"}}>What CRAVE offers?</h1>
        <div className="carousel-section">
          <div className="right-section">
            <Carousel activeIndex={activeIndex} onSelect={handleSlide}>
              {carouselItems.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="carousel-img"
                    src={item.src}
                    alt={`Slide ${item.id}`}
                  />
                  {/* Additional slide content */}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="left-section">
            {/* <div className="col-md-6"> */}
            <div className="text">
              <h2>{carouselItems[activeIndex].heading}</h2>
              <p>{carouselItems[activeIndex].text}</p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

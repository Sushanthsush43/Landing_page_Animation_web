// landingPage.jsx
import React from "react";
import { Container } from "reactstrap";
import "./landingPage.css";

function LandingPage() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(/assets/antoine-barres.jpg)",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Sushanth sush sherigar</h1>
              <div className="fog-low">
                <img alt="..." src="/assets/fog-low.png" />
              </div>
              <div className="fog-low right">
                <img alt="..." src="/assets/fog-low.png" />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Make your mark with a ReactJS Bootstrap (Reactstrap) 
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(/assets/clouds.png)"
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by{"Sushanth"}
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Tim
          </a>
        </h6>
      </div>
    </>
  );
}

export default LandingPage;

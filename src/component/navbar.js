import React, { useState } from "react";
import "./style.css";
import News from "./news";
import Form from "./form";
import Newsverticle from "./newsverticle";

const Navbar = () => {
  const [view, setView] = useState("horizontal");
  const [showModel, setShowModel] = useState("close");

  const handleClick = (e) => {
    e.preventDefault();

    switch (showModel) {
      case "open":
        setShowModel("close");
        break;
      case "close":
        setShowModel("open");
        break;
      default:
        setShowModel("close");
        break;
    }
  };

  return (
    <>
      <div className="main-div">
        <section className="section-div ">
          <div className="first-s-div">
            Hi reader.
            <img src="" alt="" />
            <span className="f-s-d-s">Here's Your News!</span>
          </div>

          <div className="second-s-div">
            <h3>View Toggel</h3>
            <button
              className="s-s-d-button"
              onClick={() => setView("horizontal")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z" />
              </svg>
            </button>
            <button
              className="s-s-d-button"
              onClick={() => setView("verticle")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm16 2v10h-4V7h4m2-2h-8v14h8V5z" />
              </svg>
            </button>
          </div>

          <div className="third-s-div">
            Have a Feedback?
            <button className="t-s-d-button" onClick={handleClick}>
              <span>We're Listening!</span>
              
            </button>
          </div>

          <Form showModel={showModel} handleClick={handleClick} />
        </section>

        {view === "verticle" ? <Newsverticle /> : <News />}
      </div>
    </>
  );
};

export default Navbar;

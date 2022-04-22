import { useState } from "react";
import WorkImg1 from "../../assets/images/mug-device-view.png";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Sidebar from "../Sidebar";
import "./index.scss";
import { Link } from "react-router-dom";

const SkdStudios = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useState(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="case-study-page">
          <span className="container tags top-tags">
            <span className="top-tag-html">&lt;html&gt;</span>
            <br />
            <span className="body-tag">&lt;body&gt;</span>
          </span>

          <div className="skd-studios-page">
            <div className="container text-area">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    "S",
                    "K",
                    "D",
                    " ",
                    "S",
                    "t",
                    "u",
                    "d",
                    "i",
                    "o",
                    "s",
                  ]}
                  idx={15}
                />
              </h1>
            </div>

            <div className="details-row container">
              <ul className="details-text">
                <li>
                  <p className="details-title">ROLE</p>
                  <p>UI Designer & Front-end Developer</p>
                </li>
                <li>
                  <p className="details-title">DATE</p>
                  <p>2021</p>
                </li>
                <li>
                  <p className="details-title">OVERVIEW</p>
                  <p>
                    Creating a branded website for an Arizona men’s haircutting
                    franchise.
                  </p>
                </li>
              </ul>
            </div>
            <div className="container work-img-1">
              <img src={WorkImg1} alt="SKD studios device views" />
            </div>

            <div className="container work-text-area">
              <div className="text-wrap">
                <h2 className="title">CONCEPT</h2>
                <p className="text">
                  The MUG franchise needed a site that better reflected its
                  brand and services visually and functionally converted more
                  visitors into customers with booked appointments.
                  <br /> <br />
                  I used in-store photos featuring customers of various ages to
                  help the target audience of boys and men relate and visualize
                  themselves getting a haircut at a location.
                  <br />
                  <br />
                  Call-to-actions were placed high and low. Customers were
                  funneled to select a nearby location then book an appointment
                  online. All contact information was made visible in the top
                  25% of the page and the rest of the page was left to SEO text
                  and experiential imagery.
                  <br />
                  <br />
                  For the key visual hook, I used a wooden background to create
                  a feeling of craftsmanship, organic design, and its coloring
                  was made to match the iconic wood flooring in all stores.
                </p>
              </div>
            </div>

            <div className="big-image"></div>

            <div className="container work-text-area">
              <div className="text-wrap">
                <h2 className="title">DEVELOPMENT</h2>
                <p className="text">
                  I developed a 100% custom-theme for the WordPress CMS and
                  utilized the Advanced Custom Fields plugin to create reusable
                  components. This allowed for consistency in design, faster
                  development time, and also allowed the client and SEO-team to
                  edit the site content without coding knowledge.
                  <br />
                  <br />A map plugin was used and heavily customized to enhance
                  user experience and allow users to get directions, call
                  directly, or view a location’s web page. Animations were
                  simple, instead of reinventing the wheel I used the Animation
                  on Scroll library.
                </p>
              </div>
            </div>

            <div className="container cta">
              <p>HAVE AN IDEA?</p>
              <Link className="flat-button" to="/contact">
                LET'S CHAT
              </Link>
            </div>
          </div>

          <span className="container tags bottom-tags">
            <span className="body-tag">&lt;/body&gt;</span>
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default SkdStudios;

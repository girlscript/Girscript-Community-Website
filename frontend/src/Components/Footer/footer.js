import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';
import images from "../../images/GsLogo_White.png";


const Footer = () => {
  return (
    <React.Fragment>
      <footer className={style["footer"]}>
        <div className={style["footer-addr"]}>
        <img src={images} alt="img" height="60px" width="260px" />
          <address>
            <div style={{color:"#da6d28"}}><b>MAILING ADDRESS </b></div>
            <i className="fas fa-map-marker-alt"></i> 123 Anywhere St., Any City, State, Country 12345
            <br />
          </address>
          <div style={{color:"#da6d28"}}><b>EMAIL ADDRESS </b></div>
            hello@reallygreatsite.com
            
        </div>
        <ul className={style["footer-nav"]}>
          <li className={style["nav-item"]}>
            <h2 className={style["nav-title"]}>NAVIGATION</h2>

            <ul className={style["nav-ul"]}>
              <li>
                <Link to="/">About Us</Link>
              </li>

              <li>
                <Link to="/">Contact</Link>
              </li>

              <li>
                <Link to="/">Event</Link>
              </li>

              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </ul>
          </li>

          <li className={style["nav-item"]}>
            <h2 className={style["nav-title"]}>OTHER</h2>

            <ul className={style["nav-ul"]}>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>

              <li>
                <Link to="/">Terms of Use</Link>
              </li>

              <li>
                <Link to="/">Code of Conduct</Link>
              </li>
            </ul>
          </li>
          <li className={style["nav-item"]}>
            <h2 className={style["nav-title"]}>SOCIAL</h2>
            <ul className={style["nav-ul"]}>
              <li>Be sure to give us a follow on the below social links</li>
            </ul>
            <div className={`col ${style["col"]}`}>
              <ul className={style["social"]}>
                <li>
                  <a
                    href="https://www.facebook.com/Girlscript"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#fff" }}/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/girlscript1"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#fff" }}/>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:community@girlscript.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: "#fff" }}/>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className={style["footer-dash"]}>
          <div className={style["footer-text"]}> 
            <p>
              <b>Made with <FontAwesomeIcon icon={faHeart} style={{ color: "#DB3328" }}/> by
              GirlScript Community</b>
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer
import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container footer">
        <div className="row m-0">
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footerLogo">
              <Link to="/">
              <img src="./images/logo/logo-7.png" alt="Logo" className="mainLogo"/>
              </Link>
            </div>
            <ul className="footer-lists">
              <li>
                <Link to="/reactlang">
                  A-143, 5th Floor, <br/>
                  Sebiz Square Corporate Tower, <br/>
                  Sector-67 Mohali, <br/>
                  Chandigradh - 441600
                </Link>
              </li>
              <li>
                <Link to="mailto:feedback@geeksforgeeks.org">
                  feedback@kodegurus.co.in.org
                </Link>
              </li>
              <li>
                  <ul className="footer-icons">
                    <li>
                      <Link to="mailto:feedback@geeksforgeeks.org">
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:feedback@geeksforgeeks.org">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:feedback@geeksforgeeks.org">
                      <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:feedback@geeksforgeeks.org">
                      <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                  </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <h2 className=" footerHeadings">Our Products</h2>
            <ul className="footer-lists">
              <li>
                <Link to="/csm">Cyber-School-Manger</Link>
              </li>
              <li>
                <Link to="/ccm">Cyber-Club-Manger</Link>
              </li>
              <li>
                <Link to="/cim">Cyber-Institute-Manger</Link>
              </li>
              <li>
                <Link to="/sm">Smart-Board</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <h2 className=" footerHeadings">Hire Our Experts</h2>
            <ul className="footer-lists">
              <li>
                <Link to="/full_stack_developer.php">
                  Hire Full Stack Developer
                </Link>
              </li>
              <li>
                <Link to="/angular_developer.php">Hire Angular Developer</Link>
              </li>
              <li>
                <Link to="/backend_developer.php">Hire Backend Developer</Link>
              </li>
              <li>
                <Link to="/mern_developer.php">Hire MERN Developer</Link>
              </li>
              <li>
                <Link to="/dot_net_developer.php">Hire Dot Net Developer</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <ul className="footer-lists">
              <h2 className="footerHeadings">Hire Our Experts</h2>
              <li>
                <Link to="/ui_ux.php">Hire UI/UX Dessign Expert</Link>
              </li>
              <li>
                <Link to="/laravel.php">Hire Laravel Developer</Link>
              </li>
              <li>
                <Link to="/magento_developer.php">Hire Magento Developer</Link>
              </li>
              <li>
                <Link to="/mobile_app.php">Hire Mobile App Developer</Link>
              </li>
              <li>
                <Link to="/wordpress_developer.php">
                  Hire WordPress Developer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

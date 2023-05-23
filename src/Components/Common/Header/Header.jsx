import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [click, setClass] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(" ");
  const showSubMenus = (id) => {
    if (!show ) { // First yeah chalega
      setShow(true);
      setId(id);
      // console.log("hovered",show,id) 
    } else { // Second yeah chalega
      setShow(false);
      setId(" ");
      // console.log("hovered",show,id) 
    }
  };

  useEffect(() => {
    // const item = document.getElementsByClassName("serviceMenu")[0];
    // const child1 = document.querySelector(".service_menu");
    // item?.addEventListener("click", function () {
    //   if (!show) {
    //     child1.style.display = "block";
    //   } else {
    //     child1.style.display = "none";
    //   }
    // });
  }, [show]);

  return (
    <>
      {/* <Head /> */}
      <header className="header">
        <div className="headerTop">
        {/* <div className="head">
          <div className="container navHeader">
            <div className="social">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-youtube icon"></i>
            </div>
          </div>
        </div> */}
        <nav className="navbar navbar-expand-lg p-0 ">
          {/* <div className="jkl" style={{backgroundColor:"#e1b382"}}>
              
          </div> */}
          <Link to={"/"} className="navbar-brand p-0">
            <div className="logo">
            <img src="./images/logo/logo-5.png" alt="Logo" className="mainLogo"/>
              {/* <h1 className="m-0">KODEGURUS</h1>
              <span>Build Innovate & Inspire</span> */}
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setClass(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
          <div className="collapse navbar-collapse navbarNavs" id="navbarNav">
            <ul className="navbar-nav">
              <li
                className="nav-item active serviceMenu"
                onClick={() => showSubMenus("1")} onMouseEnter={() => showSubMenus("1")}
                 onMouseLeave={()=>showSubMenus(" ")}
              >
                <Link className="nav-link" to="/service">
                  Services
                  <i className="menuIcon fa fa-angle-right" aria-hidden="true"
                  ></i>
                </Link>
                { id === "1" && (
                  <div className="service_menu">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-3 submenusli">
                          <h3>Frontend</h3>
                          <ul>
                            <li>
                              <a className="menusAnchors" href="/">
                                AngularJS
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                React JS
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Vue.js
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                HTML5
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Bootstrap
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3 submenusli">
                          <h3>Backend</h3>
                          <ul>
                            <li>
                              <a className="menusAnchors" href="/">
                                PHP
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Ruby on Rails
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Node.js
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Java
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Python
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                .Net
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Magento
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3 submenusli">
                          <h3>Digital Marketing</h3>
                          <ul>
                            <li>
                              <a className="menusAnchors" href="/">
                                Search Engine Optimization
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Social Media Marketing
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Search Engine Marketing
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Content Marketing
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Email Marketing
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Paid Ads Services
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3 submenusli">
                          <h3>Others</h3>
                          <ul>
                            <li>
                              <a className="menusAnchors" href="/">
                                Mean Stack
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Mern Stack
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Devops - Azure
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Devops - AWS
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Project Management
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Project Consulting
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                QA and Testing Services
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                Application Maintenance & Support
                              </a>
                            </li>
                            <li>
                              <a className="menusAnchors" href="/">
                                UI & UX Design
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* <li className="nav-item"  onClick={() => showSubMenus("2")} onMouseEnter={() => showSubMenus("2")}
                 onMouseLeave={()=>showSubMenus(" ")}>
                <Link className="nav-link productmenu" to="/">
                  Products
                  <i
                    className="menuIcon fa fa-angle-right"
                    aria-hidden="true"
                  ></i>
                </Link>
                {
                   id === "2" && (
                    <div className=" productSubMenus">
                      <div className="subMenus submenusli">
                        <ul className="p-0">
                          <li><a href="/" className="menusAnchors">Cyber School Manager</a></li>
                          <li><a href="/" className="menusAnchors">Cyber Club Manager</a></li>
                          <li><a href="/" className="menusAnchors">Cyber Instituite Manager - LMS</a></li>
                          <li><a href="/" className="menusAnchors">Smart Board</a></li>
                        </ul>
                      </div>
                    </div>
                  )
                }
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                  <i
                    className="menuIcon fa fa-angle-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                  <i
                    className="menuIcon fa fa-angle-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                  <i
                    className="menuIcon fa fa-angle-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hire" to="/">
                  Hire Us
                </Link>
              </li>
            </ul>
            <div className="social">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-youtube icon"></i>
            </div>
          </div>
        </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

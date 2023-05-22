import React, { useEffect } from "react";
import "./Home.css";
import { awrapper, online, portfolio } from "../../../dummydata";
import Services from "./Process";
import Faq from "./Faq";
import CountUp from 'react-countup';
import CarouselContainer from "./Carousel";

const Home = () => {
  useEffect(() => {
    let items = document.querySelectorAll(".carousel .carousel-item ");

    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  })

  return (
    <>
      {/* Hero */}
      <section className="banner">
        <div className="hero">
          <div className="container">
            <div className="text-area">
              <h1 className="main-heading">WELCOME TO KODEGURUS</h1>
              <h3 className="sub-heading">
                We Build, We Create Digital Products
                <br /> That Makes Sense
              </h3>
              <div className="buttons d-flex">
                {/* <button className="primary-btn btn-primary firstbtn">
                GET STARTED <i className="fa fa-long-arrow-alt-right"></i>
              </button> */}
                <button className="bannerbtn btn">
                  HIRE DEVELOPER <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Card */}
      <section className="aboutHome">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left">
                <img src="./images/about.webp" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="right">
                <div id="heading">
                  <h3>India’s Top-notch ReactJS Development Services</h3>
                </div>
                <div className="items">
                  <p>
                    Cybrain Software Solutions is the most valued ReactJS
                    development company in India. We rely on fine craftsmanship
                    and integrity to provide flawless services to build web and
                    mobile applications that can elevate your business in the
                    competitive market effectively and efficiently. React JS is
                    of prime importance in the present technology that has
                    invaded the world of web pages. We have worked for some of
                    the industry experts in developing and producing some of the
                    profound React JS software solutions. <br />
                    <br /> If you are looking for a React JS development company
                    in India, Cybrain is the right choice. We have developed a
                    secure, fast, responsive, and scalable application. Our team
                    has experience building web and desktop applications using
                    React.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awrapper */}
      <section className="awrapper">
        <div className="container">
          <div className="row">
            {awrapper.map((val, key) => {
              return (
                <div key={key} className="col-3 box">
                  <div className="icon_img">
                    <img src={val.cover} alt="images" />
                  </div>
                  <div className="text">
                    <h1><CountUp duration={2.5} start={1} end={val.data} enableScrollSpy={true} scrollSpyOnce={true}>
                      {({ countUpRef }) => <span ref={countUpRef} />}</CountUp></h1>
                    <h3>{val.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online Services  */}
      <section className="online">
        <div className="container">
          <div id="heading">
            <h3>SERVICES</h3>
            <h1>Browse Our Online Services</h1>
          </div>
          <div className="row">
            {online.slice(0, 6).map((val, key) => (
              <div key={key} className="flip-card col-md-4 col-sm-6 p-2 col-xs-12">
                <a href={`/service#service${key + 1}`} >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={val.cover} alt="Avatar" />
                      <h1>{val.courseName}</h1>
                    </div>
                    <div className="flip-card-back">
                      <img src={val.hoverCover} alt="" />
                      <h1>{val.courseName}</h1>
                      {/* <a href={`/service#service${key + 1}`} className='btn btn-info'>Know More</a> */}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* Testimonial */}
      <section className="testimonal">
        <div className="carousel-container">
          <div className="container text-center my-3">
            <div id="heading">
              <h3>TESTIMONIAL</h3>
              <h1>Our Successful Stories</h1>
            </div>
            <div className="row mx-auto my-auto justify-content-center">
              <div
                id="carousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item  active">
                    <div className="col-md-3 mx-2">
                      <div className="card testimonialBox">
                        <div className="box flex">
                          <div className="img">
                            <img src="./images/testo/t1.webp" alt="" />
                            <i className="fa fa-quote-left quoteIcon"></i>
                          </div>
                          <div className="name">
                            <h2>Krishna </h2>
                            <span>MARKETING MANAGER</span>
                          </div>
                        </div>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="col-md-3 mx-2">
                      <div className="card testimonialBox">
                        <div className="box flex">
                          <div className="img">
                            <img src="./images/testo/t2.webp" alt="" />
                            <i className="fa fa-quote-left quoteIcon"></i>
                          </div>
                          <div className="name">
                            <h2>Madhav Singh</h2>
                            <span>MARKETING MANAGER</span>
                          </div>
                        </div>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="col-md-3 mx-2">
                      <div className="card testimonialBox">
                        <div className="box flex">
                          <div className="img">
                            <img src="./images/testo/t3.webp" alt="" />
                            <i className="fa fa-quote-left quoteIcon"></i>
                          </div>
                          <div className="name">
                            <h2>Rajat Sharma</h2>
                            <span>MARKETING MANAGER</span>
                          </div>
                        </div>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="col-md-3 mx-2">
                      <div className="card testimonialBox">
                        <div className="box flex">
                          <div className="img">
                            <img src="./images/testo/t1.webp" alt="" />
                            <i className="fa fa-quote-left quoteIcon"></i>
                          </div>
                          <div className="name">
                            <h2>Chhavi Sharma</h2>
                            <span>MARKETING MANAGER</span>
                          </div>
                        </div>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="col-md-3 mx-2">
                      <div className="card testimonialBox">
                        <div className="box flex">
                          <div className="img">
                            <img src="./images/testo/t2.webp" alt="" />
                            <i className="fa fa-quote-left quoteIcon"></i>
                          </div>
                          <div className="name">
                            <h2>Kel SCOTT</h2>
                            <span>MARKETING MANAGER</span>
                          </div>
                        </div>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="col-md-3 mx-2">
                      <div className="card testimonialBox">
                        <div className="box flex">
                          <div className="img">
                            <img src="./images/testo/t3.webp" alt="" />
                            <i className="fa fa-quote-left quoteIcon"></i>
                          </div>
                          <div className="name">
                            <h2>ROGER SCOTT</h2>
                            <span>MARKETING MANAGER</span>
                          </div>
                        </div>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#carousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#carousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* Portfolio Section */}
      <section className="portfolioSection">
        <div className="container">
          <div id="heading">
          <h2 className="text-center">Our Portfolio</h2>
          </div>
          <div className="row">
            {
              portfolio.map((value, key) => {
                return (
                  <div key={key} className="col-md-6 p-2">
                    <div className="card portfolio">
                      <div className="myDiv">
                        <img src={value.image} alt="Image" className="img-fluid" />
                      </div>
                      <div className="hide">
                        <img src={value.hoverImage} alt="Icons" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Home;

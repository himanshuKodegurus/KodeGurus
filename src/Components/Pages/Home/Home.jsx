import React, { useEffect } from "react";
import "./Home.css";
import { awrapper, homePortfolio, online, portfolio } from "../../../dummydata";
import Services from "./Process";
import Faq from "./Faq";
import CountUp from 'react-countup';
import CarouselContainer from "./Carousel";
import Process from "./Process";
import Testimonial from "./testimonial";

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
              <h1 className="main-heading">Digital Marketing Company That Build,<br /> Promote Digital Products</h1>
              <h5 className="sub-heading">
                In the age of digital transformation, we help thousands<br /> of growing businesses to achieve their goals & success.
              </h5>
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
                <img src="./images/heroImage.png" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="right">
                <div id="heading">
                  <h2>KodeGurus: The Best Digital Marketing Company In India</h2>
                </div>
                <div className="items">
                  <p>
                    At KodeGurus, we believe in transforming businesses to their most tremendous potential. Our clients come to us with their unique approach toward their business, and we help create that for them. <br /> 

                    We offer Web Development Services and Digital Marketing Services solutions to build the future. We are a leading and result-oriented Digital Marketing Company in India.  <br /><br /> 

                    {/* We are passionate about helping clients achieve their goals through creative and innovative digital marketing strategies. We understand it takes more than just a catchy slogan or a pretty website in today's ever-changing digital landscape to stand out.  <br /><br /> */}

                    That's why our team of Digital Marketing Experts combines the latest industry trends with cutting-edge technology to create customized solutions that meet each client's unique needs. From SEO and social media to email marketing and PPC advertising, we use various tools and techniques to help our clients increase brand awareness, drive website traffic, and ultimately grow their businesses. <br /> 

                    But we don't just stop there - at KodeGurus, we believe in building long-term relationships with our clients. That's why we take the time to get to know your business and understand your goals, so we can develop strategies to help you succeed not just today but for years to come. <br /> <br />

                    {/* So if you're ready to take your digital marketing to the next level, look no further than KodeGurus - India's best digital marketing company! <br /> <br />
 */}
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

      <Process />

      {/* Testimonial */}      
      <Testimonial/>



      {/* Portfolio Section */}
      <section className="portfolioSection">
        <div className="container">
          <div id="heading">
            <h2 className="text-center">Our Portfolio</h2>
          </div>
          <div className="row">
            {
              homePortfolio.map((value, key) => {
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

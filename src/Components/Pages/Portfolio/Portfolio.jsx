import React, { useEffect, useRef, useState } from "react";

import LightgalleryProvider, { LightgalleryItem } from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
//ChatGPT

//ChatGPT
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "./Portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { online, portfolio } from "../../../dummydata";
import lightGallery from "lightgallery";

const Portfolio = () => {
    const [showButton, setShowButton] = useState(false);
    const galleryRef = useRef(null);
    const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => {
        return (
            hasPrev && (
                <span className="arrow-left" onClick={onClickHandler}>
                    <span className="icon-keyboard_arrow_left"></span>
                </span>
            )
        );
    };

    const renderCustomNextArrow = (onClickHandler, hasNext, label) => {
        return (
            hasNext && (
                <span className="arrow-right" onClick={onClickHandler}>
                    <span className="icon-keyboard_arrow_right"></span>
                </span>
            )
        );
    };
    const onInit = () => {
        console.log("lightGallery has been initialized");
    };

    useEffect(() => {
        // Initialize LightGallery
        lightGallery(galleryRef.current, {
            plugins: [lgZoom], // Enable zoom plugin
            download: false, // Disable download button
            thumbnail: false, // Disable thumbnail navigation
        });
    }, []);
    const buttonRef = useRef(null);
    const handleSlideClick = () => {
        if (buttonRef.current) {
          buttonRef.current.style.display = 'none';
        }
      };
    return (
        <>
            <section>
                <div className="container my-5">
                    <h2 className="text-center my-4">Portfolio</h2>
                    <Carousel
                        // autoPlay={true}
                        showThumbs={false}
                        showStatus={false}
                        showArrows={true}
                        useKeyboardArrows={true}
                    // renderArrowPrev={renderCustomPrevArrow}
                    // renderArrowNext={renderCustomNextArrow}
                    >
                        {/* <div className="row">
                            {
                                portfolio.slice(0, 6).map((val, key) => (
                                    <div key={key} className="flip-portfolio-card col-sm-6 p-2 col-xs-12">
                                        <div className="flip-portfolio-card-inner portfolioFlipCards">
                                            <div className="flip-portfolio-card-front">
                                                <img src={val.image} alt="Portfolio" className='img-fluid' />
                                                <h3 className='frontHeading'>{val.courseName}</h3>
                                            </div>
                                            <div className="flip-portfolio-card-back">
                                                <img src={val.hoverImage} alt="Portfolio-Back-img" className='img-fluid'/>
                                                <h3>{val.courseName}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div> */}
                        <div>
                            <div className="row">
                                {/* <LightGallery
                                    onInit={onInit}
                                    speed={500}
                                    plugins={[lgThumbnail, lgZoom]}>
                                    <a href="">
                                        <img alt="img1" src="img/thumb1.jpg" />
                                    </a>
                                    <a href="img/img2.jpg">
                                        <img alt="img2" src="img/thumb2.jpg" />
                                    </a>
                                    ...
                                </LightGallery> */}
                                {portfolio.slice(0, 6).map((val, key) => (
                                    <div
                                        key={key}
                                        className="flip-card col-md-4 col-sm-6 p-2 col-xs-12">
                                        <LightgalleryProvider
                                            // onInit={onInit}
                                            speed={500}
                                            controls={true}
                                            // onAfterAppendSubHtml={2}
                                            closeOnTap={true}
                                            counter={false}
                                            mode="lg-fade"
                                            download={false}
                                            // onBeforeSlide={handleAfterSlide}
                                            plugins={[lgThumbnail, lgZoom]}>
                                            <div className="flip-card-inner gallery-item portfolioFlipCards"
                                                //  data-lg-size={val.size}
                                                onClick={handleSlideClick}
                                                data-src={val.cover}>
                                                <div className="flip-portfolio-card-front">
                                                    <a href="" >
                                                        <img className="img-fluid"
                                                            style={{ maxWidth: '1200px', maxHeight: "100vh" }}
                                                            src={val.cover} alt={val.courseName} />
                                                        {/* <button ref={buttonRef} className="overlay-button">
                                                            Your Button
                                                        </button> */}
                                                        <button className="overlay-button">Your Button</button>
                                                        {/* <h3 className="frontHeading">{val.courseName}</h3> */}
                                                    </a>
                                                </div>
                                                <div className="flip-portfolio-card-back">
                                                    <img className="img-fluid" src={val.hoverCover} alt="" />
                                                    {/* <h3>{val.courseName}</h3> */}
                                                    <button ref={buttonRef} className="overlay-button">
                                                        Your Button
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        </LightgalleryProvider>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                {online.slice(0, 6).map((val, key) => (
                                    <div
                                        key={key}
                                        className="flip-card col-md-4 col-sm-6 p-2 col-xs-12"
                                    >
                                        <div className="flip-card-inner portfolioFlipCards">
                                            <div className="flip-card-front">
                                                <img className="img-responsive" src={val.cover} alt="Avatar" />
                                                <h3 className="frontHeading">{val.courseName}</h3>
                                            </div>
                                            <div className="flip-card-back">
                                                <img className="img-responsive" src={val.hoverCover} alt="" />
                                                <h3>{val.courseName}</h3>
                                                {/* <a href={`/service#service${key + 1}`} className='btn btn-info'>Know More</a> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    );
};

export default Portfolio;

import React, { useCallback, useEffect, useRef, useState } from "react";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoPlay from "lightgallery/plugins/autoplay";

import "./Portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { online, portfolio } from "../../../dummydata";
import { Link } from "react-router-dom";

const Portfolio = () => {
    const galleryRef = useRef(null);
    const onInit = () => {
        console.log("lightGallery has been initialized");
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
                        thumbnail={false}
                        showArrows={true}
                        useKeyboardArrows={true}
                    >
                        <div>
                            <div className="row">
                                {portfolio.slice(0, 6).map((val, key) => (
                                    <div key={key} className="GalleryCards col-md-4 col-sm-6 p-2 col-xs-12">
                                        <div className="card">
                                            <div className="card-img-top">
                                                <LightGallery
                                                    speed={500}
                                                    download={false}
                                                    plugins={[lgThumbnail, lgZoom, lgAutoPlay]}
                                                    elementClassNames="custom-class-name"
                                                    licenseKey="hih"
                                                //  onInit={onInit}
                                                >
                                                    <div data-src={val.cover} ref={galleryRef}
                                                    >
                                                        <a
                                                            key={val.id}
                                                            data-lg-size={val.size}
                                                            className="gallery-item"
                                                            data-src={val.cover}
                                                        >
                                                            <img
                                                                // style={{ maxWidth: "280px" }}
                                                                className="img-fluid"
                                                                src={val.cover}
                                                                alt={val.courseName}
                                                            />
                                                        </a>
                                                    </div>
                                                </LightGallery>
                                                <div className="card-body">
                                                    <Link target="_blank" to={`${val.url}`} className="btn btn-secondary">Live Preview</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="row">
                            {portfolio.slice(0, 6).map((val, key) => (
                                    <div key={key} className="GalleryCards col-md-4 col-sm-6 p-2 col-xs-12">
                                        <div className="card">
                                            <div className="card-img-top">
                                                <LightGallery
                                                    speed={500}
                                                    download={false}
                                                    plugins={[lgThumbnail, lgZoom, lgAutoPlay]}
                                                    elementClassNames="custom-class-name"
                                                    licenseKey="Valid"
                                                //  onInit={onInit}
                                                >
                                                    <div data-src={val.cover} ref={galleryRef} >
                                                        <a key={val.id} data-lg-size={val.size}
                                                            className="gallery-item"
                                                            data-src={val.cover}>
                                                            <img // style={{ maxWidth: "280px" }}
                                                                className="portImages"
                                                                src={val.cover}
                                                                alt={val.courseName}
                                                            />
                                                        </a>
                                                    </div>
                                                </LightGallery>
                                                <div className="card-body">
                                                    <Link target="_blank" to={`${val.url}`} className="btn btn-secondary">Live Preview</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>

            <section className="online">
                <div className="container">
                    <div id="heading">
                        <h3>SERVICES</h3>
                        <h1>Browse Our Online Services</h1>
                    </div>
                    <div className="row">
                        {online.slice(0, 6).map((val, key) => (
                            <div
                                key={key}
                                className="flip-card col-md-4 col-sm-6 p-2 col-xs-12"
                            >
                                <a href={`/service#service${key + 1}`}>
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
        </>
    );
};

export default Portfolio;

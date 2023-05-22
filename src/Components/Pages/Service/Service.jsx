import React, { useEffect, useState } from "react";
import "./Service.css";
import { Link, NavLink } from "react-router-dom";
import { online } from "../../../dummydata";

const Service = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (heading, paragraph) => {
        setSelectedCard({ heading, paragraph });
    };

    useEffect(() => {
        const id = window.location.hash.substr(1);
        // console.log(id);
        const onlineCourse = online.find(course => course.id === id);
        if (onlineCourse) {
            setSelectedCard({ heading: onlineCourse.courseName, paragraph: onlineCourse.paragraph });
        }
        const targetElement = document.getElementById("service");
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    return (
        <>
            <section>
                <div className="serviceBanner"></div>
                {/* Online Services  */}
                <section className="online">
                    <div className="container">
                        <div id="heading">
                            <h3>COURSES</h3>
                            <h1>Browse Our Online Services</h1>
                        </div>
                        <div className="row">
                            {online.slice(0, 6).map((val, key) => (
                                <div
                                    key={key}
                                    className="flip-card col-md-4 col-sm-6 p-2 col-xs-12">
                                    <Link to="#service" onClick={() => handleCardClick(val.courseName, val.paragraph)}>
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src={val.cover} alt="Avatar" />
                                                <h1>{val.courseName}</h1>
                                            </div>
                                            <div className="flip-card-back">
                                                <img src={val.hoverCover} alt="" />
                                                <h1>{val.courseName}</h1>
                                                {/* <Link to={`${key + 1}`} className='btn btn-primary'>Read More</Link> */}
                                                {/* <Link to="#service" onClick={() => handleCardClick(val.courseName, val.paragraph)} className="btn btn-info">
                                                Read More
                                            </Link> */}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="container my-5" id="service">
                    {/* <h1 className="my-4 text-center" id="service">Services</h1> */}
                    <div className="row">
                        <div className="col-12 text-center" >
                            <h4 className='my-3 serviceHeading'>{selectedCard?.heading}</h4>
                            <p className='my-2'>{selectedCard?.paragraph}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;

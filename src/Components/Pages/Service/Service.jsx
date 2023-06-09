import React, { useEffect, useState } from "react";
import "./Service.css";
import { Link, NavLink } from "react-router-dom";
import { online } from "../../../dummydata";
import MetaData from "../../Common/MetaData/MetaData";

const Service = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const id = window.location.hash.substr(1);
    const targetElement = document.getElementById("servicesec");
    // console.log(id);
    const handleCardClick = (heading, paragraph) => {
        setSelectedCard({ heading, paragraph });

        
    };
    const scrollView = () =>{
        
    }
    useEffect(() => {
        //For content Change
        const onlineCourse = online.find(course => course.id === id);
        if (onlineCourse) {
            setSelectedCard({ heading: onlineCourse.courseName, paragraph: onlineCourse.paragraph });
        }
        targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [id,targetElement]);

    return (
        <>
            <MetaData title={"Service"}/>
            <section id="service">
                <div className="serviceBanner"></div>
                {/* Online Services  */}
                <section className="online">
                    <div className="container">
                        <div id="heading">
                            {/* <h3>SERVICES</h3> */}
                            <h1>Browse Our Online Services</h1>
                        </div>
                        <div className="row">
                            {online.slice(0, 6).map((val, key) => (
                                <div
                                    key={key}
                                    className="flip-card col-md-4 col-sm-6 p-2 col-xs-12">
                                    <Link to={`#servicesec/${key + 1}`} onClick={() => handleCardClick(val.courseName, val.paragraph)}>
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
                <div className="container my-5" id="servicesec">
                    {/* <h1 className="my-4 text-center" id="service">Services</h1> */}
                    <div className="row">
                        <div className="col-12 " >
                            <h2 className='my-3 text-center serviceHeading'>{selectedCard?.heading}</h2>
                            <p className='my-3' dangerouslySetInnerHTML={{ __html: selectedCard?.paragraph }}></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;

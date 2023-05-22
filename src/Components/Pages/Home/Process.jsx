import React, { useEffect } from "react";
import "./Process.css";
import { process } from "../../../dummydata";

const Services = () => {
    return (
        <>
            <div className="container-fluid">
                <div id="heading">
                <h4 className="text-center mt-5">Working Process</h4>
                <h2 className="text-center mb-5">How We Work For Our Customers</h2>

                </div>
                <div className="row processSection">
                    {process.slice(0, 5).map((value, key) => {
                        return (
                            <div key={key} className="col-md-2 cont my-md-0 my-4 text-center">
                                <div className="iconContainer">
                                    <div className="myDIV">
                                        <img src={value.processIcon} alt="Icons" className="processIcon" />
                                    </div>
                                    <div className="hide">
                                        <img src={value.processIconHover} alt="Icons" className="processIconHover" />
                                    </div>
                                    <h5 className="my-2">{value.processName}</h5>
                                </div>
                                <span className="rightIcon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                                <span className="numberIcon">{key + 1}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Services;

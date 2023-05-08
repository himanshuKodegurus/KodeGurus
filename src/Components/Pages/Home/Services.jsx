import React, { useEffect } from "react";
import "./Service.css";

const Services = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <h4 className="text-center mt-5">Working Process</h4>
                    <h2 className="text-center mb-5">How We Work For Our Customers</h2>
                    <div className="col-md-2 text-center">
                        <span className="iconContainer">
                            <img src="/images/icon/Research-icon.png" alt="Icons" />
                            {/* <link type="image/png" sizes="96x96" rel="icon" href=".../icons8-research-96.png" /> */}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
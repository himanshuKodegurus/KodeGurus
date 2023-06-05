import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonal } from "../../../dummydata";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const Testimonial = () => {
    return (
        <>
            <section className="testimonial" style={{margin:"100px 0"}}>
                <div id="heading">
                    <h1 className="my-3">Testimonials</h1>
                </div>
                <div className="container">
                    <Carousel
                        responsive={responsive} additionalTransfrom={0}
                        arrows autoPlaySpeed={3000} centerMode={false} containerClass="container-with-dots"
                        dotListClass="" draggable focusOnSelect={false} infinite itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false} >
                        {testimonal.map((value, key) => {
                            return (
                                <div className="testimonialContainer mx-2" key={key}>
                                    <div className="card testimonialCard mx-2">
                                        <div className="card-header avatarContainer d-flex">
                                            <div className="avatar-img">
                                                <img src={value.cover} alt="Avatar Img"
                                                    className="testimonialImg" />
                                                <i className="fa fa-quote-left quoteIcon"></i>
                                            </div>
                                            <div className="name">
                                                <h2>{value.name}</h2>
                                                <span>{value.post}</span>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                {value.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </section>
        </>
    );
};

export default Testimonial;

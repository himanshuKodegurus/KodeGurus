import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { online } from '../../../dummydata';

const Portfolio = () => {
    const renderArrowPrev = (onClickHandler, hasPrev) => {
        return (
          hasPrev && (
            <button onClick={onClickHandler} type="button" className="control-prev control-arrow my-custom-prev-button" />
          )
        );
      };
    
      const renderArrowNext = (onClickHandler, hasNext) => {
        return (
          hasNext && (
            <button onClick={onClickHandler} type="button" className="control-next control-arrow my-custom-next-button" />
          )
        );
      };
    return (
        <>
            <section>
                <div className="container my-5">
                    <h2 className='text-center my-4'>Portfolio</h2>
                    <Carousel
                        autoPlay={true}
                        showThumbs={false}
                        showStatus={false}
                        showArrows={true}
                        useKeyboardArrows={true}
                        renderArrowPrev={renderArrowPrev}
                        renderArrowNext={renderArrowNext}
                    >
                        <div>
                            <div className="row">
                                {
                                    online.slice(0, 6).map((val, key) => (
                                        <div key={key} className="flip-card col-md-4 col-sm-6 p-2 col-xs-12">
                                                <div className="flip-card-inner portfolioFlipCards">
                                                    <div className="flip-card-front">
                                                        <img src={val.cover} alt="Avatar" />
                                                        <h3 className='frontHeading'>{val.courseName}</h3>
                                                    </div>
                                                    <div className="flip-card-back">
                                                        <img src={val.hoverCover} alt="" />
                                                        <h3>{val.courseName}</h3>
                                                        {/* <a href={`/service#service${key + 1}`} className='btn btn-info'>Know More</a> */}
                                                    </div>
                                                </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                {online.slice(0, 6).map((val, key) => (
                                    <div key={key} className="flip-card col-md-4 col-sm-6 p-2 col-xs-12">
                                        
                                            <div className="flip-card-inner portfolioFlipCards">
                                                <div className="flip-card-front">
                                                    <img src={val.cover} alt="Avatar" />
                                                    <h3 className='frontHeading'>{val.courseName}</h3>
                                                </div>
                                                <div className="flip-card-back">
                                                    <img src={val.hoverCover} alt="" />
                                                    <h3>{val.courseName}</h3>
                                                    {/* <a href={`/service#service${key + 1}`} className='btn btn-info'>Know More</a> */}
                                                </div>
                                            </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                {online.slice(0, 6).map((val, key) => (
                                    <div key={key} className="flip-card col-md-4 col-sm-6 p-2 col-xs-12">
                                        
                                            <div className="flip-card-inner portfolioFlipCards">
                                                <div className="flip-card-front">
                                                    <img src={val.cover} alt="Avatar" />
                                                    <h3 className='frontHeading'>{val.courseName}</h3>
                                                </div>
                                                <div className="flip-card-back">
                                                    <img src={val.hoverCover} alt="" />
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
    )
}

export default Portfolio
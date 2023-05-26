import React from 'react'
import './faq.css';

const Faq = () => {
    return (
        <>
            <div className="container faq">
                <div id="heading">
                <h2 className='text-center'>Frequently Asked Questions </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                    <h6>What Is Digital Marketing, and How Can It Benefit My Business?</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Digital Marketing Solutions involve promoting products or services using digital channels like social media, search engines, email, and other online platforms. The benefits of digital marketing include increased visibility, better targeting of potential customers, and higher ROI than traditional marketing methods.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="true" aria-controls="flush-collapseTwo">
                                    <h6>What Is SEO, and Why Is It Essential For My Website's Ranking In Search Engines?</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">SEO, or search engine optimization, improves a website's visibility and ranking in search engine results pages. It's important because the higher your website ranks, the more likely users are to click on it and become customers.</div>
                                    <div className="accordion-body">Web Development is the process of creating and maintaining a website. It's important because a well-designed website can help attract and retain customers, improve search engine visibility, and provide a positive user experience.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="true" aria-controls="flush-collapseThree">
                                        <h6>What Is PPC Advertising, and How Can It Help My Business Generate Leads and Sales?</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">PPC, or pay-per-click, advertising, involves placing ads on search engines and other websites and paying a fee every time a user clicks on the ad. PPC advertising can generate leads and sales by targeting potential customers based on their search terms and interests.</div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushSecondExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="true" aria-controls="flush-collapseFour">
                                        
                                        <h6>What Is Web Development, and Why Is It Important For My Business Website?</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushSecondExample">
                                <div className="accordion-body">Web Development is the process of creating and maintaining a website. It's important because a well-designed website can help attract and retain customers, improve search engine visibility, and provide a positive user experience.</div>                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="true" aria-controls="flush-collapseFive">
                                        <h6>What Are Social Media Marketing and Management Services, and How Can They Benefit My Business?</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushSecondExample">
                                    <div className="accordion-body">Social media marketing and management services involve creating and managing social media accounts to promote your business and engage with customers. Benefits include increased brand awareness, customer engagement, and potential sales.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="true" aria-controls="flush-collapseSix">
                                        <h6>How Can Website Analytics and Reporting Help Me Improve My Digital Marketing Efforts?</h6>
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushSecondExample">
                                    <div className="accordion-body">Website analytics and reporting tools provide insights into website traffic, user behavior, and conversion rates. These insights can be used to optimize digital marketing efforts by identifying areas for improvement, tracking ROI, and making data-driven decisions.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq

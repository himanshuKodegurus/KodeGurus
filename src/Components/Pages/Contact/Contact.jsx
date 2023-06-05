import React, { useState } from 'react';
import './Contact.css';
import MetaData from '../../Common/MetaData/MetaData';

const Contact = () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <MetaData title={"Contact"}/>
            <div className="contactUsPage"></div>
            <section id='heading'>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6 pt-4">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="icon-box d-flex justify-content-center">
                                        <div className="icon-container">
                                            <span className='contactIcon'>
                                                <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                                            </span>
                                        </div>
                                        <div className="icon-box-content">
                                            <span className="icon-box-title">
                                                Our Head Office
                                            </span>
                                            <p className="icon-box-description">Sebiz Square, Sector 67, Mohali</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-box my-md-0 my-3">
                                        <div className="icon-container">
                                            <span className='contactIcon'>
                                                <i aria-hidden="true" className="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                        <div className="icon-box-content">
                                            <span className="icon-box-title">
                                                Email For Information
                                            </span>
                                            <p className="icon-box-description">contact@kodegurus.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contactForm">
                                <form onSubmit={handleSubmit}>
                                    <div className="row ">
                                        <div className="form-group col-md-6 my-3">
                                            <input type="name" className="form-control" id="setFirstName" onChange={(e) => setfName(e.target.value)} aria-describedby="firstNameHelp" placeholder="First Name" />
                                        </div>
                                        <div className="form-group col-md-6 my-3">
                                            <input type="name" className="form-control" id="setLName" onChange={(e) => setlName(e.target.value)} aria-describedby="lastNameHelp" placeholder="Last Name" />
                                        </div>
                                        <div className="form-group col-md-6 my-3">
                                            <input type="email" className="form-control" id="setPhone" onChange={(e) => setEmail(e.target.value)} aria-describedby="firstNameHelp" placeholder="Enter Email" />
                                        </div>
                                        <div className="form-group col-md-6 my-3">
                                            <input type="phone" className="form-control" id="exampleInputName1" onChange={(e) => setPhone(e.target.value)} aria-describedby="lastNameHelp" placeholder="Enter Phone No." />
                                        </div>
                                        <div className="form-group form-group col-md-12 my-3">
                                            <textarea name="message" id="" cols="30" rows="8" className='form-control'></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn contactBtn">Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 my-4">
                            <div className="google-maps">
                                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=sebiz square&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://capcuttemplate.org/">Capcut Templates</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
import React from 'react'
import './about.css'
import CountUp from 'react-countup';
import { awrapper, online } from '../../../dummydata';
const About = () => {
  return (
    <>
      <div className="aboutBanner"></div>
      <section>
        <div className="container">
          <div className="row">
            <div className="aboutContent my-3">
              <h1 className='aboutheading my-3'>Why KodeGurus?</h1>
              <p>Unlock the Power of Digital Marketing Excellence KodeGurus Digital Marketing Company is a leading choice for businesses seeking exceptional digital marketing solutions. With their deep expertise and innovative approach, Kodegurus delivers unparalleled results.
                We have a team of highly skilled professionals who possesses a profound understanding of the ever-evolving digital landscape, enabling them to create tailored strategies that drive substantial growth and maximize online presence.
                Kodegurus empowers businesses to reach their target audience effectively, optimize conversions, and outperform competitors.<br /><br />
                Clients can trust Kodegurus to provide comprehensive Digital Marketing Services, ranging from SEO and PPC to social media management and content marketing, all backed by their unwavering commitment to delivering measurable ROI.
                Choose Kodegurus as your digital marketing partner and unlock the full potential of your online presence. <br />
              </p>
            </div>
            {/* <div className="aboutContent my-3">
              <h1 className='aboutheading my-3'>KODEGURUS TODAY</h1>
              <p>In a rapidly changing and evolving world, the challenges we face are indeed unique and complex. To find solutions, we need forward-thinking, agile and innovators that can help transform complexities into simple solutioning which we can adapt, and blossom. At SyanSoft, we have the expertise at digital product engineering and deliver on our promise of innovative thinking. We not only solve today’s problems, it’s not enough. We do a bit more. We embrace the future, with vision and clarity about where technology & business are heading.</p>
            </div> */}
          </div>
        </div>
      </section>
                  {/* Awrapper */}
                  <section className="awrapper">
              <div className="container">
                <div className="row">
                  {awrapper.map((val, key) => {
                    return (
                      <div key={key} className="col-3 box">
                        <div className="icon_img">
                          <img src={val.cover} alt="images" />
                        </div>
                        <div className="text">
                          <h1><CountUp duration={2.5} start={1} end={val.data} enableScrollSpy={true} scrollSpyOnce={true}>
                            {({ countUpRef }) => <span ref={countUpRef} />}</CountUp></h1>
                          <h3>{val.title}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Online Seervices */}
            <section className="online">
              <div className="container">
                <div id="heading">
                  <h3>SERVICES</h3>
                  <h1>Browse Our Online Services</h1>
                </div>
                <div className="row">
                  {online.slice(0, 6).map((val, key) => (
                    <div key={key} className="flip-card col-md-4 col-sm-6 p-2 col-xs-12">
                      <a href={`/service#service${key + 1}`} >
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
  )
}

export default About

import Particle2 from "../../components/Particle1/Particle2";
import ServiceComponent1 from "../../components/ServiceComponent/ServiceComponent1";
import ServiceComponent2 from "../../components/ServiceComponent/ServiceComponent2";
import ServiceComponent3 from "../../components/ServiceComponent/ServiceComponent3";
import "./Services.css";

const Services = () => {
    const ScrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
        return null;
      };
      ScrollToTop();
  return (
    <main className='Home Services'>
        <div className="top">
            <p>Our Buzz</p>
            <p>.</p>
        </div>
        <div className="cont-1">
            <p>We Get The</p>
            <p id="buzz" className="orange"><span className="orange">Work</span> Done</p>
        </div>
        <div className="cont-2">
            <p>They don't do PR like we do around here. The truth is, nobody does anything like we do at Teksight. We're rare, we put in great effort, and excel at what we do. Our numbers don't lie and neither do we.</p>
            <p>03</p>
        </div>
        <section className="sec-1s">
            <img src="assets/img/service-bg.png" alt="" />
            <img src="assets/svg/arrow-down.svg" alt="" />
        </section>
        <section className="sec-2s">
        <Particle2
          main={'Delivering Services That Stand Out'}
          head_1={'Public Relations'}
          head_2={'Reputation Management'}
          head_3={'Media Relations'}
          head_4={'Events Management'}
          head_5={'Articles And Multimedia Content Generation'}
          head_6={'Digital Media Marketing'}
          text_1={"Our role as a PR agency is to help brands tell compelling stories that influence public perception of products and services. We execute this through an emotive..."}
          text_2={"The hallmark to building reputation is consistency in the fulfilment of brand promise communicated timely. We've, over the years, helped our clients..."}
          text_3={"We act as an intermediary between a brand and its target audience. We help brands build, manage and maintain value in the market using all forms of useful and relevant m..."}
          text_4={"We plan, organize and manage corporate events, multimedia streaming, stakeholder relations for government parastatals, industry leaders, companies, institutions, entrepreneurs, etc."}
          text_5={"Content is like water; it is essential for the life of an organisation, and it takes the shape of wherever you put it. That is why a capable team is necessary..."}
          text_6={"We focus primarily on marketing your business, products and services in the digital world. This is done through website design and development, search engine optimization (SEO), c.."}
          img_1={'assets/svg/triangle.svg'}
          img_2={'assets/svg/ace.svg'}
          img_3={'assets/svg/star.svg'}
          img_6={'assets/svg/triangle.svg'}
          img_4={'assets/svg/ace.svg'}
          img_5={'assets/svg/star.svg'}
        />
        </section>
        <section className="sec-3s">
            <p className="main-particle">Few Success Stories & Case Studies <span className="orange">.</span></p>
            <section>
                <ServiceComponent1/>
                <ServiceComponent2/>
                <ServiceComponent3/>
            </section>
        </section>
    </main>
  )
}

export default Services
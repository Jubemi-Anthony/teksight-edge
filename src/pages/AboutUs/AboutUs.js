import Team from "../../components/Team/Team";
import "./AboutUs.css";

const AboutUs = () => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
    return null;
  };
  ScrollToTop();
  return (
    <main className="Home About">
      <div className="top">
        <p>About To TekSight Edge</p>
        <p>.</p>
      </div>
      <div className="cont-1">
        <p>The Tribe</p>
        <p id="buzz" className="orange">& Our Buzz</p>
      </div>
      <div className="cont-2">
        <p>We are a data driven Integrated PR and Digital Communications Tech Agency. Our mantra is “creating experiences that inspire emotion and deliver results on every level”. We are motivated to achieve results for all our clients, be it a start-up or a multinational corporation.</p>
        <p>02</p>
      </div>
      <section className="sec-1a">
        <img src="assets/svg/play-bg.svg" alt="play" />
      </section>
      <section className="sec-2a">
        <div className="left-a">
            <p className="main-particle">Teksight's Chronicle <span className="orange">.</span></p>
        </div>
        <article>
            <p>Are you wondering what Teksight Edge means? You won't be the first; Teksight Edge is derived from the synchrony of Technology, Insight and Edge. And that's where our story starts.</p>
            <p>7 years ago, the need to create a digital advertising and PR agency that strikes a balance between perception and reality exceeded all else.  With that in mind, we worked and grew, client after client, to achieve the heights we have surmounted today.</p>
            <p>Now, from Lagos to Kenya to Ghana to Rwanda and more than 60 clients under our belt, Teksight Edge has taken over West Africa's PR space, but we are still not done yet. Our services have expanded from public relations to digital marketing, reputation management, event management, design and content creation etc. To put it curtly, we speak technology into a business's life.</p>
            <p>Be it a multinational company, government agency, start-up, or sole entrepreneur: we're open to taking on <b>just one more client, you</b>.</p>
        </article>
      </section>
      <section className="sec-3a">
        <div>
            <p>8+</p>
            <p>Years In Business</p>
        </div>
        <div>
            <p>100+</p>
            <p>Delivered Projects</p>
        </div>
        <div>
            <p>60+</p>
            <p>Satisifed Clients</p>
        </div>
      </section>
      <section className="sec-4a">
            <div className="statement">
                <img className="target-1" src="assets/svg/target-1.svg" alt=""/>
                  <p className="big-rozha">Our Mission</p>
                <p className="koho-small">To deliver best-in-class public relations solutions for global brands, leveraging perception knowledge, innovation, research and digital technology.</p>
            </div>
            <div className="statement">
                <img src="assets/svg/eye.svg" alt="An eye"/>
                <p className="big-rozha">Our Vision</p>
                <p className="koho-small">To be globally recognized for building strong brand values ​​and be the best managers of perception reality in Africa and the Middle East.</p>
            </div>
      </section>
      <section className="sec-5a">
        <p className="main-particle">Sister Companies <span className="orange">.</span></p>
        <div className="img-sisters">
            <img class="our-teksight" src="/assets/img/sister-company/950-meals.png" alt="" />
            <img class="our-teksight" src="/assets/img/sister-company/atr.png" alt="" />
            <img class="our-teksight" src="/assets/img/sister-company/beyond-perception.png" alt="" />
            <img class="our-teksight" src="/assets/img/sister-company/techuncode.png" alt="" />
        </div>
      </section>
      <section className="sec-6a">
        <p className="main-particle">Meet The Brains Behind The <span className="orange">Buzz .</span></p>
        <section className="sec-6b">
          <div className="left-a">
            <img className="rectangle-45" src="assets/img/team/charles.png" alt="" />
            <div className="name-social">
              <p className="rozha">Charles Edosomwan</p>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <img className="linkedin-4" src="assets/svg/linkedin-colored.svg" alt="" />
              </a>
            </div>
            <p className="koho">C.E.O/PR Manager</p>
          </div>
          <article>
              <p>Charles Edosomwan is the Chief Strategist at Teksight Edge. A graduate of the London School of Public Relations, a member of the Center for Crisis Management London, and a Certified Digital Marketing Professional from the International Digital Marketing Institute Ireland.</p>
              <p>Haven worked for a number of companies in the industry between 2011 and 2014, he decided to put his knowledge and skills into starting a public relations business (Teksight Edge PR) with the aim of “creating experiences that inspire emotion and deliver results on every level”. Charles has led the execution of successful campaigns for brands in the industry for 7 years. Brands he has worked on include Tecno mobile, Adidas, Huawei, Palmchat, Infinix, Itel, Copa Lagos etc.</p>
          </article>
        </section>
      </section>



      <section className="sec-7a">
          <p className="main-particle">The Senior Team <span className="orange">.</span></p>
          <div className="team-members">
            <div className="name-social">
                <p className="rozha">Michael Chiadikobi E. Abugo</p>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer"><img className="linkedin-3" src="assets/svg/linkedin-colored.svg" alt="" /></a>
            </div>
            <div className="roles">
              <p className="koho">GM/COO</p>
            </div>
          </div>        
          <Team name={"Lilian Orha"} role={"Head of Human Resources"}/>        
          <Team name={"Ebunolauwa Amusan"} role={"Account Manager"}/>        
          <Team name={"Ayokunle Oye"} role={"Creative Director"}/>        
          <Team name={"Chima Ifeji"} role={"Art Director"}/>        
          <Team name={"Elijah Omosanya"} role={"Account Manage"}/>        
          <Team name={"Abdulrazaq Imam"} role={"Head Engineering"}/>        
      </section>
    </main>
  )
}

export default AboutUs
import Particle1 from "../../components/Particle1/Particle1";
import "./Home.css";

const Home = () => {
  const ScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
    return null;
  };
  ScrollToTop();
  return (
    <main className='Home'>
      <div className="top">
        <p>Welcome To TekSight Edge</p>
        <p>.</p>
      </div>
      <div className="cont-1">
        <div className="sep-1">
        <p>We</p> <p className="create">Create</p> <p> Experiences</p> 
        </div>
        <p>That Inspire Emotions <span>.</span></p>
      </div>
      <div className="cont-2">
        <p>If you're looking for a well-rounded PR and Tech agency that goes beyond public relations, you're in the right place. Welcome to Teksight, Africa's foremost PR, Tech, Digital Communications and Data Focused agency.</p>
        <p>01</p>
      </div>
      <section className="sec-1">
        <div className="img-holder">
          <div id="ehingbeti">
            <img src="assets/img/ehingbeti.png" alt="Ehingbeti" />
          </div>
          <p>Ehingbeti Lagos Economic Summit</p>
        </div>
        <img id="rectangle-620" src="assets/img/SDG.png" alt="" />
        <div className="img-holder">
          <img src="assets/img/tecno_1.png" alt="Tecno" />
          <p>TECNO Live Smart Campaign</p>
        </div>
      </section>
      <section className="sec-2">
        <Particle1
          main={'Why They Call Us The PR Maestro'}
          head_1={'Global Recognition'}
          head_2={'Perfect Strategy'}
          head_3={'Innovative Idea'}
          text_1={"Our tentacles surge far and wide. We'll build, enhance, protect, and handle your brand awareness and reputation and tell it to the world."}
          text_2={"Although our values are rigid, our strategies dance with time. We do not use the one-size-fits-all approach that is usually common in the PR space. We learn about your brand and develop the best strategy suitable for you."}
          text_3={"While the rest of the world might be trying to think outside the box, for us at Teksight, there is no box. We scale ideas that are new, bold, effective, and that change with technological advancements."}
          img_1={'assets/svg/triangle.svg'}
          img_2={'assets/svg/ace.svg'}
          img_3={'assets/svg/star.svg'}
        />
      </section>
      
      <div className="empty"> <img src="assets/img/vector-bg.png" alt="d" /></div>
      
      <section className="sec-2">
        <Particle1
          main={'Delivering Services That Stand Out'}
          head_1={'Public Relations'}
          head_2={'Reputation Management'}
          head_3={'Media Relations'}
          text_1={"Our role as a PR agency is to help brands tell compelling stories that influence public perception of products and services. We execute this through an emotive approach backed by data insight.."}
          text_2={"The hallmark to building reputation is consistency in the fulfilment of brand promise communicated timely. We've, over the years, helped our clients building relevance amongst their key stakeholders..."}
          text_3={"We act as an intermediary between a brand and its target audience. We help brands build, manage and maintain value in the market using all forms of useful and relevant media channels derived from a well-researched m..."}
          img_3={'assets/svg/triangle.svg'}
          img_1={'assets/svg/quadrilateral.svg'}
          img_2={'assets/svg/star.svg'}
        />
      </section>
      <section className="sec-3">
        <div><p>Learn More</p></div>
        <div><p>Contact Us</p></div>
      </section>
      <section className="sec-4">
        <p className="main">Our Clients Love Us <span>.</span></p>
        <div className="images">
          <img src="assets/img/img-1.png" alt=""/>
          <img src="assets/img/img-2.png" alt=""/>
          <img src="assets/img/kevin-olumese.png" alt=""/>
          <img src="assets/img/img-4.png" alt=""/>
          <img src="assets/img/img-5.png" alt=""/>
        </div>
        <div className="quote">
          <p>“</p>
            <p className="lorem-ipsum-dolor-si kohobt3regular">
              Working with Teksight Edge has been an interesting experience. The agency has been able to build 
              the brands public perception while offering strategic support of other aspects of brand marketing. 
              The agency is commended for their flexibility in planning and budgeting.
            </p>
            <p>”</p>
        </div>
        <div className="person">
          <p>Kelvin Olumesi</p>
          <p>PR & Marketing Manager, Infinix</p>
        </div>
      </section>
    </main>
  )
}

export default Home
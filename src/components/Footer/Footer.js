import "./Footer.css";

const Footer = () => {
  return (
    <footer>
        <p className="main">Companies That Trust Teksight Edge <span>.</span></p>
        <div className="companies">
            <img className="our-teksight" src="/assets/img/our-teksight/9mobile.png" alt="" />
            <img className="our-teksight" src="/assets/img/our-teksight/Adidas.png" alt="" />
            <img className="our-teksight" src="/assets/img/our-teksight/infinix.png" alt="" />
            <img className="our-teksight" src="/assets/img/our-teksight/itel.png" alt="" />
        </div>
        <p className="small-main">Subscribe to pur newsletter to stay on top of what we're doing and thinking<span className="orange">.</span></p>
        <div className="sep-f1">
            <p>Email</p>
            <p>Subscribe</p>
        </div>
        <section className="sec-f1">
            <div>
                <h4>Company</h4>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h4>Sub Companies</h4>
                <ul>
                    <li><a href="https://africatechradio.com" target="_blank" rel="noopener noreferrer">Africa Tech Radio</a></li>
                    <li><a href="https://techuncode.com" target="_blank" rel="noopener noreferrer">Techuncode</a></li>
                    <li><a href="https://beyondperception.com" target="_blank" rel="noopener noreferrer">Beyond Perception</a></li>
                    <li><a href="https://950meals.com" target="_blank" rel="noopener noreferrer">950 Meals</a></li>
                </ul>
            </div>

            <div>
              <h4>Be Social</h4>
              <ul className="social">
                <li>
                    <a href="https://linkedin.com/company/teksight-edge-ltd" target="_blank" rel="noopener noreferrer">
                        <img src="assets/svg/linkedin.svg" alt=""/>
                        <span>Linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/teksightedge" target="_blank" rel="noopener noreferrer">
                        <img src="assets/svg/instagram.svg" alt=""/>
                        <span>Instagram</span>
                    </a> 
                </li>
                <li>
                    <a href="https://twitter.com/teksightedge" target="_blank" rel="noopener noreferrer">
                        <img src="assets/svg/twitter.svg" alt=""/>
                        <span>Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/teksight-edge-ltd-102343631920534" target="_blank" rel="noopener noreferrer">
                        <img src="assets/svg/facebook.svg" alt=""/>
                        <span>Facebook</span>
                    </a>
                </li>
              </ul>
            </div>
        </section>


        <p className="small-main small-main2">TekSight Edge Limited is a PR and Digital Communication Agency<span className="orange">.</span></p>
        <section className="sec-f2">
            <div>
                <h4>TekSight HQ <span className="orange">:</span></h4>
                <p>30b2, Remi Fani Kayode, Ikeja GRA, Ikeja, Lagos, Nigeria.</p>
            </div>
            <div>
                <h4>TekSight Kenya  <span className="orange">:</span></h4>
                <p>Teksight Edge (K) Limited - Blue Violet Plaza, Kamburu Drive, Nairobi, Kenya.</p>
            </div>
 
            <div>
              <h4>TekSight Ghana  <span className="orange">:</span></h4>
                <p>30b2, Remi Fani Kayode, Ikeja GRA, Ikeja, Lagos, Nigeria.</p>
            </div>

            <div>
              <h4>TekSight Rwanda  <span className="orange">:</span></h4>
                <p>Teksight Edge Rwanda Limited - Kacyiru, Gasabo, Umujyi, Wa Kigali, Rwanda.</p>
            </div>
        </section>
        <section className="last-last">
            <p>©Copyright 2022 by TekSight Edge Limited. All rights reserved</p>
        </section>
    </footer>
  )
}

export default Footer
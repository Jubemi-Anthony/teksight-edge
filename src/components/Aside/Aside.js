import "./Aside.css";

const Aside = () => {
  return (
    <aside>
        <a href="https://linkedin.com/company/teksight-edge-ltd" target="_blank" rel="noopener noreferrer">
          <img className="linkedin-1-1" src="assets/svg/linkedin.svg" alt="LinkedIn"/>
        </a>
        <a href="https://instagram.com/teksightedge" target="_blank" rel="noopener noreferrer">
          <img className="instagram-1-1" src="assets/svg/instagram.svg" alt="Instagram"/>
        </a>
        <a href="https://twitter.com/teksightedge" target="_blank" rel="noopener noreferrer">
          <img className="twitter-1" src="assets/svg/twitter.svg" alt="Twitter"/>
        </a>
        <a href="https://facebook.com/teksight-edge-ltd-102343631920534" target="_blank" rel="noopener noreferrer">
          <img className="facebook-1" src="assets/svg/facebook.svg" alt="Facebook"/>
        </a>
      </aside>
  )
}

export default Aside
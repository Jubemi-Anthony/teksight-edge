import "./ServiceComponent.css";

const ServiceComponent2 = () => {
  return (
    <div className="sep-3s">
        <div className="left-3s">
            <img src="assets/img/usaid.png" alt="Tecno Mobile" />
            <p>02</p>
        </div>
        <div className="right-3s">
            <p className="rozha">USAID-IFES Media Monitoring of Kenya Election</p>
            <div className="one-s">
                <p className="koho">BRAND:<span>USAID-IFES</span></p>
                <p className="koho">PRODUCT:<span>Kenya Election</span></p>
                <p className="koho">MARKETS:<span>Kenya</span></p>
            </div>
            <div className="two-s comp2 koho">
                <p>The Kenya election was held in 2017 and due to crisis and issues in the past the election the USAID decided to monitor the conversation in the election and manage perception of the people to avert any crisis. We used a combination of digital tools and monitoring software with the media to manage the outcome</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceComponent2;
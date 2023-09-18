import "./ServiceComponent.css";

const ServiceComponent1 = () => {
  return (
    <div className="sep-3s">
        <div className="left-3s">
            <img src="assets/img/tecno.png" alt="Tecno Mobile" />
            <p>01</p>
        </div>
        <div className="right-3s">
            <p className="rozha">TECNO Live Smart Campaign</p>
            <div className="one-s">
                <p className="koho">BRAND:<span>Tecno Mobile</span></p>
                <p className="koho">PRODUCT:<span>Tecno Smart Family [Phantom A+, Phantom AIII, Phantom Pad Mini, P5, M5. M7]</span></p>
                <p className="koho">MARKETS:<span>Nigeria, Ghana, Cameroun, Ethiopia, South Africa.</span></p>
                <p className="koho">DURATION:<span>3 Months</span></p>
            </div>
            <p className="rozha-small">Our Strategy</p>
            <div className="two-s koho">
                <p>We built a centralized hub and routed our campaign contents (i) microsite content, and (ii) webisodal series into this hub. Our entire owned, earned and paid media were cached also in the hub. The webisodes (10) were deployed on the microsite, and the microsite served as the central hub of the entire campaign</p>
                <p>The webisodes, which were released weekly, were also hosted on a section of the microsite. Each webisode, carried specific but interesting information aboutasmartphonelineinthe family.Users watched these webisodes and also played quiz contests right there based on what they had watched.</p>
            </div>
            <p className="rozha-small">Campaign Results</p>
            <ul className="koho">
                <li><p className="circle"></p> <p className="compecndaj">Most engaging brand page across West Africa till date</p></li>
                <li><p className="circle"></p> <p className="compecndaj">1900% increase in digital presence, largest selling phone brand in West Africa by 2013.</p></li>
                <li><p className="circle"></p> <p className="compecndaj">2nd largest and most engaging Nigeria youtube brand page.</p></li>
                <li><p className="circle"></p> <p className="compecndaj">Most influencial brand twitter handle.</p></li>
            </ul>
        </div>
    </div>
  )
}

export default ServiceComponent1;
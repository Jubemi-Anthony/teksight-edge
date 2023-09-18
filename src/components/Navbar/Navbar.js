import "./Navbar.css";
import { Link } from 'react-router-dom'
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState('home');
    function doStuff(page){
        setShow(false);
        setActive(page);
    }
  return (
    <header>
        <div className="logo">
            <img src="/assets/svg/TSE-logo.svg" alt="logo" />
        </div>
        <nav>
            <ul>
                <li onClick={()=>setActive('home')}>
                    <Link to="/">
                        <span className={active === 'home' ? 'orange' : ''}>01.</span>
                        <p className="nav-item">Home</p>
                    </Link>
                </li>
                <li onClick={()=>setActive('about')}>
                    <Link to="/about">
                        <span className={active === 'about' ? 'orange' : ''}>02.</span>
                        <p className="nav-item">About Us</p>
                    </Link>
                </li>
                <li onClick={()=>setActive('services')}>
                    <Link to="/services">
                        <span className={active === 'services' ? 'orange' : ''}>03.</span>
                        <p className="nav-item">Services</p>
                    </Link>
                </li>
                <li onClick={()=>setActive('careers')}>
                    <Link>
                        <span className={active === 'careers' ? 'orange' : ''}>04.</span>
                        <p className="nav-item">Careers</p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <span>05.</span>
                        <p className="nav-item">Blog</p>
                    </Link>
                </li>
            </ul>
            <p id="small-screen">
                <Link>
                    <span>Contact Us</span>
                </Link>
                <img onClick={()=> setShow(!show)}  src="assets/svg/menu-bar.svg" alt="Toggle"/>
            </p>
            {
                show && 
                <div className="show">
                    <ul>
                        <li onClick={()=>doStuff('home')}>
                            <Link to="/">
                                <span className={active === 'home' ? 'orange' : ''}>01.</span>
                                <p className="nav-item">Home</p>
                            </Link>
                        </li>
                        <li onClick={()=>doStuff('about')}>
                            <Link to="/about">
                                <span className={active === 'about' ? 'orange' : ''}>02.</span>
                                <p className="nav-item">About Us</p>
                            </Link>
                        </li>
                        <li onClick={()=>doStuff('services')}>
                            <Link to="/services">
                                <span className={active === 'services' ? 'orange' : ''}>03.</span>
                                <p className="nav-item">Services</p>
                            </Link>
                        </li>
                        <li onClick={()=>doStuff('careers')}>
                            <Link>
                                <span className={active === 'careers' ? 'orange' : ''}>04.</span>
                                <p className="nav-item">Careers</p>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span>05.</span>
                                <p className="nav-item">Blog</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            }
        </nav>

    </header>
  )
}

export default Navbar
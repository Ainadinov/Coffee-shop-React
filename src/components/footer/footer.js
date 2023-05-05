import "./index.css"
import { Link } from "react-router-dom";
import logoBlack from "../images/Beans-logo-black.png"

function Footer(){
    return(
        <div className="footer">
                <div>
                    <Link className="footer__link" to="/coffee-house">Coffee House</Link>
                    <Link className="footer__link" to="/our-house">Our Coffee</Link>
                    <Link className="footer__link" to="/pleasure">For your pleasure</Link>
                </div>
                <img src={logoBlack} className="footer__img"></img>
        </div>
    )
}

export default Footer;
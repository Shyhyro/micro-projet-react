import "./Footer.css";
import logo from "../../assets/logo.svg";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-site">
                <img alt="logo" src={logo} />
                <h2>monsite.com</h2>
            </div>
            <div className="footer-id">
                ID 000000000 © Author
            </div>
        </footer>
    )
}
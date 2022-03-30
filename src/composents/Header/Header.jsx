import "./Header.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
    return (
        <header>
            <div className="header-title"><img src={logo} alt="logo"/> LOGO</div>
            <ul className="header-nav">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
                <li>SUPPORT</li>
                <li>DOWNLOAD</li>
            </ul>
        </header>
    )
}
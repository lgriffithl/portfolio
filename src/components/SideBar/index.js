import "./style.scss"
import {Link, NavLink} from "react-router-dom"
import logoS from "../../assets/images/logo-r.png"
import logoSub from "../../assets/images/logo-ram.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faHome, 
    faUser, 
    faEnvelope,
    faCode} from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'

function SideBar(){
    return(
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={logoS} alt="logo"/>
                <img className="sub-logo" src={logoSub} alt="slobodan"/>
            </Link>
            <nav>
                <NavLink 
                    exact
                    to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" /> 
                </NavLink>
                <NavLink 
                    exact
                    to="/projects">
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" /> 
                </NavLink>
                <NavLink 
                    exact
                    to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> 
                </NavLink>
                <NavLink 
                    exact
                    to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> 
                </NavLink>
               
                
            </nav>
            <ul>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtube.com">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtube.com">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtube.com">
                        <FontAwesomeIcon icon={faDiscord} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;
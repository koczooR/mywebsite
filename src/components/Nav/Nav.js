import logo from "../../assets/logo_1.png";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import hamburgerMenu from "../../assets/icon-hamburger.svg";
import closeMenu from "../../assets/icon-close.svg";

export const Nav = () => {
  const [navBar, setNavBar] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <section className={navBar ? "nav active" : "nav"}>
      <div className="logo">
        <ScrollLink to="starter" smooth={true} duration={2000}>
          <img src={logo} alt="logo" />
        </ScrollLink>
      </div>
      <div className="nav_bar">
        <button className="hamburgerMenu" onClick={() => setIsExpanded(!isExpanded)}>
          <img src={isExpanded ? closeMenu : hamburgerMenu} alt="menu" />
        </button>
        <ul className={isExpanded ? "nav_menu expanded" : "nav_menu"}>
          <li>
            <ScrollLink to="starter" smooth={true} duration={2000} className="active_btn" onClick={() => setIsExpanded(!isExpanded)}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={2000} onClick={() => setIsExpanded(!isExpanded)}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true} duration={2000} onClick={() => setIsExpanded(!isExpanded)}>
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="portfolio" smooth={true} duration={2000} onClick={() => setIsExpanded(!isExpanded)}>
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <a href="https://github.com/koczooR" target="_blank" rel="noreferrer noopener" onClick={() => setIsExpanded(!isExpanded)}>
              GitHub
            </a>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={2000} onClick={() => setIsExpanded(!isExpanded)}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

import logo from "../../assets/logo_1.png";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

export const Nav = () => {
  const [navBar, setNavBar] = useState(false);

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
        <ul>
          <li>
            <ScrollLink to="starter" smooth={true} duration={2000} className="active_btn">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={2000}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true} duration={2000}>
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="portfolio" smooth={true} duration={2000}>
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <a href="https://github.com/koczooR" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={2000}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

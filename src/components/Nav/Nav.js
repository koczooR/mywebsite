import logo from "../../assets/logo_1.png";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

export const Nav = () => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  // let pageHeight = window.innerHeight;

  // const scroll = (event) => {
  //   if (event.deltaY > 0) {
  //     window.scrollBy({ top: pageHeight, behavior: "smooth" });
  //   } else {
  //     window.scrollBy({ top: -pageHeight, behavior: "smooth" });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("wheel", scroll);
  // });

  return (
    <section className={navBar ? "nav active" : "nav"}>
      <div className="logo">
        <ScrollLink to="starter" smooth={true}>
          <img src={logo} alt="logo" />
        </ScrollLink>
      </div>
      <div className="nav_bar">
        <ul>
          <li>
            <ScrollLink to="starter" smooth={true}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true}>
              Skills
            </ScrollLink>
          </li>
          <li>
            <a href="https://github.com/koczooR" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

import { UilLinkedin } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";

export const Contact = () => {
  const vh = window.innerHeight;

  return (
    <section id="contact" className="contact" style={{ height: vh }}>
      <p className="contact_title">Contact</p>
      <div className="contact_container">
        <div className="contact_content">
          <p className="contact_text">
            Choose <span>your</span> way to <span>contact me</span>.
          </p>
          <div className="btn_container">
            <a href="https://www.linkedin.com/in/piotr-koczorowski-koczor" target="_blank" rel="noreferrer noopener">
              <UilLinkedin size="40" color="#fff" /> Linkedin
            </a>
            <a href="mailto:koczorowski94@gmail.com">
              <UilEnvelopeAlt size="40" color="#fff" /> E-mail
            </a>
          </div>
        </div>

        <div className="footer">
          <p>
            <a
              href="https://pl.freepik.com/darmowe-wektory/planety-w-tle-paralaksy-w-gwiazdach-kosmicznych_30230409.htm#page=3&query=parallax&position=49&from_view=search"
              target="_blank"
              rel="noreferrer noopener"
            >
              Image by upklyak
            </a>{" "}
            on Freepik
          </p>
          <p>&copy; Piotr Koczorowski. All right reserved</p>
        </div>
      </div>
    </section>
  );
};

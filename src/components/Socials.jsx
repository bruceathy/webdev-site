import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import xlogo from "../assets/x.png";

export default function Socials() {
  return (
    <ul className="social-links">
      <li>
        <a href="https://github.com/BruceAthy">
          <img src={github} alt="github" className="social-logo" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/bruce-athy/">
          <img src={linkedin} alt="linkedin" className="social-logo" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/BruceAthy">
          <img src={xlogo} alt="x" className="social-logo" />
        </a>
      </li>
    </ul>
  );
}

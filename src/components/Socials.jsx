import github from "../assets/github-logo.svg";
import linkedin from "../assets/linkedin-logo.svg";
import xlogo from "../assets/x-logo.svg";

export default function Socials() {
  return (
    <ul className="social-links">
      <li>
        <a href="https://github.com/BruceAthy">
          <img src={github} alt="github" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/bruce-athy/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/BruceAthy">
          <img src={xlogo} alt="x" />
        </a>
      </li>
    </ul>
  );
}

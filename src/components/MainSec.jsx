import Socials from "./Socials.jsx";
import profilepic from "../assets/profile.jpeg";

export default function Main() {
  return (
    <div className="hero">
      <div className="profile">
        <img src={profilepic} alt="profile picture" className="profile-pic" />
        <div className="bio">
          <h3>Welcome!</h3>
          <p>
            I'm a front-end developer with a passion for creating engaging and
            user-friendly web experiences. My love for tech keeps me constantly
            learning and expanding my knowledge to stay up-to-date with the
            latest trends and technologies.
          </p>
          <Socials />
        </div>
      </div>
    </div>
  );
}

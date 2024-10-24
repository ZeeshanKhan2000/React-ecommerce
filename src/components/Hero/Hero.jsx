import "./Hero.css";
import handImg from "../../assets/hand_icon.png";
import heroImg from "../../assets/hero_image.png";
import arowImg from "../../assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-left-side">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hand-icon">
          <p>New</p>
          <img src={handImg} alt="" />
        </div>
        <p>Collection </p>
        <p>for everyOne</p>
        <div className="hero-btn">
          <div>Latest Collection</div>
          <img src={arowImg} alt="" />
        </div>
      </div>
      <div className="hero-right-side">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;

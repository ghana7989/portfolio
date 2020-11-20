import Home1 from "../../img/home1.png"

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work To Make</h2>
          </div>
          <div className="hide">
            <h2>Your <span>dreams</span> come</h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>Contact Us For any photography or videography ideas tha you have. We have professionals with amazing skills</p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={Home1} alt="Home1 - a guy with camera" />
      </div>
    </div>
  )
}

export default AboutSection

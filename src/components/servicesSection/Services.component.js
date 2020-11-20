// Importing Icons
import Clock from '../../img/clock.svg'
import Diaphragm from '../../img/diaphragm.svg'
import Money from '../../img/money.svg'
import Teamwork from '../../img/teamwork.svg'
import Home2 from '../../img/home2.png'

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>High <span>Quality</span> Services</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={Clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Diaphragm} alt="Diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={Money} alt="Money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Home2} alt="Home2"/>
      </div>
    </div>
  )
}

export default ServicesSection

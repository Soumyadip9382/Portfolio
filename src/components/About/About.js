import '../shared/Section.css';
import './About.css';

function About({ portfolioData }) {
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-image">
            <div style={{ textAlign: 'center' }}>
              <img src={portfolioData.profilePhoto} alt="Profile" className="profile-photo" />
              {/* <div style={{ fontSize: '80px', marginBottom: '20px' }}>👨‍💻</div>
              <p>Your Profile Photo</p> */}
            </div>
          </div>
          <div className="about-text">
            <h3>Who Am I?</h3>
            <p>{portfolioData.about}</p>
            <p>
              I specialize in creating robust, scalable applications using modern web technologies. 
              My passion lies in problem-solving and delivering high-quality code that makes a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

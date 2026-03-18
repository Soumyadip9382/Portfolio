import '../shared/Section.css';
import './Home.css';

function Home({ portfolioData }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className='name'>{portfolioData.name}</h1>
        <p className="hero-title">{portfolioData.title}</p>
        <p>{portfolioData.tagline}</p>
        <div style={{ marginTop: '30px' }}>
          <a href="#projects" className="cta-button">View My Work</a>
          <a href="#contact" className="cta-button secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Home;

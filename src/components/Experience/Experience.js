import '../shared/Section.css';
import './Experience.css';

function Experience({ portfolioData }) {
  return (
    <section id="experience" className="section section-light">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My professional journey and the experiences that have shaped my development skills.</p>
        
        {/* Experience & Education Two Column Layout */}
        <div className="experience-education-container">
          {/* Professional Experience */}
          <div className="experience-column">
            <h3 className="column-title">📋 Professional Experience</h3>
            <div className="experience-timeline">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-dot"></div>
                  <div className="experience-content">
                    <h4>{exp.title}</h4>
                    <div className="company-info">
                      <span className="company">🏢 {exp.company}</span>
                      <span className="location">📍 {exp.location}</span>
                    </div>
                    <div className="year">{exp.year}</div>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Timeline Line */}
          <div className="timeline-divider"></div>

          {/* Education */}
          <div className="education-column">
            <h3 className="column-title">🎓 Education</h3>
            <div className="experience-timeline education-timeline">
              {portfolioData.education && portfolioData.education.map((edu, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-dot education-dot"></div>
                  <div className="experience-content education-content">
                    <h4>{edu.title}</h4>
                    <div className="company-info">
                      <span className="company">🏫 {edu.school}</span>
                      <span className="location">📍 {edu.location}</span>
                      <span className="gpa">🎓 GPA: {edu.gpa}</span>
                    </div>
                    <div className="year">{edu.year}</div>
                    {edu.details && <p>{edu.details}</p>}
                    {edu.achievements && (
                      <ul className="achievements-list">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>• {achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Awards Section */}
        {portfolioData.certifications && portfolioData.certifications.length > 0 && (
          <div className="certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-grid">
              {portfolioData.certifications.map((cert, index) => (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" key={index} className="certification-item">
                  <span className="cert-icon">{cert.icon}</span>
                  <p>{cert.title}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;

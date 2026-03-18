import '../shared/Section.css';
import './Navbar.css';

function Navbar({ menuActive, setMenuActive, darkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">SD</div>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={() => setMenuActive(false)}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={() => setMenuActive(false)}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={() => setMenuActive(false)}>Skills</a></li>
          <li><a href="#experience" className="nav-link" onClick={() => setMenuActive(false)}>Experience & Education</a></li>
          <li><a href="#certifications" className="nav-link" onClick={() => setMenuActive(false)}>Certifications</a></li>
          <li><a href="#projects" className="nav-link" onClick={() => setMenuActive(false)}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setMenuActive(false)}>Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark/light mode">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

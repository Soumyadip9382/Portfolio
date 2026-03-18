import './Footer.css';

function Footer({ portfolioData }) {
  return (
    <footer className="footer">
      <p>&copy; 2026 {portfolioData.name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

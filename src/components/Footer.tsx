import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <p>All rights CC by Kaki Lai © {currentYear}</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/kakilai/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/kakiCoder511" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

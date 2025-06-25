import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 px-6 py-12 bg-[#0d0d0d] text-gray-400 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-sm tracking-wide">
          All rights CC by Kaki Lai © {currentYear}
        </div>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

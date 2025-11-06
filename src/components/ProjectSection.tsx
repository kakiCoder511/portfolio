// src/components/ProjectSection.tsx
import './ProjectSection.css';

const projects = [
  {
    title: 'Exhibition Curator', 
    description:     'A creative web app that lets users curate mini virtual exhibitions using public art APIs. Built with Next.js, TypeScript, and Axios, featuring dynamic artwork fetching, custom exhibition boards, and smooth navigation.',
    link: 'https://exhibition-curator-gamma.vercel.app/'
  },
  {
    title: 'NC News Website',
    description: 'A Reddit-style news platform built with React and Axios, connecting to a RESTful backend. Features include voting with optimistic UI, comment posting and deletion, and topic-based article sorting.',
    link: 'https://nc-news-kaki.netlify.app/'
  },
  {
    title: 'Plantify App - Team Project',
    description: 'A React Native mobile app designed to support gardening enthusiasts. Key features include daily plant recommendations, a plant identification quiz, gardening tips, weather updates, and a personal journal for tracking progress.',
    link: 'https://www.northcoders.com/blog/plantify/'
  },
   {
    title: 'Trading Signal Backend(in progress)',
    description:
      'A back-end system for analysing stock momentum signals, focusing on indicators like RSI, volume spikes, and bullish streaks. Provides actionable insights for short-term trading through API endpoints.',
    link: 'https://github.com/kakiCoder511/trading-signal-backend-',
  },
  {
    title: 'Bus Radar App (in progress)',
    description: 'Built from first-hand experience as a London bus driver, BusRadar helps commuters avoid curtailments by combining live data, risk prediction logic and clean visual feedback in a mobile-friendly app.',
    link: 'https://github.com/kakiCoder511/BusRadarApp'
  },
  {title:'Pluto Pay UX Project',
    description: 'A UX case study for a financial mobile app that helps users manage shopping, money transfers, and savings with clear user flows, research, ideation and prototyping.',
    link:"/Projects/plutopay/plutopay.html", 

  }
];

export default function ProjectSection() {
  return (
    <section className="project-section" id="projects">
      <h2 className="project-heading">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}


import ConnectingDotsGraph from './ConnectingDotsGraph';
import { motion } from "framer-motion";

export default function AboutMe() {
return (

    <section id="about" className="max-w-4xl mx-auto py-20 px-6 text-white">

  <h2 className="text-4xl font-bold text-center mb-12">
    “You can’t connect the dots looking forward; you can only connect them looking backwards.”<br />
    <span className="text-xl font-light text-gray-400">— Steve Jobs</span>
  </h2>

  <ConnectingDotsGraph />

  <div className="mt-16 space-y-12">
    <div>
      <h3 className="text-2xl font-semibold text-pink-400 mb-2">
        What I bring from my past experiences
      </h3>
      <ul className="list-disc list-inside text-lg text-gray-300">
        <li>Creativity in problem solving</li>
        <li>Analytical thinking through observation</li>
        <li>Collaboration with diverse teams</li>
        <li>A deep curiosity about both people and technology</li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-pink-400 mb-2">
        How others describe me
      </h3>
      <ul className="list-disc list-inside text-lg text-gray-300 grid md:grid-cols-2 gap-x-8">
        <li>Proactive in learning and growth</li>
        <li>Creative in approach and execution</li>
        <li>Motivated by meaningful work</li>
        <li>Open to feedback and new ideas</li>
        <li>Adaptable in dynamic environments</li>
        <li>Rooted in integrity and empathy</li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-pink-400 mb-2">
        Current Tech Stack
      </h3>
      <p className="text-lg text-gray-300">
        React · TypeScript · Tailwind CSS · Framer Motion · Vite · Node.js · Express · PostgreSQL · Git · Testing (Jest, Supertest)
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-pink-400 mb-2">
        Outside of code
      </h3>
      <p className="text-lg text-gray-300">
        I capture solo travel moments through photography and short films, explore cities (yes — even after being a London bus driver), doodle my ideas when inspiration hits, and dream of future road trips with a dog, a cat, and a camper.
      </p>
    </div>
  </div>
</section>
)
}
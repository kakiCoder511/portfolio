// HeroIntro.tsx
import { motion } from 'framer-motion';
import HeroIntroRibbon from './HeroIntroRibbon';

export default function HeroIntro() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
      <HeroIntroRibbon />

      <motion.a
        href="#about"
        className="inline-block mt-10 bg-[#c084fc] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#a855f7] transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        ↓ View My Work
      </motion.a>
    </section>
  );
}

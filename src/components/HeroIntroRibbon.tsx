import { motion } from 'framer-motion';

export default function HeroIntroRibbon() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Dot Container */}
      <div className="relative w-full h-[40vh] flex items-center justify-center">
        {/* Left Dot */}
        <motion.div
          className="w-6 h-6 rounded-full absolute bg-[#D77EFF] shadow-[0_0_20px_#D77EFF]"
          initial={{ x: 0 }}
          animate={{ x: '-12rem' }}
          transition={{ duration: 1.2 }}
        />

        {/* Right Dot */}
        <motion.div
          className="w-6 h-6 rounded-full absolute bg-[#FFEB5A] shadow-[0_0_20px_#FFEB5A]"
          initial={{ x: 0 }}
          animate={{ x: '12rem' }}
          transition={{ duration: 1.2 }}
        />

        {/* Connecting Line */}
        <motion.div
          className="absolute h-0.5 bg-white shadow-[0_0_10px_white]"
          style={{ width: '24rem' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      {/* Break Line Effect */}
      <motion.div
        className="w-[1px] h-0.5 bg-black my-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 0.3 }}
      />

      {/* Reveal Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I am Kaki.</h1>
        <p className="text-xl text-gray-300">A Junior software developer.</p>
      </motion.div>
    </div>
  );
}

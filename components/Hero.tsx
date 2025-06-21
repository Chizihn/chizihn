"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="py-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
            C
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">
          Hi, I&apos;m Chizi <span className="wave">👋</span>
        </h1>

        <div className="flex flex-wrap justify-center items-center mb-1">
          <span className="px-4 py-3 bg-foreground/10 rounded-full text-sm font-medium hover:bg-foreground/20 transition-colors">
            Software Engineer
          </span>
        </div>

        <p className="text-xl text-foreground/70 mb-2">
          Transforming ideas into elegant, scalable solutions that drive
          innovation and elevate user experiences.
        </p>
      </motion.div>
    </section>
  );
}

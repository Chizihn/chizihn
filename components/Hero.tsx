"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Chizihn",
    label: "Follow on GitHub",
    color: "hover:text-gray-700 dark:hover:text-gray-300",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    url: "https://x.com/chizihn",
    label: "Follow on X",
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/chizihn",
    label: "Connect on LinkedIn",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:chizihn@gmail.com",
    label: "Send me an email",
    color: "hover:text-red-600 dark:hover:text-red-400",
  },
];

export default function Hero() {
  return (
    <section id="home" className="py-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
          <Image
            src="/images/chizi-humphrey-njoku.jpeg"
            alt={"Chizi Humphrey Njoku - Chizihn"}
            fill
            className="object-cover"
          />

          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
            C
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">
          Hi, I&apos;m Chizi <span className="wave">👋</span>
        </h1>

        <div className="flex flex-wrap justify-center items-center mb-1">
          <span className="px-4 py-3 bg-foreground/10 rounded-full text-sm font-medium hover:bg-foreground/20 transition-colors">
            Fullstack Software Engineer
          </span>
        </div>

        <p className="text-xl text-foreground/70 mb-4">
          I build high-performance web and mobile applications using modern
          technologies like React, Next.js, React Native, and Node.js. I
          specialize in scalable architectures, Web3 integrations, and
          production-ready solutions.
        </p>

        <div className="flex justify-center items-center gap-6 py-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <div key={social.name}>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all transform hover:scale-110 ${social.color}`}
                  title={social.label}
                  aria-label={social.label}
                >
                  <Icon size={32} className="text-foreground" />
                  {/* <span className="text-sm font-medium text-foreground">
                  {social.name}
                </span> */}
                </Link>
              </div>
            );
          })}
        </div>

        {/* <p className="text-sm text-foreground/60 mb-6">
          Available for freelance, contract, and full-time opportunities — open
          to projects involving MVPs, SaaS, fintech, and Web3.
        </p> */}

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-foreground/30 hover:bg-foreground/5 rounded-lg font-semibold transition-colors"
          >
            View My Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}

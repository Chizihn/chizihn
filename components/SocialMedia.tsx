"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
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

export default function SocialMedia() {
  return (
    <section id="social" className="py-12">
      <div className="text-center mb-12">
        <span className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium">
          Connect With Me
        </span>
        <h2 className="text-4xl font-bold mt-6 mb-4">Let&apos;s Connect</h2>
        <p className="text-foreground/70 text-lg">
          Follow me on social media or reach out directly. I&apos;m always open
          to discussing new projects, opportunities, and ideas.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center space-y-2 p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all transform hover:scale-110 ${social.color}`}
                title={social.label}
                aria-label={social.label}
              >
                <Icon size={32} className="text-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {social.name}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

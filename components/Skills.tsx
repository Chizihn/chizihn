"use client";

import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "React native",
  "TailwindCSS",
  "Shadcn UI",
  "Node.js",
  "Express.js",
  "REST Api",
  "Graphql",
  "Firebase",
  "NoSQL",
  "SQL",
  "Sanity",
  "Redis",
  "AWS",
  "Git",
  "GitHub",
  "Figma",
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="px-4 py-2 bg-foreground/10 rounded-full text-sm font-medium hover:bg-foreground/20 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

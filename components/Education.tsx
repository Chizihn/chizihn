"use client";

import { motion } from "framer-motion";

const education = [
  {
    institution: "AltSchool Africa",
    program: "Cloud Engineering",
    period: "2025 - Present",
    logo: "A",
  },
  {
    institution: "Techrity",
    program: "Backend Engineering",
    period: "2025",
    logo: "S",
  },
  {
    institution: "University of Portharcourt",
    program: "Bachelor's Degree of Computer Science ",
    period: "2021 - 2025",
    logo: "U",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold mb-12">Education</h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold">
                {edu.logo}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{edu.institution}</h3>
                <p className="text-foreground/70">{edu.program}</p>
              </div>
            </div>
            <div className="text-right text-foreground/70">{edu.period}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

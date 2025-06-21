"use client";

import { motion } from "framer-motion";

const workExperience = [
  {
    company: "Nextbud",
    role: "Senior Frontend Engineer",
    period: "Aug, 2024 - Jan, 2025",
    logo: "N",
  },
  {
    company: "Rehabify Learn",
    role: "Lead Software Engineer",
    period: "May 2025 - Present",
    logo: "R",
  },
  {
    company: "Rehabify",
    role: "Software Engineer",
    period: "August 2024 - Present",
    logo: "R",
  },
  {
    company: "Hogis Group",
    role: "Software Engineer",
    period: "Freelance - August 2024",
    logo: "H",
  },
];

export default function WorkExperience() {
  return (
    <section id="work" className="py-12">
      <h2 className="text-3xl font-bold mb-12">Work Experience</h2>

      <div className="space-y-8">
        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold">
                {job.logo}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{job.company}</h3>
                <p className="text-foreground/70">{job.role}</p>
              </div>
            </div>
            <div className="text-right text-foreground/70">{job.period}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

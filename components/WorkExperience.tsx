"use client";

import { motion } from "framer-motion";

interface JobExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

const workExperience: JobExperience[] = [
  {
    company: "Glubon",
    role: "Software Engineer",
    period: "August 2025 - Present",
    description: "Proptech platform for renting and buying properties",
    achievements: [
      "Developed React Native mobile application for Android and iOS with chat integration and subscriptions",
      "Architected GraphQL and REST APIs handling daily requests",
      "Built admin dashboard reducing administrative overhead by 45%",
      "Integrated AI-powered search increasing user engagement by 55%",
      "Optimized queries with Redis caching, reducing API response times by 50%",
    ],
  },
  {
    company: "GoCabs",
    role: "Full-Stack Blockchain Developer",
    period: "November 2025",
    description: "Web3 ride-hailing platform for the Solana blockchain",
    achievements: [
      "Built two React Native apps (Rider + Driver/Owner) from scratch",
      "Designed GraphQL backend with Apollo Server and Socket.io for real-time updates",
      "Implemented live tracking and in-app payment with SolanaPay",
      "Deployed Redis infrastructure for real-time location updates",
    ],
  },
  {
    company: "Cloudnotte",
    role: "Frontend Engineer",
    period: "Aug 2024 – Jun 2025",
    description: "EdTech SaaS platform serving 100+ educational institutions",
    achievements: [
      "Developed scalable web interfaces with reusable UI components",
      "Integrated REST and GraphQL APIs with optimized state management",
      "Implemented performance optimizations: lazy loading, memoization, accessibility best practices",
    ],
  },
  {
    company: "Meghee",
    role: "Full-Stack Software Engineer",
    period: "Jun 2024 – May 2025",
    description: "",
    achievements: [
      "Built secure APIs with JWT authentication, data validation, and caching",
      "Reviewed code, debugged problems and corrected issues",
      "Designed database schemas and optimized queries",
      "Integrated third-party tools and CI/CD pipelines for improved deployment speed",
      "Researched emerging web technologies and trends",
    ],
  },
  {
    company: "Freelance Developer",
    role: "Full-Stack Developer",
    period: "2022 – Present",
    description:
      "Delivered web and mobile projects using React Native, Next.js, and Node.js",
    achievements: [],
  },
  {
    company: "M-R Soft International",
    role: "Frontend Engineering Intern",
    period: "2021",
    description: "",
    achievements: [
      "Built responsive web interfaces using modern HTML5, CSS3, and JavaScript",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="work" className="py-12">
      {/* Header with Name and Contact */}
      {/* <div className="mb-12 pb-8 border-b border-foreground/10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">Chizi Humphrey Njoku</h1>
          <p className="text-lg text-foreground/70 mb-4">
            Full-Stack Software Engineer | React | Next.js | React Native |
            Node.js | Web3
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-foreground/60">
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a
                href="mailto:chizihn@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                chizihn@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Github size={16} />
              <Link
                href="https://github.com/chizihn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                github.com/chizihn
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin size={16} />
              <Link
                href="https://linkedin.com/in/chizihn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                linkedin.com/in/chizihn
              </Link>
            </div>
          </div>
        </motion.div>
      </div> */}

      {/* Professional Summary */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 pb-8 border-b border-foreground/10"
      >
        <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
        <p className="text-foreground/70 leading-relaxed">
          Self-motivated problem solver skilled in software development.
          Experienced in React Native, Node.js, GraphQL, and blockchain
          technologies. Proven track record delivering production-ready
          solutions for PropTech, FinTech, and EdTech platforms.
        </p>
      </motion.div> */}

      {/* Professional Experience */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 pb-8 border-b border-foreground/10"
      >
        <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>

        <div className="space-y-10">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="mb-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {job.company}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.role}
                    </p>
                  </div>
                  <span className="text-sm text-foreground/60 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                {job.description && (
                  <p className="text-sm text-foreground/60 italic mt-1">
                    {job.description}
                  </p>
                )}
              </div>

              {job.achievements.length > 0 && (
                <ul className="mt-3 space-y-2 ml-4">
                  {job.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-foreground/70 text-sm flex items-start"
                    >
                      <span className="mr-3 text-blue-600 dark:text-blue-400">
                        •
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-foreground/5 rounded-lg p-6 mb-12"
      >
        <p className="text-foreground font-semibold">
          📅 Availability: Immediately available for full-time remote or hybrid
          opportunities
        </p>
      </motion.div>
    </section>
  );
}

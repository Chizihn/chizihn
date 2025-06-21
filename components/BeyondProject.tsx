"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const currentProjects = [
  {
    title: "Hogis-OrderNow",
    description:
      "full-featured online food ordering platform built with Next.js and TypeScript. It supports user authentication, shared cart functionality, payment integration, and an admin dashboard for order and menu management. The application features a modern UI with Tailwind CSS and leverages Convex for backend operations.",
    logo: "H",
    link: "OrderNow",
  },
  {
    title: "TicketCrib",
    description:
      "Developed TicketCrib, a real-time event ticketing platform built with Next.js, Convex, Clerk, and Paystack. Implemented features including real-time ticket availability, smart queue management, secure payment processing, digital ticketing with QR codes, and automated refunds. Leveraged modern UI libraries (TailwindCSS, shadcn/ui) for a responsive, accessible user experience, and integrated real-time backend updates for seamless event management and attendee experiences.",
    logo: "T",
    link: "TicketCrib",
  },
];

export default function BeyondProjects() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <span className="bg-foreground dark:bg-background text-background dark:text-foreground px-4 py-2 rounded-full text-sm font-medium">
          Beyond Projects
        </span>
        <h2 className="text-4xl font-bold mt-6 mb-4">I like building things</h2>
        <p className="text-foreground/70 text-lg max-w-4xl mx-auto">
          As a software developer, I thrive on collaboration and community
          engagement. I am passionate about contributing to open-source
          projects, sharing knowledge through mentorship and workshops, and
          volunteering to empower others in tech. My focus is on building
          meaningful connections and fostering innovation through collective
          growth.
        </p>
      </div>

      <div className="space-y-8">
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-6"
          >
            <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              {project.logo}
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-sm text-foreground/70">
                  Currently Working On
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {project.description}
              </p>
              <button className="flex items-center space-x-2 px-4 py-2 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors">
                <ExternalLink size={16} />
                <span>{project.link}</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start space-x-6"
        >
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">C</span>
          </div>

          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-sm text-gray-400">
                Community Engagement
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Cowrywise Campus Ambassador
            </h3>
            <p className="text-gray-400 mb-2">Calabar, Nigeria</p>
            <p className="text-gray-300 leading-relaxed">
              Enlightened students about financial literacy and digital
              financial solutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-start space-x-6"
        >
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">D</span>
          </div>

          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-sm text-gray-400">
                Conference Participation
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">
              AI Codelabs 2.0 @ DevFest Calabar &apos;24
            </h3>
            <p className="text-gray-400 mb-2">
              Youreka Hub, State Housing Estate, Calabar,
            </p>
            <p className="text-gray-300 leading-relaxed">
              Attended DevFest (AI Codelabs 2.0 @ DevFest Calabar &apos;24) to
              stay on the cutting edge of technologies like AI and blockchain.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

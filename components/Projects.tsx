"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Gocabs - Web3 Ride Hailing Aapp",
    period: "2025",
    description:
      " GoCabs is a next-generation, event-focused shuttle booking application built",
    tech: [
      "React native",
      "Expo",
      "Zustand",
      "Apollo",
      "Typescript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "SolanaPay",
      "Socket.io",
      "Nativewind",
      "Shadcn UI",
      "GraphQL",
    ],
    tags: ["Frontend", "Backend"],
    image: "/images/gocabs-shot.png",
    website: false,
    websiteUrl: "",
    github: true,
    frontendGithubUrl: "",
    backendGithubUrl: "https://github.com/Chizihn/gocabs-api", // Backend repo URL
  },
  {
    title: "PolkaPay",
    period: "2025",
    description:
      "PolkaPay is a decentralized payment link platform built on Polkadot that allows merchants to accept cryptocurrency payments without intermediaries. Think Stripe Payment Links for Web3 - but with 0% platform fees, instant settlements, and unstoppable infrastructure.",
    tech: ["Next.js", "Typescript", "Tailwind", "Polkadot.js", "Supabase"],
    tags: ["Frontend"],
    image: "/images/polkapay-shot.png",
    website: true,
    websiteUrl: "https://polkapay.vercel.app",
    github: true,
    frontendGithubUrl: "https://github.com/Chizihn/polkapay", // Frontend repo URL
  },
  {
    title: "Nelo - Crypto banking",
    period: "2025",
    description:
      "A modern Next.js application for seamless crypto payments and virtual card services through WhatsApp integration.",
    tech: ["Next.js", "Typescript", "Framer motion"],
    tags: ["Frontend"],
    image: "/images/nelo-shot.png",
    website: true,
    websiteUrl: "https://nelo-base.vercel.app",
    github: true,
    frontendGithubUrl: "https://github.com/Chizihn/nelo-frontend", // Frontend repo URL
  },
  {
    title: "Glubon",
    period: "2025",
    description: "A proptech saas",
    tech: [
      "React native",
      "Expo",
      "Zustand",
      "Apollo",
      "Typescript",
      "Node.js",
      "Express",
      "AWS",
      "Redis",
      "Paystack",
      "PostgreSQL",
      "Prisma",
      "Nativewind",
      "Shadcn UI",
      "GraphQL",
    ],
    tags: [],
    image: "/images/glubon-shot.png",
    website: false,
    websiteUrl: "",
    github: false,
  },
  {
    title: "Tanscrow - Secure Escrow Platform",
    period: "2024",
    description:
      "Tanscrow protects both buyers and sellers with secure escrow payments, ensuring your money is released only when you're 100% satisfied. Features multi-payment gateway support and real-time transaction tracking with Redis caching for optimal performance.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "AWS",
      "TailwindCSS",
      "Shadcn UI",
      "GraphQL",
      "Paystack",
      "Flutterwave",
      "Redis",
    ],
    tags: ["Frontend", "Backend"],
    image: "/images/tanscrow-web.png",
    website: true,
    websiteUrl: "https://tanscrow.vercel.app",
    github: true,
    frontendGithubUrl: "https://github.com/Chizihn/tanscrow", // Frontend repo URL
    backendGithubUrl: "https://github.com/Chizihn/tanscrow-api", // Backend repo URL
  },

  {
    title: "Tanscrow Mobile App",
    period: "2024",
    description:
      "Mobile companion app for the Tanscrow escrow platform, built with React Native and Expo. Provides secure mobile access to escrow services with the same robust backend architecture ensuring seamless cross-platform synchronization.",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "GraphQL", "Redis"],
    tags: ["Mobile"],
    image: "/api/placeholder/400/250",
    website: false,
    websiteUrl: "https://tanscrow.vercel.app",
    github: true,
    githubUrl: "https://github.com/Chizihn/tanscrow-app", // Mobile repo URL
  },

  {
    title: "SUI Attestation Service (SAS)",
    period: "2024",
    description:
      "A decentralized attestation service built for the SUI hackathon. Features zkLogin integration with Google authentication for secure, privacy-preserving identity verification on the SUI blockchain. Provides a seamless user experience for creating and managing digital attestations.",
    tech: [
      "SUI Blockchain",
      "ZkLogin",
      "Google Auth",
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
    ],
    tags: ["Frontend", "Blockchain"],
    image: "/images/sas.png",
    website: true,
    websiteUrl: "https://dexichain.vercel.app/",
    github: true,
    githubUrl: "https://github.com/Chizihn/tanscrow-app", // Frontend repo URL
  },
  {
    title: "Lorena Multipurpose Store",
    period: "2024",
    description:
      "A full-stack e-commerce platform featuring seamless shopping experiences with integrated Paystack payment processing. Built with a robust REST API backend and modern frontend technologies for optimal performance and user experience.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "REST API",
      "Paystack",
      "React",
      "Next.js",
      "TailwindCSS",
      "Shadcn UI",
      "MongoDB",
    ],
    tags: ["Frontend", "Backend"],
    image: "/images/lorena-store.png",
    website: true,
    websiteUrl: "https://lorena-store.vercel.app",
    github: true,
    frontendGithubUrl: "https://github.com/Chizihn/lorena-jewelry-frontend", // Frontend repo URL
    backendGithubUrl: "https://github.com/Chizihn/lorena-store-api", // Backend repo URL
  },

  {
    title: "Scriim - Panic Button Mobile App",
    period: "2024",
    description:
      "A React Native safety application built with Expo featuring an emergency panic button for instant help requests. Powered by a robust Node.js backend with Express REST API architecture for real-time emergency messages and location tracking.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "REST API",
    ],
    tags: ["Mobile", "Backend"],
    image: "/api/placeholder/400/250",
    website: false,
    websiteUrl: "https://scriim-web.vercel.app",
    github: true,
    mobileGithubUrl: "https://github.com/Chizihn/scriim-app", // Mobile repo URL
    backendGithubUrl: "https://github.com/Chizihn/scriim-api", // Backend repo URL
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="text-center mb-12">
        <span className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium">
          My Projects
        </span>
        <h2 className="text-4xl font-bold mt-6 mb-4">
          Check out my latest work
        </h2>
        <p className="text-foreground/70 text-lg">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web
          <br />
          applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-foreground/5 rounded-lg overflow-hidden hover:bg-foreground/10 transition-colors"
          >
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
              {project.image !== "/api/placeholder/400/250" ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-background text-lg font-semibold">
                  Project Preview
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-foreground/10 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.website && (
                  <Link
                    href={project.websiteUrl}
                    target="_blank"
                    className="flex items-center space-x-2 px-3 py-2 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View</span>
                  </Link>
                )}

                {project.github && (
                  <>
                    {/* Show Frontend button if has frontendGithubUrl */}
                    {project.frontendGithubUrl && (
                      <Link
                        href={project.frontendGithubUrl}
                        target="_blank"
                        className="flex items-center space-x-2 px-3 py-2 border border-foreground/20 rounded-md hover:bg-foreground/10 transition-colors"
                      >
                        <Github size={16} />
                        <span>Frontend</span>
                      </Link>
                    )}

                    {/* Show Backend button if has backendGithubUrl */}
                    {project.backendGithubUrl && (
                      <Link
                        href={project.backendGithubUrl}
                        target="_blank"
                        className="flex items-center space-x-2 px-3 py-2 border border-foreground/20 rounded-md hover:bg-foreground/10 transition-colors"
                      >
                        <Github size={16} />
                        <span>Backend</span>
                      </Link>
                    )}

                    {/* Show Mobile button if has mobileGithubUrl */}
                    {project.mobileGithubUrl && (
                      <Link
                        href={project.mobileGithubUrl}
                        target="_blank"
                        className="flex items-center space-x-2 px-4 py-2 border border-foreground/20 rounded-md hover:bg-foreground/10 transition-colors"
                      >
                        <Github size={16} />
                        <span>Mobile</span>
                      </Link>
                    )}

                    {/* Show generic Source button if has githubUrl */}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center space-x-2 px-4 py-2 border border-foreground/20 rounded-md hover:bg-foreground/10 transition-colors"
                      >
                        <Github size={16} />
                        <span>Source</span>
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

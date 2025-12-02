"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="space-y-6">
          <p className="text-foreground/70 leading-relaxed text-lg">
            I&apos;m a fullstack software engineer with expertise in building
            scalable, high-performance web and mobile applications. I
            transformed my career from a developer mindset to a software
            engineer&apos;s perspective, focusing on architecting end-to-end
            solutions rather than just writing code.
          </p>
          <p className="text-foreground/70 leading-relaxed text-lg">
            My journey spans across the entire software development
            lifecycle—from designing robust architectures and optimizing
            performance to implementing Web3 solutions and building resilient
            infrastructure. I specialize in React, Next.js, React Native,
            Node.js, and TypeScript, with hands-on experience in blockchain
            integration, real-time systems, and payment processing.
          </p>
          <p className="text-foreground/70 leading-relaxed text-lg">
            Whether building fintech platforms, Web3 applications, or
            enterprise-grade web applications, I focus on creating solutions
            that solve real problems, scale efficiently, and deliver exceptional
            user experiences. I&apos;m passionate about staying current with
            industry trends and continuously improving my craft.
          </p>

          <p className="text-foreground/70 leading-relaxed text-lg">
            I am currently available for freelance, contract, and full-time
            opportunities. Typical engagements include MVP development, SaaS and
            fintech platforms, payments integration, Web3 proofs-of-concept, and
            technical leadership for early-stage startups. If you need a
            developer who can ship production-ready features quickly, let&apos;s
            talk.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

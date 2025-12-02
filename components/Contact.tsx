"use client";

import { motion } from "framer-motion";
import { Mail, Send, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium">
          Get In Touch
        </span>

        <h2 className="text-4xl font-bold mt-6 mb-6">
          Let&apos;s Work Together
        </h2>

        <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
          Whether you have a project in mind, want to discuss opportunities, or
          just want to chat about tech—I&apos;d love to hear from you.
          Let&apos;s build something amazing together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-foreground/5 rounded-lg p-8 hover:bg-foreground/10 transition-colors"
          >
            <Mail className="text-blue-600 mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Send me an Email</h3>
            <p className="text-foreground/70 mb-4 text-sm">
              The best way to reach me for detailed conversations
            </p>
            <a
              href="mailto:chizihn@gmail.com?subject=Let's%20collaborate&body=Hi%20Chizi%2C%0A%0AI%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <Send size={16} />
              <span>Email Me</span>
            </a>
          </motion.div>

          {/* Twitter DM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-foreground/5 rounded-lg p-8 hover:bg-foreground/10 transition-colors"
          >
            <MessageSquare className="text-blue-400 mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">DM on X (Twitter)</h3>
            <p className="text-foreground/70 mb-4 text-sm">
              Quick questions? Shoot me a direct message
            </p>
            <Link
              href="https://x.com/chizihn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 border border-blue-400 hover:bg-blue-400/10 text-foreground rounded-lg font-medium transition-colors"
            >
              <MessageSquare size={16} />
              <span>Message Me</span>
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-foreground/10 pt-8">
          <p className="text-foreground/70 mb-4">
            Looking for specific services? Here's how I can help:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-foreground/60 max-w-2xl mx-auto">
            <div>
              <p className="font-semibold text-foreground mb-1">
                💼 Freelance Projects
              </p>
              <p>Web apps, mobile apps, full-stack development</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                🤝 Consulting
              </p>
              <p>Architecture design, technical guidance, code reviews</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                🚀 Collaboration
              </p>
              <p>Team augmentation, partnership opportunities</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

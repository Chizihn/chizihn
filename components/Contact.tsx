"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium">
          Contact
        </span>

        <h2 className="text-4xl font-bold mt-6 mb-4">Get in Touch</h2>

        <p className="text-foreground/70 text-lg mb-8">
          Want to chat? Just shoot me a dm{" "}
          <Link
            href="https://x.com/chizihn"
            target="_blank"
            className="text-foreground hover:underline"
          >
            with a direct question on X
          </Link>{" "}
          and I&apos;ll respond immediately I see it.
        </p>

        <div className="flex items-center justify-center space-x-2 mb-8">
          <Mail className="text-foreground" size={20} />
          <a
            href="mailto:chizihn@gmail.com"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            chizihn@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}

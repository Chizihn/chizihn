"use client";

import Link from "next/link";
import {
  Home,
  User,
  GraduationCap,
  Code,
  FolderOpen,
  Mail,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-4">
        <Link
          href="#home"
          className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
        >
          <Home size={20} className="text-foreground" />
        </Link>
        <Link
          href="#about"
          className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
        >
          <User size={20} className="text-foreground" />
        </Link>
        {/* <Link
          href="#work"
          className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
        >
          <Briefcase size={20} className="text-foreground" />
        </Link> */}
        <Link
          href="#education"
          className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
        >
          <GraduationCap size={20} className="text-foreground" />
        </Link>
        <Link
          href="#skills"
          className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
        >
          <Code size={20} className="text-foreground" />
        </Link>
        <Link
          href="#projects"
          className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
        >
          <FolderOpen size={20} className="text-foreground" />
        </Link>
        <Link
          href="#contact"
          className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
        >
          <Mail size={20} className="text-foreground" />
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

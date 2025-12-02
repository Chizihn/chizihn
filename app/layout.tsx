import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title:
    "Chizi Njoku - Fullstack Software Engineer | Web, Mobile & Blockchain Development",
  description:
    "Expert fullstack software engineer (React, Next.js, Node.js, React Native). Available for freelance, contract, and full-time opportunities — hire me for MVPs, SaaS, fintech, Web3, and production-ready applications.",
  keywords: [
    "fullstack engineer",
    "software developer",
    "Next.js developer",
    "React developer",
    "React Native developer",
    "Node.js developer",
    "TypeScript developer",
    "frontend developer",
    "backend developer",
    "freelance software engineer",
    "freelance React developer",
    "freelance Next.js developer",
    "contract React developer",
    "contract developer",
    "remote developer",
    "remote React developer",
    "hire React developer",
    "hire Next.js developer",
    "hire fullstack developer",
    "available for hire",
    "available for freelance",
    "available for contract work",
    "hire me",
    "hire developer for MVP",
    "startup developer",
    "technical co-founder",
    "SaaS developer",
    "fintech developer",
    "payments integration",
    "web3 developer",
    "blockchain developer",
    "crypto developer",
  ],
  authors: [{ name: "Chizi" }],
  creator: "Chizi",
  publisher: "Chizi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chizihn.vercel.app",
    siteName: "Chizi - Fullstack Software Engineer",
    title:
      "Chizi Njoku (chizihn) - Fullstack Software Engineer | Web & Mobile Development",
    description:
      "Expert fullstack software engineer available for hire (freelance, contract, full-time). I build scalable web and mobile applications, MVPs, and Web3 integrations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chizi Njoku (chizihn) - Fullstack Software Engineer",
    description:
      "Available for freelance, contract and full-time opportunities. Building scalable web & mobile apps with React, Next.js, Node.js.",
    creator: "@chizihn",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chizi",
    url: "https://chizihn.vercel.app",
    email: "chizihn@gmail.com",
    jobTitle: "Fullstack Software Engineer",
    knowsAbout: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "TypeScript",
      "Web Development",
      "Mobile Development",
      "Fronteend Development",
      "Backend development",
      "Blockchain development",
      "Smar contract",
      "Web developnent",
      "Web Design",
      "Full Stack Development",
    ],
    sameAs: [
      "https://github.com/Chizihn",
      "https://x.com/chizihn",
      "https://linkedin.com/in/chizihn",
      "https://medium.com/@chizihn",
      "https://dev.to/chizihn",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

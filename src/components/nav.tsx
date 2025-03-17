"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/button";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Portfolio
        </Link>
        <div className="flex items-center justify-center gap-4">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "primary" : "outline"}
              size="sm"
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
} 
"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import SkillsShowcase from "@/components/skills-showcase";
import Timeline from "@/components/timeline";
import { portfolioData } from "@/data/portfolio";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, GeeksforGeeksIcon, EducationSectionIcon, ExperienceSectionIcon } from "@/components/social-icons";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeToggle />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="hero" className="mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-400 shadow-lg">
                <Image
                  src={typeof window !== 'undefined'
                    ? window.location.hostname !== 'localhost'
                      ? '/portfolio-new/images/profile.jpg'
                      : '/images/profile.jpg'
                    : process.env.NODE_ENV === 'production'
                      ? '/portfolio-new/images/profile.jpg'
                      : '/images/profile.jpg'
                  }
                  alt="Profile"
                  width={500}
                  height={300}
                  priority
                  className="object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="absolute -bottom-2 -right-2 bg-indigo-500 dark:bg-indigo-400 rounded-full p-2 shadow-lg"
              >
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </motion.div>
            </motion.div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              {portfolioData.name}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              {portfolioData.title}
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Experience
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Skills
            </h2>
            <SkillsShowcase skills={portfolioData.skills} />
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <EducationSectionIcon className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />
              Education
            </h2>
            <Timeline
              items={portfolioData.education.map((edu) => ({
                title: edu.degree,
                subtitle: edu.institution,
                date: `${edu.startDate} - ${edu.endDate}`,
                description: [],
                score: edu.score,
                isEducation: true,
              }))}
            />
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <ExperienceSectionIcon className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />
              Experience
            </h2>
            <Timeline
              items={portfolioData.experiences.map((exp) => ({
                title: exp.position,
                subtitle: exp.company,
                date: `${exp.startDate} - ${exp.endDate || "Present"}`,
                description: exp.description,
                technologies: exp.technologies,
              }))}
            />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${portfolioData.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <EnvelopeIcon className="h-5 w-5" />
                Email Me
              </a>
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href={portfolioData.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <LeetCodeIcon className="h-5 w-5" />
                LeetCode
              </a>
              <a
                href={portfolioData.socialLinks.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <GeeksforGeeksIcon className="h-5 w-5" />
                GeeksforGeeks
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

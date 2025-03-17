"use client";

import { motion } from "framer-motion";

interface SkillsShowcaseProps {
  skills: string[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200 dark:border-gray-700" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white dark:bg-gray-900 px-4 text-sm text-gray-500 dark:text-gray-400">
          Technical Skills
        </span>
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {skill}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
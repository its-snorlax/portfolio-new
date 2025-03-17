"use client";

import { motion } from "framer-motion";
import { Achievement } from "@/data/portfolio";
import { EducationIcon } from "./social-icons";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description?: string[];
  technologies?: string[];
  achievements?: Achievement[];
  isEducation?: boolean;
  score?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Main Timeline line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 md:left-1/2 md:-ml-0.5" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row md:items-center"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 h-8 w-8 rounded-full bg-indigo-500 dark:bg-indigo-400 md:left-1/2 md:-ml-4 flex items-center justify-center">
              {item.isEducation ? (
                <EducationIcon className="h-4 w-4 text-white" />
              ) : (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>
            
            {/* Content */}
            <div className={cn(
              "w-[calc(100%-3rem)] rounded-xl p-6",
              "bg-gradient-to-br from-blue-50 via-violet-50 to-fuchsia-50 dark:from-blue-950 dark:via-violet-950 dark:to-fuchsia-950",
              "border border-gray-200 dark:border-gray-800",
              "shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] dark:shadow-[0_2px_10px_-3px_rgba(0,0,0,0.3)]",
              "hover:shadow-[0_8px_30px_-5px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_8px_30px_-5px_rgba(59,130,246,0.3)]",
              "transform hover:-translate-y-1",
              "transition-all duration-300 ease-out",
              "md:w-[45%]",
              index % 2 === 0 
                ? "ml-12 md:ml-auto md:mr-8" 
                : "ml-12 md:mr-auto md:ml-8"
            )}>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col items-center w-full">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
                        {item.title.includes("(") ? (
                          <>
                            {item.title.split("(")[0]}
                            <br />
                            ({item.title.split("(")[1]}
                          </>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-base font-medium text-gray-700 dark:text-gray-200 text-center">
                  {item.subtitle}
                </p>
              </div>
              {item.description && !item.isEducation && (
                <p className="mb-4 text-gray-700 dark:text-gray-200">
                  {item.description.join(" ")}
                </p>
              )}
              {item.technologies && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Achievements
                  </h4>
                  <div className="space-y-4">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                        <div className="flex-1">
                          <p className="text-sm text-gray-700 dark:text-gray-200">
                            {achievement.description}
                          </p>
                          {achievement.certificateUrl && (
                            <a
                              href={achievement.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                              View Certificate →
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
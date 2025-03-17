"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillsShowcaseProps {
  skills: string[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className={cn(
            "flex items-center justify-center rounded-xl p-5",
            "bg-gradient-to-br from-blue-50 via-violet-50 to-fuchsia-50 dark:from-blue-950 dark:via-violet-950 dark:to-fuchsia-950",
            "border border-blue-100/50 dark:border-blue-800/50",
            "shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] dark:shadow-[0_2px_10px_-3px_rgba(0,0,0,0.3)]",
            "hover:shadow-[0_8px_30px_-5px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_8px_30px_-5px_rgba(59,130,246,0.3)]",
            "hover:border-blue-300/50 dark:hover:border-blue-500/50",
            "hover:bg-gradient-to-br hover:from-blue-100 hover:via-violet-100 hover:to-fuchsia-100 dark:hover:from-blue-900/30 dark:hover:via-violet-900/30 dark:hover:to-fuchsia-900/30",
            "transform hover:-translate-y-1",
            "transition-all duration-300 ease-out",
            "backdrop-blur-sm",
            "relative overflow-hidden"
          )}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-violet-500/0 to-fuchsia-500/0 group-hover:from-blue-500/5 group-hover:via-violet-500/5 group-hover:to-fuchsia-500/5 transition-all duration-500" />
            <span className={cn(
              "text-sm font-semibold tracking-wide relative z-10",
              "bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 dark:from-blue-400 dark:via-violet-400 dark:to-fuchsia-400",
              "bg-clip-text text-transparent",
              "group-hover:from-blue-500 group-hover:via-violet-500 group-hover:to-fuchsia-500 dark:group-hover:from-blue-300 dark:group-hover:via-violet-300 dark:group-hover:to-fuchsia-300",
              "transition-all duration-300"
            )}>
              {skill}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 
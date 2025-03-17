export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Achievement {
  description: string;
  certificateUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  achievements?: Achievement[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  leetcode?: string;
  geeksforgeeks?: string;
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  score: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  imageUrl: string;
  skills: string[];
  experiences: Experience[];
  education: Education[];
  socialLinks: SocialLinks;
}

export const portfolioData: PortfolioData = {
  name: "Prayas Jain",
  title: "Senior Software Engineer",
  email: "p.jain3322@gmail.com",
  phone: "+91 9718495185",
  location: "Bangalore",
  about: "I am a Senior Software Engineer with expertise in building scalable and efficient backend systems. I have a strong foundation in data structures, algorithms, and system design. I am passionate about solving complex problems and creating innovative solutions.",
  imageUrl: "/images/profile.jpg",
  skills: [
    "Java",
    "Golang",
    "NodeJs",
    "Microservices",
    "REST APIs",
    "MySQL",
    "MongoDB",
    "Kafka",
    "Redis",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "System Design",
    "Data Structures",
    "Algorithms"
  ],
  experiences: [
    {
      position: "Senior Product Engineer",
      company: "Rapido",
      startDate: "Aug 2021",
      endDate: "Present",
      description: [
        "Optimized P99 performance under 50ms, reduced monthly cost by ₹15K, and decreased system replicas by 95%",
        "Implemented a new payment system that increased revenue by ₹90L/month",
        "Led a team of 5 engineers in developing and maintaining microservices"
      ],
      technologies: ["Java", "Golang", "NodeJs", "ReactJS", "ExpressJS", "Microservices", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes"],
      achievements: [
        {
          description: "Developed Recons scripts that boosted service functionality, cut operational costs by 20%, and significantly improved system performance. Awarded for excellence in 2022",
          certificateUrl: "https://drive.google.com/file/d/1P85zXM4g3FhBJpScqU2NsPHNyyN_D_9o/view"
        },
        {
          description: "Awarded for excellence in 2023 for outstanding contributions to system optimization and cost reduction",
          certificateUrl: "https://drive.google.com/file/d/11-fon-mR44d5CKCdnttaStfU1aEbUbZt/view"
        }
      ]
    },
    {
      position: "Product Engineer Intern",
      company: "Rapido",
      startDate: "Jan 2021",
      endDate: "Jul 2021",
      description: [
        "Improved code quality by 40% and reduced change time from 12-14 days to 2-3 days",
        "Standardized deployment process across all services"
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "Docker"]
    },
    {
      position: "Android Developer Intern",
      company: "Shoocal Ventures",
      startDate: "Jun 2020",
      endDate: "Dec 2020",
      description: [
        "Revamped 80% of UI/UX flows, increasing customer retention by 30 minutes",
        "Automated CI/CD pipeline, saving 10 hours/week"
      ],
      technologies: ["Java", "Android", "REST APIs", "Firebase", "Git"]
    }
  ],
  education: [
    {
      degree: "Bachelors in Technology (Computer Science)",
      institution: "Guru Tegh Bahadur Institute of Technology, GGSIPU",
      startDate: "Aug 2018",
      endDate: "Jul 2021",
      score: "8.2 CGPA"
    },
    {
      degree: "Diploma (Computer Science)",
      institution: "Guru Nanak Dev Institute of Technology, BTE",
      startDate: "Aug 2015",
      endDate: "Jul 2018",
      score: "73%"
    }
  ],
  socialLinks: {
    github: "https://github.com/its-snorlax",
    linkedin: "https://www.linkedin.com/in/prayas-jain/",
    leetcode: "https://leetcode.com/juniorjainsahab/",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/juniorjainsahab/"
  }
}; 
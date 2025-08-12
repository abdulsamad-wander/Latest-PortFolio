"use client";

import { Database, Globe, Server, Zap, Code, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "Django", "Python", "RESTful APIs"],
    databases: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
    tools: ["Git", "Docker", "AWS", "Vercel", "npm/yarn"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const skillCards = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: skills.frontend,
      color: "blue",
      delay: 0,
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: skills.backend,
      color: "green",
      delay: 0.1,
    },
    {
      title: "Database Management",
      icon: Database,
      skills: skills.databases,
      color: "purple",
      delay: 0.2,
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      skills: skills.tools,
      color: "orange",
      delay: 0.3,
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: "border-l-blue-600 dark:border-l-blue-400",
        icon: "text-blue-600 dark:text-blue-400",
        badge: "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-800/60",
      },
      green: {
        border: "border-l-green-600 dark:border-l-green-400",
        icon: "text-green-600 dark:text-green-400",
        badge: "bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-800/60",
      },
      purple: {
        border: "border-l-purple-600 dark:border-l-purple-400",
        icon: "text-purple-600 dark:text-purple-400",
        badge: "bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-800/60",
      },
      orange: {
        border: "border-l-orange-600 dark:border-l-orange-400",
        icon: "text-orange-600 dark:text-orange-400",
        badge: "bg-orange-50 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/50 dark:text-orange-300 dark:hover:bg-orange-800/60",
      },
    };
    return colors[color];
  };

  return (
    <section 
      className="py-16 max-w-6xl mx-auto overflow-hidden bg-white dark:bg-gray-900 px-4 md:px-10"
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div className="space-y-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <motion.div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Full Stack Developer
                </h3>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Passionate full-stack developer with expertise in building scalable web applications from concept to
                deployment. I specialize in modern JavaScript frameworks and have extensive experience with both SQL and
                NoSQL databases.
              </motion.p>

              <motion.p
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                My journey in software development has equipped me with a comprehensive understanding of the entire
                development lifecycle. I thrive on solving complex problems and creating efficient, user-friendly
                solutions that make a real impact.
              </motion.p>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Lightbulb className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  What I Bring to the Table:
                </h4>
              </div>

              <motion.ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {[
                  "End-to-end application development with modern frameworks",
                  "Database design and optimization across multiple platforms",
                  "RESTful API development and integration",
                  "Performance optimization and scalable architecture",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {skillCards.map((card, index) => {
              const colorClasses = getColorClasses(card.color);
              const IconComponent = card.icon;

              return (
                <motion.div
                  key={card.title}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`${colorClasses.border} hover:shadow-lg transition-all duration-300 group bg-white dark:bg-gray-800`}
                  >
                    <CardContent className="p-6">
                      <motion.div
                        className="flex items-center mb-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.5,
                          }}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${colorClasses.icon} mr-3 group-hover:scale-110 transition-transform duration-200`}
                          />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {card.title}
                        </h4>
                      </motion.div>

                      <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                        {card.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            variants={badgeVariants}
                            whileHover={{
                              scale: 1.1,
                              y: -2,
                              transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                              duration: 0.4,
                              delay: 1 + index * 0.1 + skillIndex * 0.05,
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className={`${colorClasses.badge} cursor-pointer transition-all duration-200`}
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 opacity-10 dark:opacity-[0.15]"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <motion.h3
            className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            Ready to Build Something Amazing?
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            I'm always excited to work on new projects and collaborate with fellow developers. Let's discuss how we can
            bring your ideas to life with cutting-edge technology.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                initial={false}
              />
              <NavLink to={'/projects'}><span className="relative z-10">View My Projects</span> </NavLink>
            </motion.button>

            <motion.button
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300"
                initial={false}
              />
             <NavLink to={'/contact'}><span className="relative z-10">Get In Touch</span> </NavLink> 
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
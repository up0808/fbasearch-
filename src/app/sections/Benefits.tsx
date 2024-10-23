"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Zap, Users } from "lucide-react";

export default function Benefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: Code,
      title: "Innovative Solutions",
      description:
        "Crafting cutting-edge digital experiences that push boundaries.",
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description:
        "Accelerating project timelines without compromising on quality.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Creating interfaces that delight and engage your audience.",
    },
  ];

  return (
    <section className="py-16  transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-6">
          Elevate Your Digital Presence
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          Unlock the full potential of your web projects
        </p>

        <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg p-6 flex-1 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
                hoveredIndex === index ? "scale-105" : ""
              }`}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div>
                <benefit.icon className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
              <motion.div
                className="mt-4 h-1 bg-teal-500 rounded"
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

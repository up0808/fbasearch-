"use client";

import { Button } from "@/components/ui/button";
import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
import { Sparkles, Search, Zap } from "lucide-react";

export function Hero({ id }: AnimatedProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 dark:from-cyan-500/20 dark:via-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-l from-blue-500/30 via-cyan-500/30 to-purple-500/30 dark:from-blue-500/20 dark:via-cyan-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-slow-spin-reverse"></div>
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent dark:from-cyan-500/10 dark:via-purple-500/10 rounded-full blur-3xl animate-slow-spin-reverse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 via-blue-500/20 to-transparent dark:from-purple-500/10 dark:via-blue-500/10 rounded-full blur-3xl animate-slow-spin delay-75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 rounded-full border border-cyan-200 dark:border-cyan-800 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Powered by Google Gemini AI & Real-Time Web Search
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="relative">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-100">
              Intelligent Search
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 dark:from-cyan-400 dark:via-purple-400 dark:to-blue-400">
              Powered by AI
            </span>
          </motion.h1>
          
          {/* Animated Underline */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          ></motion.div>
        </div>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto mt-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Get instant, comprehensive answers from the web with{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">
            AI-powered search
          </span>
          . Ask questions naturally, receive cited summaries, and explore topics
          through intelligent conversation.
        </motion.p>

        {/* Features List */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-medium">Real-Time Web Search</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium">AI Summarization</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium">Source Citations</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 hover:from-cyan-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Search className="w-5 h-5 mr-2" />
              Start Searching Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <a
                href="https://github.com/up0808/FbaDevAiSearch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-white dark:border-slate-800"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white dark:border-slate-800"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-slate-800"></div>
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            <strong className="text-slate-900 dark:text-slate-100">10,000+</strong> researchers and professionals trust FbaDevAiSearch
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Scroll to explore
          </span>
          <svg
            className="w-6 h-6 text-slate-400 dark:text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

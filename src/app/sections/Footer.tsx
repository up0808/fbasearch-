"use client";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Feel free to reach out if you have any questions or inquiries.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
            <a
              href="mailto:anibal.alpizar14@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/anibalalpizar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/anibalalpizar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              GitHub
            </a>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

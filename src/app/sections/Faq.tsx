"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqs: FAQItemProps[] = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Nulla facilisi. Donec id elit non mi porta gravida at eget metus.",
  },
  {
    question: "Quis nostrud exercitation ullamco laboris nisi ut aliquip?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Ut enim ad minim veniam, quis nostrud?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Cillum dolore eu fugiat nulla pariatur?",
    answer:
      "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
  },
];

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 dark:border-gray-700 last:border-0">
      <button
        className="flex items-center justify-between w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {question}
        </h3>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-500 dark:text-gray-300 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about the services I provide
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

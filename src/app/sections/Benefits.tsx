import { Code, Palette, Smartphone, Globe } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitProps) {
  return (
    <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-md hover:shadow-lg hover:scale-[1.02] transition-shadow border border-slate-200 dark:border-slate-700 group-hover:opacity-100">
      <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}

export function Benefits() {
  const benefits = [
    {
      icon: <Code className="w-6 h-6 text-slate-900 dark:text-white" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code that follows best practices and industry standards.",
    },
    {
      icon: <Palette className="w-6 h-6 text-slate-900 dark:text-white" />,
      title: "Modern Design",
      description:
        "Creating beautiful, intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-slate-900 dark:text-white" />,
      title: "Responsive",
      description:
        "Building applications that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <Globe className="w-6 h-6 text-slate-900 dark:text-white" />,
      title: "Accessibility",
      description:
        "Ensuring digital experiences are inclusive and accessible to everyone.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Choose Me?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Bringing together technical expertise and design sensibility
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-emerald-500/30 dark:from-blue-500/20 dark:via-cyan-500/20 dark:to-emerald-500/20 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-l from-emerald-500/30 via-blue-500/30 to-cyan-500/30 dark:from-emerald-500/20 dark:via-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-slow-spin-reverse"></div>
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-transparent dark:from-blue-500/10 dark:via-cyan-500/10 rounded-full blur-3xl animate-slow-spin-reverse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-bl from-emerald-500/20 via-cyan-500/20 to-transparent dark:from-emerald-500/10 dark:via-cyan-500/10 rounded-full blur-3xl animate-slow-spin delay-75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('/noise.png')]"></div>
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="relative">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 pb-2">
            Design engineer
            <br />
            and builder
          </h1>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-foreground/30 to-transparent rounded-full"></div>
        </div>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto mt-12">
          I&apos;m Aníbal, a software engineer. I design and build digital
          products and experiences for the web. I specialize in front-end
          development, user interface design, and interaction design.
        </p>

        <div className="flex items-center justify-center gap-4 relative">
          <Button className="bg-gradient-to-r from-foreground via-foreground to-foreground/90 text-background hover:opacity-90 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-foreground/10">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-foreground/5 backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

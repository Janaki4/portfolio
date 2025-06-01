import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
            <div className="container mx-auto text-center">
                <div className="animate-fade-in">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                        Engineer by Trade.
                        <br />
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        I build scalable, test-driven backend systems and dynamic UIs using Node.js, TypeScript, React, and a touch of Redis-powered
                        real-time magic.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            onClick={() => scrollToSection("projects")}
                            className="group glow-effect transition-all duration-300 hover:scale-105"
                        >
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection("contact")}
                            className="group glow-effect transition-all duration-300 hover:scale-105"
                        >
                            Contact Me
                            <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

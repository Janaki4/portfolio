
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const technologies = [
    { name: 'Node.js', color: 'bg-blue-500' },
    { name: 'React', color: 'bg-green-500' },
    { name: 'Next', color: 'bg-purple-500' },
    { name: 'Docker', color: 'bg-blue-600' },
    { name: 'MongoDB', color: 'bg-emerald-500' },
    { name: 'AWS', color: 'bg-cyan-500' },
    { name: 'PostgreSQL', color: 'bg-blue-500' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
Hi, I’m Janakiraman N, a passionate Full Stack Developer with 3.5+ years of experience building scalable, production-grade web applications. I specialize in Node.js, TypeScript, MongoDB, PostgreSQL, React.js, and AWS, with a strong foundation in backend architecture, DevOps, and real-time systems.

I've developed systems used by 500K+ users, including a large-scale gaming platform and a fashion AR product. From designing robust APIs and database schemas to deploying cloud-native applications with CI/CD pipelines, I focus on delivering performance, reliability, and clean code.

I take pride in writing maintainable code, building efficient systems, and continuously learning. Whether it’s solving a complex backend problem, improving system performance, or collaborating across teams — I bring energy, accountability, and a product mindset to the table.
          </p>
        </div>

        <div className="mb-12 animate-scale-in">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Tools I vibe with:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group animate-fade-in glow-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="px-4 py-2 hover:scale-110 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

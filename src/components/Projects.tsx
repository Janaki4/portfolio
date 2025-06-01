import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Terra Gaming App",
            description: "A scalable gaming platform with 500K+ users, featuring real-time leaderboards built with Redis and MongoDB.",
            technologies: ["Node.js", "Redis", "MongoDB", "AWS", "React.js"],
            image: "https://janakiraman1.s3.ap-south-1.amazonaws.com/744996-26bb1c97f5361a51e73cbdaeb720b3b7ef76f58d.jpg",
            demoLink: "https://play.google.com/store/apps/details?id=com.terrabyte.terra&hl=en_IN",
            codeLink: "",
        },
        {
            title: "Mirrar Fashion AR Platform",
            description: "Backend services and CI/CD pipelines for a B2B fashion-tech product with AR integrations.",
            technologies: ["Node.js", "PostgreSQL", "Docker", "AWS", "CI/CD"],
            image: "https://janakiraman1.s3.ap-south-1.amazonaws.com/01.06.2025_20.39.28_REC.png",
            demoLink: "https://products.mirrar.com/",
            codeLink: "",
        },
        {
            title: "B2B-Team and Project Management SAAS",
            description: "Production ready Team-Project management application.",
            technologies: ["Node.js", "React", "MongoDB", "AWS"],
            image: "https://janakiraman1.s3.ap-south-1.amazonaws.com/01.06.2025_21.02.13_REC.png",
            demoLink: "",
            codeLink: "https://github.com/Janaki4/Team-Management",
        },
    ];

    const handleProjectAction = (action: string, link: string) => {
        console.log(`${action} clicked for ${link}`);
        window.open(link, "_blank");
    };

    return (
        <section id="projects" className="py-20 px-4 bg-muted/30 relative z-10">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.title} className="animate-fade-in glow-effect" style={{ animationDelay: `${index * 200}ms` }}>
                            <Card className="h-full group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50 relative z-20">
                                <CardHeader>
                                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                                        <span className="text-4xl opacity-80 hover:opacity-100">
                                            <img src={project.image} alt={project.title} />
                                        </span>
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        {project.codeLink !== "" && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex-1 relative z-30"
                                                onClick={() => handleProjectAction("Code", project.codeLink)}
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </Button>
                                        )}
                                        {project.demoLink !== "" && (
                                            <Button
                                                size="sm"
                                                className="flex-1 relative z-30"
                                                onClick={() => handleProjectAction("Demo", project.demoLink)}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Demo
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

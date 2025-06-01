
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const res = await fetch('https://formspree.io/f/xkgrddlp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error sending message",
          description: "Something went wrong.",
        });
      }
    } catch {
      toast({
        title: "Error sending message",
        description: "Network error. Try again.",
      });
    }

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Clicked on ${platform}`);
    // Add your actual links here
    if (platform === 'github') {
      window.open('https://github.com/Janaki4', '_blank');
    } else if (platform === 'linkedin') {
      window.open('https://www.linkedin.com/in/janakiraman-n-62b83a178/', '_blank');
    } else if (platform === 'email') {
      window.location.href = 'mailto:janakiraman781@gmail.com';
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Got a question or want to work together? Shoot me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* <Card className="animate-scale-in glow-effect relative z-20">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 relative z-30">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 relative z-40"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 relative z-40"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 relative z-40"
                    placeholder="Enter your message"
                  />
                </div>
                <Button type="submit" className="w-full group relative z-40">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}

          <div className="animate-slide-up">
            <Card className="h-full glow-effect relative z-20">
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
                <CardDescription>
                  Find me on these platforms or reach out directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <button
                  onClick={() => handleSocialClick('github')}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors w-full text-left cursor-pointer relative z-30"
                >
                  <FaGithub className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@janaki4</p>
                  </div>
                </button>
                <button
                  onClick={() => handleSocialClick('linkedin')}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors w-full text-left cursor-pointer relative z-30"
                >
                  <FaLinkedinIn className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Janakiraman</p>
                  </div>
                </button>
                <button
                  onClick={() => handleSocialClick('email')}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors w-full text-left cursor-pointer relative z-30"
                >
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">janakiraman781@gmail.com</p>
                  </div>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

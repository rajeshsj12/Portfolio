import { useState } from "react";
import { Phone, Mail, MapPin, Linkedin, Github, Code, Target, TrendingUp, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 87543 68976",
      href: "tel:+918754368976",
    },
    {
      icon: Mail,
      label: "Email",
      value: "rajeshsj126@gmail.com",
      href: "mailto:rajeshsj126@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "K.K Nagar, Chennai",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rajeshsj12",
      href: "https://linkedin.com/in/rajeshsj12",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rajeshsj12",
      href: "https://github.com/rajeshsj12",
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/u/rajeshsj12",
      href: "https://leetcode.com/u/rajeshsj12/",
    },
  ];

  const careerObjectives = [
    {
      icon: Target,
      text: "Seeking Data Analyst roles in IT-centric environments",
    },
    {
      icon: TrendingUp,
      text: "Focus on data-driven decision making",
    },
    {
      icon: Lightbulb,
      text: "Driving business growth through analytics",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-slate">
            Ready to bring data-driven insights to your organization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate hover:text-primary transition-colors"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-slate">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Card className="mt-8">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">Career Objectives</h4>
                <ul className="space-y-2">
                  {careerObjectives.map((objective, index) => (
                    <li key={index} className="flex items-center text-slate">
                      <objective.icon className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                      {objective.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john.doe@company.com"
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your Company Name"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job-opportunity">Job Opportunity</SelectItem>
                      <SelectItem value="freelance-project">Freelance Project</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your project or opportunity..."
                    className="mt-2 resize-none"
                    rows={4}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

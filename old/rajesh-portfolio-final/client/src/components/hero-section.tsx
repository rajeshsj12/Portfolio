import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Results-Driven
              <span className="block text-yellow-300">Data Analyst</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Analytical professional with strong passion for Data Analytics. 
              Leveraging 4.5 years of operations experience with proven problem-solving skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-primary hover:bg-blue-50 transition-colors"
                size="lg"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => scrollToSection("experience")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
                size="lg"
              >
                View Experience
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+918754368976"
                className="flex items-center text-blue-100 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 87543 68976
              </a>
              <a
                href="mailto:rajeshsj126@gmail.com"
                className="flex items-center text-blue-100 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                rajeshsj126@gmail.com
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">4.5+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">30%</div>
                  <div className="text-sm text-blue-100">Space Optimization</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">Power BI</div>
                  <div className="text-sm text-blue-100">Expert Level</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">MBA</div>
                  <div className="text-sm text-blue-100">Business Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

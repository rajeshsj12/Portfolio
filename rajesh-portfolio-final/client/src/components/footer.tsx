import { Phone, Mail, Linkedin, Github, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Rajesh S</div>
          <p className="text-gray-400 mb-6">Results-Driven Data Analyst | Python, SQL, Power BI Expert</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="tel:+918754368976"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="mailto:rajeshsj126@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/rajeshsj12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/rajeshsj12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/u/rajeshsj12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LeetCode"
            >
              <Code className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Rajesh S. Professional Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

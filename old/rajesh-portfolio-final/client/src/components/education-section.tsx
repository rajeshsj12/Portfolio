import { Book, BarChart3, Database, Brain, Calculator, Cog } from "lucide-react";

export default function EducationSection() {
  const educationItems = [
    {
      title: "Data Analytics Course",
      institution: "SLA Institute, KK Nagar, Chennai",
      period: "2024 - Completed",
      status: "Completed",
      statusColor: "bg-success text-white",
      dotColor: "bg-success",
      description: "Intensive curriculum focused on Python, Pandas, SQL, and Power BI for comprehensive data analysis.",
      highlights: [
        { icon: Book, text: "Data Structures & Statistical Methods" },
        { icon: BarChart3, text: "Business Analytics & Predictive Modeling" },
        { icon: Database, text: "Data Cleaning & Transformation" },
      ],
      side: "left",
    },
    {
      title: "MBA in Operations & Business Analytics",
      institution: "Anna University Regional Campus, Tirunelveli",
      period: "2021 - 2023",
      status: "Completed",
      statusColor: "bg-success text-white",
      dotColor: "bg-success",
      description: "CGPA: 7.93 | Strong foundation in operations management and business analytics methodologies.",
      highlights: [
        { icon: Cog, text: "Operations Management Principles" },
        { icon: BarChart3, text: "Quantitative Decision-Making Techniques" },
        { icon: Cog, text: "Process Improvement Methodologies" },
      ],
      side: "right",
    },
    {
      title: "BE in Mechanical Engineering",
      institution: "University VOC College of Engineering, Tuticorin",
      period: "2013 - 2017",
      status: "Completed",
      statusColor: "bg-slate text-white",
      dotColor: "bg-slate",
      description: "CGPA: 6.7 | Built solid engineering foundation fostering logical reasoning and problem-solving skills.",
      highlights: [
        { icon: Brain, text: "Logical Reasoning & Problem-Solving" },
        { icon: Calculator, text: "Mathematical & Analytical Thinking" },
        { icon: Cog, text: "Systems Design & Analysis" },
      ],
      side: "left",
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Education & Learning</h2>
          <p className="text-xl text-slate">
            Continuous learning journey from engineering to data analytics mastery
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>
          
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Left side content */}
                <div className={`lg:w-1/2 ${item.side === "left" ? "lg:pr-8 lg:text-right" : "lg:pr-8"} ${item.side === "right" ? "order-2 lg:pl-8" : ""}`}>
                  {item.side === "left" && (
                    <div className={`bg-card p-6 rounded-xl shadow-sm ${index === 0 ? "border-2 border-primary" : "border border-border"}`}>
                      <div className={`flex items-center justify-between mb-4 ${item.side === "left" ? "lg:flex-row-reverse" : ""}`}>
                        <div className={`${item.statusColor} px-3 py-1 rounded-full text-sm font-medium`}>
                          {item.status}
                        </div>
                        <div className="text-slate text-sm">{item.period}</div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className={`${index === 0 ? "text-primary" : index === 1 ? "text-success" : "text-slate"} font-semibold mb-3`}>
                        {item.institution}
                      </p>
                      <p className="text-slate mb-4">{item.description}</p>
                      <div className="space-y-2">
                        {item.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="text-sm text-slate flex items-center">
                            <highlight.icon className="h-4 w-4 mr-2" />
                            {highlight.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${item.dotColor} rounded-full border-4 border-background hidden lg:block`}></div>

                {/* Right side content */}
                <div className={`lg:w-1/2 ${item.side === "right" ? "lg:pl-8" : "lg:pl-8"} ${item.side === "left" ? "order-2" : ""}`}>
                  {item.side === "right" && (
                    <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`${item.statusColor} px-3 py-1 rounded-full text-sm font-medium`}>
                          {item.status}
                        </div>
                        <div className="text-slate text-sm">{item.period}</div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className={`${index === 1 ? "text-success" : "text-slate"} font-semibold mb-3`}>
                        {item.institution}
                      </p>
                      <p className="text-slate mb-4">{item.description}</p>
                      <div className="space-y-2">
                        {item.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="text-sm text-slate flex items-center">
                            <highlight.icon className="h-4 w-4 mr-2" />
                            {highlight.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile layout */}
                <div className="lg:hidden w-full">
                  <div className={`bg-card p-6 rounded-xl shadow-sm ${index === 0 ? "border-2 border-primary" : "border border-border"}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${item.statusColor} px-3 py-1 rounded-full text-sm font-medium`}>
                        {item.status}
                      </div>
                      <div className="text-slate text-sm">{item.period}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className={`${index === 0 ? "text-primary" : index === 1 ? "text-success" : "text-slate"} font-semibold mb-3`}>
                      {item.institution}
                    </p>
                    <p className="text-slate mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="text-sm text-slate flex items-center">
                          <highlight.icon className="h-4 w-4 mr-2" />
                          {highlight.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

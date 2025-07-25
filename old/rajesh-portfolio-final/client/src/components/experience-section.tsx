import { BarChart3, Users, Cog, DollarSign, Eye, Clock, Search, PieChart, Calculator } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Executive",
      company: "Reliance Retail Ltd, Chennai",
      period: "November 2023 – April 2025",
      status: "Current Role",
      statusColor: "primary",
      borderColor: "border-primary",
      achievements: [
        {
          icon: BarChart3,
          text: "Analyzed operational metrics to identify bottlenecks and implement efficiency improvements",
        },
        {
          icon: Cog,
          text: "Leveraged performance data to optimize JioMart order picking processes",
        },
        {
          icon: Users,
          text: "Analyzed customer feedback to inform operational adjustments and enhance satisfaction",
        },
      ],
      responsibilities: [
        { icon: BarChart3, text: "Customer Service & Sales Analytics" },
        { icon: Cog, text: "Inventory Management Optimization" },
        { icon: Users, text: "Performance Data Analysis" },
      ],
    },
    {
      title: "Team Lead / Operations Analyst",
      company: "Nova Carbons Pvt Ltd., Tirunelveli",
      period: "June 2018 – June 2021",
      status: "3 Years",
      statusColor: "slate",
      borderColor: "border-border",
      achievements: [
        {
          icon: Users,
          text: "Managed team of 14 employees for one year",
        },
        {
          icon: Cog,
          text: "Led 2 major process improvement projects",
        },
        {
          icon: BarChart3,
          text: "Developed SOPs, FMEA, and process documentation",
        },
      ],
      responsibilities: [
        { icon: DollarSign, text: "Cost Analysis & OPEX Optimization" },
        { icon: BarChart3, text: "Production & Defect Rate Analysis" },
        { icon: Cog, text: "Resource Utilization Optimization" },
      ],
    },
    {
      title: "Data & Process Analyst Intern",
      company: "Bosch Ltd., Gangaikondan Plant",
      period: "1 February 2023 – 10 May 2023 (3.5 months)",
      status: "Analytics Focus",
      statusColor: "success",
      borderColor: "border-success",
      project: {
        title: "Improving Operational Efficiency in Warehouse",
        description: "Comprehensive warehouse optimization project leveraging data analytics tools to enhance operational efficiency and cost control.",
      },
      achievements: [
        {
          icon: BarChart3,
          text: "Built Power BI dashboard using Python and SQL for real-time stock levels",
        },
        {
          icon: Eye,
          text: "Identified 30% underutilized space enabling targeted manufacturing orders",
        },
        {
          icon: Clock,
          text: "Executed liquidation plan for aging stock with management approval",
        },
      ],
      responsibilities: [
        { icon: Search, text: "Warehouse efficiency analysis and optimization" },
        { icon: PieChart, text: "Oracle database integration for real-time visibility" },
        { icon: Calculator, text: "Putaway lead time analysis and process improvement" },
      ],
    },
  ];

  const getStatusColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "success":
        return "bg-success/10 text-success";
      case "slate":
        return "bg-slate/10 text-slate";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-slate">
            Data-driven achievements across operations and analytics roles
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              <div className={`${index === 0 ? "gradient-primary p-1" : index === 2 ? "gradient-success p-1" : ""} rounded-2xl`}>
                <div className={`bg-card p-8 rounded-2xl ${index === 0 || index === 2 ? "" : `border-2 ${experience.borderColor}`}`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{experience.title}</h3>
                      <p className={`${index === 0 ? "text-primary" : index === 2 ? "text-success" : "text-primary"} font-semibold text-lg`}>
                        {experience.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-slate font-medium">{experience.period}</div>
                      <div className={`${getStatusColorClasses(experience.statusColor)} px-3 py-1 rounded-full text-sm inline-block mt-2`}>
                        {experience.status}
                      </div>
                    </div>
                  </div>
                  
                  {experience.project && (
                    <div className="bg-slate-light p-6 rounded-xl mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Cog className="h-5 w-5 text-success mr-2" />
                        Project: {experience.project.title}
                      </h4>
                      <p className="text-slate">
                        {experience.project.description}
                      </p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        {index === 2 ? "Technical Deliverables" : "Key Achievements"}
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <achievement.icon className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                            <span className="text-slate">{achievement.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        {index === 2 ? "Business Impact" : index === 1 ? "Analytical Contributions" : "Core Responsibilities"}
                      </h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <responsibility.icon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-slate">{responsibility.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

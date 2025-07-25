import { useState, useEffect, useRef } from "react";
import { TrendingUp, Settings, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: typeof TrendingUp;
  color: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Data Analysis & BI",
      icon: TrendingUp,
      color: "primary",
      skills: [
        { name: "Python (Pandas, Matplotlib, Seaborn)", level: 85 },
        { name: "SQL (Joins, Window Functions, CTE)", level: 90 },
        { name: "Power BI & Tableau", level: 85 },
        { name: "Statistical Analysis & Predictive Modeling", level: 75 },
      ],
    },
    {
      title: "Operations & Management",
      icon: Settings,
      color: "success",
      skills: [
        { name: "Process Optimization", level: 90 },
        { name: "Team Leadership", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Inventory Management", level: 85 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "warning",
      skills: [
        { name: "SAP ERP", level: 75 },
        { name: "Advanced Excel", level: 90 },
        { name: "Data Visualization", level: 70 },
        { name: "Business Intelligence", level: 75 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          iconBg: "bg-primary/10",
          iconText: "text-primary",
          bar: "bg-primary",
        };
      case "success":
        return {
          iconBg: "bg-success/10",
          iconText: "text-success",
          bar: "bg-success",
        };
      case "warning":
        return {
          iconBg: "bg-warning/10",
          iconText: "text-warning",
          bar: "bg-warning",
        };
      default:
        return {
          iconBg: "bg-primary/10",
          iconText: "text-primary",
          bar: "bg-primary",
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-light" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Skills & Competencies</h2>
          <p className="text-xl text-slate">
            Technical and analytical skills for modern data-driven organizations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);

            return (
              <div key={categoryIndex} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${colorClasses.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-8 w-8 ${colorClasses.iconText}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-slate">{skill.level}%</span>
                      </div>
                      <div className="bg-muted rounded-full h-2">
                        <div
                          className={`${colorClasses.bar} h-2 rounded-full transition-all duration-1000 ease-out skill-bar`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

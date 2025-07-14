import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const strengths = [
    "Process Optimization & Efficiency Improvement",
    "Cross-functional Team Leadership",
    "Data-Driven Problem Solving",
    "Analytical Mindset & Business Intelligence",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Strategic career transition from operations excellence to data analytics mastery
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Professional Journey</h3>
            <p className="text-lg text-slate mb-6">
              Analytical professional with a strong passion for Data Analytics. I possess a robust 
              foundation in Python, Pandas, SQL, and Power BI. Leveraging 4.5 years of operations 
              experience, I bring proven problem-solving and process improvement skills.
            </p>
            <p className="text-lg text-slate mb-6">
              My goal is to apply data-driven insights within an IT environment to support strategic 
              decision-making and drive business growth through comprehensive analytics solutions.
            </p>
            <div className="bg-slate-light p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Core Strengths</h4>
              <ul className="space-y-2">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-center text-slate">
                    <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="gradient-primary p-6 rounded-xl text-white">
              <h4 className="font-semibold mb-4">Current Focus</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Data Analytics Course</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Completed</span>
                </div>
                <div className="bg-white/10 rounded-full h-2">
                  <div className="bg-yellow-300 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border p-4 rounded-xl text-center shadow-sm">
                <div className="text-2xl font-bold text-primary">Chennai</div>
                <div className="text-sm text-slate">Based in</div>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl text-center shadow-sm">
                <div className="text-2xl font-bold text-primary">2025</div>
                <div className="text-sm text-slate">Career Goal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

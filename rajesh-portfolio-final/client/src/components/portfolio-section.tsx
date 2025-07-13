export default function PortfolioSection() {
  const projects = [
    {
      title: "Warehouse Operational Efficiency & BI Dashboard",
      company: "Bosch Ltd.",
      status: "Internship Project",
      statusColor: "bg-primary text-white",
      gradientBg: "from-primary/5 to-primary/10",
      borderColor: "border-primary/20",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Developed Power BI dashboard to enhance stock maintenance accuracy with real-time data visibility from Oracle database. Identified 30% underutilized space and executed liquidation plan for aging stock.",
      metrics: [
        { value: "30%", label: "Space Optimization" },
        { value: "3.5m", label: "Project Duration" },
      ],
      tags: ["Power BI", "Python", "Oracle SQL", "Excel"],
      tagColor: "bg-primary/10 text-primary",
    },
    {
      title: "Production Process Analytics",
      company: "Nova Carbons Pvt Ltd.",
      status: "Excel + Analytics",
      statusColor: "bg-success text-white",
      gradientBg: "from-success/5 to-success/10",
      borderColor: "border-success/20",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Led two major process improvement projects at Nova Carbons, analyzing production data, defect rates, and resource utilization to implement cost-effective operational enhancements.",
      metrics: [
        { value: "14", label: "Team Members" },
        { value: "2", label: "Major Projects" },
      ],
      tags: ["Process Analysis", "Cost Optimization", "SOP Development", "FMEA"],
      tagColor: "bg-success/10 text-success",
    },
    {
      title: "Customer & Sales Analytics",
      company: "Reliance Retail Ltd.",
      status: "Ongoing",
      statusColor: "bg-warning text-white",
      gradientBg: "from-warning/5 to-warning/10",
      borderColor: "border-warning/20",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Currently developing customer behavior analytics and sales trend analysis at Reliance Retail, implementing data-driven strategies for customer attraction and retention.",
      metrics: [
        { value: "98%", label: "Fulfillment Rate" },
        { value: "Active", label: "Current Project" },
      ],
      tags: ["Sales Analytics", "Customer Insights", "Trend Analysis", "KPI Tracking"],
      tagColor: "bg-warning/10 text-warning",
    },
    {
      title: "Strategic Sales & Profitability Analyzer",
      company: "Personal Project",
      status: "GitHub",
      statusColor: "bg-purple-600 text-white",
      gradientBg: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Created comprehensive analysis tool for sales development and profitability. Visualized key sales and profit trends, identified top customers and markets, providing critical business insights.",
      metrics: [
        { value: "Multi-Channel", label: "Sales Analysis" },
        { value: "GitHub", label: "Available" },
      ],
      tags: ["Power BI", "Excel", "Sales Analytics", "Business Intelligence"],
      tagColor: "bg-purple-100 text-purple-600",
    },
    {
      title: "Macro Economic Analysis",
      company: "Personal Project",
      status: "GitHub",
      statusColor: "bg-green-600 text-white",
      gradientBg: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Developed analytical tool exploring country-level macroeconomic and health indicators. Visualized population, life expectancy, unemployment, inflation, and GDP trends for country comparisons.",
      metrics: [
        { value: "Multi-Country", label: "Analysis" },
        { value: "GitHub", label: "Available" },
      ],
      tags: ["Power BI", "Excel", "Economic Analysis", "Data Visualization"],
      tagColor: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Portfolio & Projects</h2>
          <p className="text-xl text-slate">
            Real-world applications of data analytics in operational excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.gradientBg} p-8 rounded-2xl border ${project.borderColor}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <div className={`${project.statusColor} px-3 py-1 rounded-full text-sm`}>
                  {project.status}
                </div>
              </div>
              
              <img
                src={project.image}
                alt={`${project.title} - ${project.company}`}
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-6"
              />
              
              <p className="text-slate mb-6">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center p-4 bg-background rounded-lg">
                    <div className={`text-2xl font-bold ${index === 0 ? "text-primary" : index === 1 ? "text-success" : index === 2 ? "text-warning" : index === 3 ? "text-purple-600" : "text-green-600"}`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`${project.tagColor} px-3 py-1 rounded-full text-sm`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

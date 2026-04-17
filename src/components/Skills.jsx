const categories = [
  { icon: '⚡', title: 'Languages', items: ['Java 8/11', 'JavaScript', 'SQL', 'Python', 'TypeScript', 'Go'] },
  { icon: '🔧', title: 'Backend', items: ['Spring Boot', 'Spring MVC', 'Hibernate', 'RESTful APIs', 'Microservices', 'Kafka'] },
  { icon: '🎨', title: 'Frontend', items: ['Angular', 'React', 'HTML/CSS', 'JavaScript', 'TypeScript'] },
  { icon: '🤖', title: 'AI & Data', items: ['MCP Servers', 'LLM Integration', 'AI Workflows', 'ETL Pipelines', 'BigQuery'] },
  { icon: '🗄️', title: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'DynamoDB', 'Redis'] },
  { icon: '☁️', title: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'Jenkins', 'CI/CD', 'Lambda'] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="reveal">
        <div className="section-label">03 — Skills</div>
        <h2 className="section-title">
          My <span className="muted">toolkit</span>
        </h2>
      </div>

      <div className="skills-container">
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className="skill-category reveal"
            style={{ transitionDelay: `${(i + 1) * 0.05}s` }}
          >
            <div className="skill-icon">{cat.icon}</div>
            <h3 className="skill-cat-title">{cat.title}</h3>
            <div className="skill-items">
              {cat.items.map((item) => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

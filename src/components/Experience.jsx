const experiences = [
  {
    role: 'Software Development Engineer 3',
    date: 'Apr 2025 – Present',
    company: 'PayPal',
    location: 'Bangalore, India',
    details: [
      "Architected MCP server integrations for PayPal's AI-powered Intelligent Alert Handler — automating production incident triage using LLMs across Datadog, Kibana & BigQuery",
      'Built end-to-end AI-driven SOP execution engine with multi-step workflows, circuit breaker patterns, and graceful degradation across Jira, Slack, Datadog & StackOverflow',
      'Architected internal mass payout platform processing millions of financial transactions with strict reliability',
      'Engineered comprehensive test suites (JUnit 4, Mockito) achieving 85%+ code coverage',
    ],
  },
  {
    role: 'Software Development Engineer 3',
    date: 'May 2022 – Mar 2025',
    company: 'HashedIn by Deloitte',
    location: 'Bangalore, India',
    details: [
      'Led enterprise-scale data migration for 1M+ users — ETL pipeline design with zero-downtime deployment',
      'Optimized data-intensive APIs via query tuning, indexing & caching — response times reduced by 90% (20s → 2s)',
      'Built full-stack Stripe payment integration — secure Java backend + JS front-end for real-time processing',
      'Mentored junior engineers through 50+ code reviews, elevating team quality standards by 20%',
    ],
  },
  {
    role: 'Senior Systems Engineer',
    date: 'Dec 2019 – Apr 2022',
    company: 'Infosys Limited',
    location: 'Bangalore, India',
    details: [
      'Developed full-stack middleware platform (Spring Boot + Angular) bridging Blockchain (R3 Corda) networks',
      'Designed and operated CI/CD pipelines (Jenkins, Azure DevOps) with automated testing at scale',
      'Built data integration layers connecting PostgreSQL and MongoDB with complex data transformations',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="reveal">
        <div className="section-label">02 — Experience</div>
        <h2 className="section-title">
          Where I've <span className="muted">made impact</span>
        </h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div
            key={exp.date}
            className="timeline-item reveal-left"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="timeline-dot" />
            <div className="timeline-header">
              <span className="timeline-role">{exp.role}</span>
              <span className="timeline-date">{exp.date}</span>
            </div>
            <div className="timeline-company">
              {exp.company} <span className="location">· {exp.location}</span>
            </div>
            <ul className="timeline-details">
              {exp.details.map((detail, j) => (
                <li key={j}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Security Banner */}
      <div className="security-banner reveal-scale">
        <div className="security-badge">🛡️</div>
        <div className="security-info">
          <h3 className="security-title">Independent Security Researcher</h3>
          <p className="security-desc">
            Discovered critical vulnerabilities in Fortune 500 companies. Enterprise security consulting
            focused on OWASP Top 10. Responsible disclosure advocate.
          </p>
          <span className="security-tag">🏆 Facebook Hall of Fame 2021 · $1,500+ Bounties</span>
        </div>
      </div>
    </section>
  );
}

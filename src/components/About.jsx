import { useEffect, useRef } from 'react';

const stats = [
  { target: 6, label: 'Years Experience', suffix: '+' },
  { target: 90, label: '% API Optimization', suffix: '%' },
  { target: 1, label: 'M+ Users Migrated', suffix: 'M+' },
  { target: 85, label: '%+ Code Coverage', suffix: '%' },
];

function StatCard({ target, label, suffix, delay }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
                el.textContent = target + suffix;
              } else {
                el.textContent = Math.floor(current);
              }
            }, 30);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div className="stat-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="stat-number" ref={numRef}>0</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="reveal">
        <div className="section-label">01 — About</div>
        <h2 className="section-title">
          Building the <span className="muted">future,</span>
          <br />
          one system at a time
        </h2>
      </div>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={(i + 1) * 0.1} />
        ))}
      </div>
      <div className="about-text reveal">
        <p>
          I'm a Senior Software Software Engineer with <strong>6+ years</strong> of experience building{' '}
          <span className="highlight">scalable, data-intensive applications</span> and{' '}
          <span className="highlight">AI-powered platforms</span>. Currently at <strong>PayPal</strong>, I
          architect MCP-based AI services and intelligent automation systems that process millions of
          transactions. I thrive at the intersection of distributed systems, AI integration, and
          high-throughput payment infrastructure.
        </p>
        <br />
        <p>
          Beyond engineering, I'm a recognized <span className="highlight">security researcher</span> —
          listed in the <strong>Facebook Hall of Fame 2021</strong> for discovering critical vulnerabilities
          in Fortune 500 companies. I believe in building systems that are not just powerful, but also
          secure.
        </p>
      </div>
    </section>
  );
}

const achievements = [
  {
    icon: '🏆',
    title: 'Excellence Award & Top Impactor',
    desc: 'HashedIn by Deloitte — Complete module ownership with zero-defect releases across enterprise projects.',
  },
  {
    icon: '⭐',
    title: 'Insta Award (2x)',
    desc: 'Infosys Limited — Recognized for meritorious performance on critical deliverables and project milestones.',
  },
  {
    icon: '🥇',
    title: 'Competitive Programming',
    desc: '1st rank in 4 HackerEarth contests with peak rating of 1573. Gold Medal in International Mathematics Olympiad.',
  },
  {
    icon: '🛡️',
    title: 'Facebook Hall of Fame 2021',
    desc: 'Recognized security researcher — discovered critical vulnerabilities earning $1,500+ in bounties from Fortune 500 companies.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="reveal">
        <div className="section-label">04 — Achievements</div>
        <h2 className="section-title">
          Awards & <span className="muted">recognition</span>
        </h2>
      </div>

      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <div
            key={a.title}
            className="achievement-card reveal"
            style={{ transitionDelay: `${(i + 1) * 0.05}s` }}
          >
            <div className="achievement-icon">{a.icon}</div>
            <div className="achievement-content">
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-desc">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

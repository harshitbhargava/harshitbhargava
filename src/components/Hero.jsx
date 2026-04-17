import { useEffect, useRef } from 'react';

const tags = [
  'Java & Spring Boot',
  'MCP & AI Workflows',
  'Distributed Systems',
  'Payment Infrastructure',
  'Security Researcher',
];

const terminalLines = [
  { type: 'prompt', text: '$ cat harshit.json' },
  { type: 'blank', text: '' },
  { type: 'output', text: '{' },
  { type: 'key', key: '  "role"', value: '"Senior Full-Stack Engineer"' },
  { type: 'key', key: '  "company"', value: '"PayPal"' },
  { type: 'key', key: '  "experience"', value: '"6+ years"' },
  { type: 'key', key: '  "passion"', value: '"AI × Distributed Systems × Security"' },
  { type: 'key', key: '  "superpower"', value: '"Turning 20s latency into 2s"' },
  { type: 'output', text: '}' },
  { type: 'blank', text: '' },
  { type: 'comment', text: '# Ready to build something extraordinary? 🚀' },
];

export default function Hero() {
  const terminalRef = useRef(null);

  useEffect(() => {
    let lineIdx = 0;
    let timeoutId;

    function typeLine() {
      if (lineIdx >= terminalLines.length || !terminalRef.current) return;
      const line = terminalLines[lineIdx];
      const span = document.createElement('span');
      span.className = 'terminal-line';

      if (line.type === 'prompt') {
        span.innerHTML = `<span class="terminal-prompt">harshit@dev</span> <span class="terminal-cmd">${line.text.slice(2)}</span>`;
      } else if (line.type === 'output') {
        span.innerHTML = `<span class="terminal-output">${line.text}</span>`;
      } else if (line.type === 'key') {
        span.innerHTML = `<span class="terminal-key">${line.key}</span><span class="terminal-output">: </span><span class="terminal-string">${line.value}</span><span class="terminal-output">,</span>`;
      } else if (line.type === 'comment') {
        span.innerHTML = `<span class="terminal-comment">${line.text}</span>`;
      } else {
        span.innerHTML = '&nbsp;';
      }

      terminalRef.current.appendChild(span);
      lineIdx++;
      timeoutId = setTimeout(typeLine, line.type === 'blank' ? 100 : 120);
    }

    timeoutId = setTimeout(typeLine, 2500);
    return () => clearTimeout(timeoutId);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero">
      <div className="hero-pretitle">
        <span className="terminal-prompt">~/harshit</span> $ whoami
        <span className="blink">_</span>
      </div>
      <h1 className="hero-name">
        <span className="outline">Harshit</span>
        <br />
        <span className="accent">Bhargava</span>
        <span className="muted">.</span>
      </h1>
      <p className="hero-subtitle">
        Senior Full-Stack Engineer crafting <strong>scalable systems</strong>,{' '}
        <strong>AI-powered platforms</strong>, and{' '}
        <strong>high-throughput payment infrastructure</strong> at PayPal.
      </p>
      <div className="hero-tags">
        {tags.map((tag) => (
          <span key={tag} className="hero-tag">{tag}</span>
        ))}
      </div>
      <div className="hero-cta">
        <a href="#contact" className="btn btn-filled" onClick={(e) => scrollTo(e, '#contact')}>
          Get In Touch
        </a>
        <a href="#experience" className="btn" onClick={(e) => scrollTo(e, '#experience')}>
          View My Work
        </a>
      </div>

      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-dot red" />
          <div className="terminal-dot yellow" />
          <div className="terminal-dot green" />
          <span className="terminal-title">harshit@paypal ~ zsh</span>
        </div>
        <div className="terminal-body" ref={terminalRef} />
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

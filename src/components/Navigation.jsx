import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          setActiveId(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav>
      <div className="nav-logo">
        &lt;HB<span>/&gt;</span>
      </div>
      <div className="nav-links">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={activeId === href.slice(1) ? 'active' : ''}
            onClick={(e) => scrollTo(e, href)}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="nav-status">
        <div className="status-dot" />
        Open to opportunities
      </div>
    </nav>
  );
}

import { useEffect, useRef } from 'react';

export default function Orbs() {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${Math.sin(y * 0.002) * 30}px, ${y * -0.05}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${Math.cos(y * 0.002) * 30}px, ${y * 0.03}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="orb orb-1" ref={orb1Ref} />
      <div className="orb orb-2" ref={orb2Ref} />
    </>
  );
}

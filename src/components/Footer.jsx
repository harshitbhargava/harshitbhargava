export default function Footer() {
  return (
    <footer>
      <div>
        <span style={{ color: 'var(--accent)' }}>Harshit Bhargava</span> © {new Date().getFullYear()} — Built
        with passion & precision.
      </div>
      <div className="footer-ascii">
{` ██╗  ██╗██████╗ 
 ██║  ██║██╔══██╗
 ███████║██████╔╝
 ██╔══██║██╔══██╗
 ██║  ██║██████╔╝
 ╚═╝  ╚═╝╚═════╝`}
      </div>
      <div>
        Designed & Developed with <span style={{ color: 'var(--danger)' }}>♥</span>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <span>&copy; {new Date().getFullYear()} Salman Alawi. All rights reserved.</span>
          <span className="footer-sep">|</span>
          <span>Manama, Bahrain</span>
          <span className="footer-sep">|</span>
          <a href="mailto:salman_alawi@hotmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
          <span className="footer-sep">|</span>
          <a href="https://www.linkedin.com/in/salman-alawi-58a9b0a1/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="footer-right">Built as a living profile, not a PDF.</div>
      </div>
    </footer>
  )
}

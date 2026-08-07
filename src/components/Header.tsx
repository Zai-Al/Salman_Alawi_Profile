import type { Mode } from '../data/content'

export function Header({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          Salman <span>Alawi</span>
        </div>
        <nav className="links">
          <a href="#mission">Mission</a>
          <a href="#track">Track Record</a>
          <a href="#credentials">Credentials</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="toggle" role="button" aria-label="Switch between commercial and academic view">
          <div className="pill" />
          <button
            className={mode === 'commercial' ? 'active' : ''}
            type="button"
            onClick={() => setMode('commercial')}
          >
            Commercial
          </button>
          <button
            className={mode === 'academic' ? 'active' : ''}
            type="button"
            onClick={() => setMode('academic')}
          >
            Academic
          </button>
        </div>
      </div>
    </header>
  )
}

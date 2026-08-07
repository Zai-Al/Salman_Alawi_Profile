import { icons, type ModeCopy } from '../data/content'
import { NetworkBackground } from './NetworkBackground'
import { LinkedInIcon } from './LinkedInIcon'
import avatarSrc from '../assets/avatar.jpg'

const { badgeCheck: BadgeCheck, shieldCheck: ShieldCheck, mapPin: MapPin, mail: Mail, phone: Phone, arrowRight: ArrowRight } = icons

export function Hero({ copy }: { copy: ModeCopy }) {
  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <NetworkBackground />
      <div className="motion-band" />
      <svg className="skyline" width={340} height={160} viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg">
        <g fill="#ffffff">
          <rect x={0} y={80} width={24} height={80} /><rect x={28} y={55} width={18} height={105} />
          <rect x={50} y={90} width={26} height={70} /><rect x={80} y={35} width={16} height={125} />
          <rect x={100} y={70} width={22} height={90} /><rect x={126} y={18} width={14} height={142} />
          <rect x={144} y={85} width={26} height={75} /><rect x={174} y={50} width={20} height={110} />
          <rect x={198} y={95} width={27} height={65} /><rect x={228} y={28} width={16} height={132} />
          <rect x={248} y={78} width={24} height={82} /><rect x={276} y={58} width={18} height={102} />
        </g>
      </svg>

      <div className="wrap">
        <div className="hero-content">
          <div className="hero-top">
            <div className="avatar">
              <img src={avatarSrc} alt="Salman Alawi" />
            </div>
            <div>
              <span className="eyebrow">
                <BadgeCheck className="icon" />
                <span>{copy.eyebrow}</span>
              </span>
            </div>
          </div>

          <h1 className="wordmark">
            Salman <span>Alawi</span>
          </h1>
          <p className="tagline">{copy.tagline}</p>
          <div className="trustline">
            <ShieldCheck className="icon" />
            <span>{copy.trust}</span>
          </div>

          <div className="badge-strip">
            {copy.badges.map((b, i) => {
              const Icon = b.icon
              return (
                <div className="badge" key={i}>
                  <div className="badge-icon">
                    <Icon className="icon" />
                  </div>
                  <div>
                    <div className="badge-num">{b.num}</div>
                    <div className="badge-label">{b.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="tag-line">{copy.tagLine}</div>

          <div className="contact-row">
            <span>
              <MapPin className="icon" />
              Manama, Bahrain
            </span>
            <a href="mailto:salman_alawi@hotmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="icon" />
              salman_alawi@hotmail.com
            </a>
            <a href="tel:+97339399947">
              <Phone className="icon" />
              +973 3939 9947
            </a>
            <a href="https://www.linkedin.com/in/salman-alawi-58a9b0a1/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              linkedin.com/in/salman-alawi
            </a>
          </div>

          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">
              <ArrowRight className="icon" />
              {copy.cta}
            </a>
            <a className="btn btn-ghost" href="#track">
              See the track record
            </a>
          </div>

          <div className="summary-box">
            <p>{copy.summary}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

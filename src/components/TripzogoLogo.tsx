import React from 'react';

interface TripzogoLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' for light backgrounds (Navbar), 'dark' for dark backgrounds (Footer)
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const TripzogoLogo: React.FC<TripzogoLogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = true,
  size = 'md',
}) => {
  // Height presets
  const heightMap = {
    sm: showTagline ? 38 : 28,
    md: showTagline ? 48 : 36,
    lg: showTagline ? 64 : 48,
  };

  const height = heightMap[size];
  const isDark = variant === 'dark';
  const taglineColor = isDark ? '#fca5a5' : '#73211a';

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <svg
        viewBox="0 0 460 135"
        style={{ height: `${height}px`, width: 'auto', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TRIPZOGO - travel smart. go easy."
      >
        <defs>
          {/* Main tripzogo brand gradient across the full wordmark */}
          <linearGradient id="tzBrandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f36323" />
            <stop offset="22%" stopColor="#f05324" />
            <stop offset="48%" stopColor="#e5322d" />
            <stop offset="76%" stopColor="#ce1a38" />
            <stop offset="100%" stopColor="#9e1822" />
          </linearGradient>

          {/* Compass outer ring gradient */}
          <linearGradient id="tzCompassRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea3829" />
            <stop offset="100%" stopColor="#bd1827" />
          </linearGradient>

          {/* Compass needle left (highlighted) */}
          <linearGradient id="tzNeedleLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>

          {/* Compass needle right (shaded) */}
          <linearGradient id="tzNeedleDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#450a0a" />
          </linearGradient>

          {/* Subtle tactile bevel/shadow filter */}
          <filter id="tzDropShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0.5" dy="1.5" stdDeviation="1" floodColor="#7f1d1d" floodOpacity={isDark ? "0.4" : "0.22"} />
          </filter>
        </defs>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@800;900&family=Plus+Jakarta+Sans:wght@500;600&display=swap');
          .tz-word {
            font-family: 'Outfit', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-weight: 900;
            font-size: 84px;
            fill: url(#tzBrandGradient);
            filter: url(#tzDropShadow);
          }
          .tz-tagline {
            font-family: 'Plus Jakarta Sans', 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 500;
            font-size: 21px;
            letter-spacing: 2.5px;
            fill: ${taglineColor};
          }
        `}</style>

        {/* Wordmark Group */}
        <g transform="translate(6, 2)">
          {/* 'tripz' */}
          <text x="0" y="80" className="tz-word" letterSpacing="-2px">
            tripz
          </text>

          {/* First 'o' as Analog Compass Dial */}
          {/* Positioned right after 'tripz' at x=256, center y=55 */}
          <g transform="translate(257, 54)" filter="url(#tzDropShadow)">
            {/* Outer Compass Gradient Rim */}
            <circle cx="0" cy="0" r="30" fill="url(#tzCompassRingGrad)" />

            {/* Inner Crisp White Dial */}
            <circle cx="0" cy="0" r="21" fill="#ffffff" />

            {/* Cardinal Tick Marks (12, 3, 6, 9 o'clock) */}
            <line x1="0" y1="-19" x2="0" y2="-14.5" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="19" x2="0" y2="14.5" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" />
            <line x1="19" y1="0" x2="14.5" y2="0" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" />
            <line x1="-19" y1="0" x2="-14.5" y2="0" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" />

            {/* Sub-ticks (dots at 30 deg intervals) */}
            <circle cx="8.5" cy="-15" r="1.1" fill="#991b1b" />
            <circle cx="15" cy="-8.5" r="1.1" fill="#991b1b" />
            <circle cx="15" cy="8.5" r="1.1" fill="#991b1b" />
            <circle cx="8.5" cy="15" r="1.1" fill="#991b1b" />
            <circle cx="-8.5" cy="15" r="1.1" fill="#991b1b" />
            <circle cx="-15" cy="8.5" r="1.1" fill="#991b1b" />
            <circle cx="-15" cy="-8.5" r="1.1" fill="#991b1b" />
            <circle cx="-8.5" cy="-15" r="1.1" fill="#991b1b" />

            {/* Compass Needle - pointing Northeast (~38 degrees) matching the uploaded logo */}
            <g transform="rotate(38)">
              {/* North Pointer - Left facet (lighter red/coral) */}
              <polygon points="0,-17 -4.2,-1 0,0" fill="url(#tzNeedleLight)" />
              {/* North Pointer - Right facet (dark red shadow) */}
              <polygon points="0,-17 4.2,-1 0,0" fill="url(#tzNeedleDark)" />
              {/* South Tail - Left facet */}
              <polygon points="0,6.5 -3,0 0,0" fill="url(#tzNeedleDark)" />
              {/* South Tail - Right facet */}
              <polygon points="0,6.5 3,0 0,0" fill="url(#tzNeedleLight)" />
              {/* Center Pivot Pin */}
              <circle cx="0" cy="0" r="2.8" fill="#ffffff" stroke="#991b1b" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.2" fill="#7f1d1d" />
            </g>
          </g>

          {/* 'go' */}
          <text x="294" y="80" className="tz-word" letterSpacing="-2px">
            go
          </text>

          {/* Tagline: travel smart. go easy. */}
          {showTagline && (
            <text x="210" y="118" textAnchor="middle" className="tz-tagline">
              travel smart. go easy.
            </text>
          )}
        </g>
      </svg>
    </div>
  );
};

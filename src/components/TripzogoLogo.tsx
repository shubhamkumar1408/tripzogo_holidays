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
  const isDark = variant === 'dark';

  // Sizing scale for wordmark, compass dial, and tagline
  const config = {
    sm: {
      fontSize: 22,
      compassSize: 18,
      descenderPadding: 5,
      taglineSize: 7.5,
      taglineLetterSpacing: '0.24em',
      taglineMarginTop: 5,
    },
    md: {
      fontSize: 32,
      compassSize: 26,
      descenderPadding: 7,
      taglineSize: 9.5,
      taglineLetterSpacing: '0.25em',
      taglineMarginTop: 7,
    },
    lg: {
      fontSize: 44,
      compassSize: 36,
      descenderPadding: 10,
      taglineSize: 12.5,
      taglineLetterSpacing: '0.26em',
      taglineMarginTop: 10,
    },
  }[size];

  const taglineColor = isDark ? '#fca5a5' : '#881337';

  return (
    <div className={`inline-flex flex-col select-none ${className}`} aria-label="TRIPZOGO - travel smart. go easy.">
      {/* Brand Wordmark: tripz + compass 'o' + go (seamlessly joined, zero gap, descenders fully visible) */}
      <div className="flex items-center tracking-tighter leading-normal">
        {/* 'tripz' */}
        <span
          className="font-black bg-gradient-to-r from-[#f36323] via-[#eb3e28] to-[#e0262b] bg-clip-text text-transparent shrink-0 inline-block"
          style={{
            fontFamily: "'Outfit', 'Montserrat', -apple-system, sans-serif",
            fontSize: `${config.fontSize}px`,
            letterSpacing: '-0.035em',
            lineHeight: 1.18,
            paddingBottom: `${config.descenderPadding}px`,
            marginBottom: `-${config.descenderPadding}px`,
          }}
        >
          tripz
        </span>

        {/* First 'o' as Analog Compass Dial - right beside 'z' with no gap */}
        <span
          className="inline-flex items-center justify-center shrink-0 -mx-[0.5px]"
          style={{
            width: `${config.compassSize}px`,
            height: `${config.compassSize}px`,
            transform: 'translateY(-0.5px)',
          }}
        >
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`tzCompRing_${variant}_${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ea3829" />
                <stop offset="100%" stopColor="#bd1827" />
              </linearGradient>
              <linearGradient id={`tzNeedleL_${variant}_${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <linearGradient id={`tzNeedleD_${variant}_${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#450a0a" />
              </linearGradient>
            </defs>

            {/* Outer Compass Gradient Rim */}
            <circle cx="32" cy="32" r="30" fill={`url(#tzCompRing_${variant}_${size})`} />

            {/* Inner Crisp White Dial */}
            <circle cx="32" cy="32" r="21" fill="#ffffff" />

            {/* Cardinal Tick Marks */}
            <line x1="32" y1="13" x2="32" y2="17.5" stroke="#7f1d1d" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="32" y1="51" x2="32" y2="46.5" stroke="#7f1d1d" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="51" y1="32" x2="46.5" y2="32" stroke="#7f1d1d" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="13" y1="32" x2="17.5" y2="32" stroke="#7f1d1d" strokeWidth="2.2" strokeLinecap="round" />

            {/* 30-deg Sub-ticks */}
            <circle cx="41.5" cy="15.5" r="1.3" fill="#991b1b" />
            <circle cx="48.5" cy="22.5" r="1.3" fill="#991b1b" />
            <circle cx="48.5" cy="41.5" r="1.3" fill="#991b1b" />
            <circle cx="41.5" cy="48.5" r="1.3" fill="#991b1b" />
            <circle cx="22.5" cy="48.5" r="1.3" fill="#991b1b" />
            <circle cx="15.5" cy="41.5" r="1.3" fill="#991b1b" />
            <circle cx="15.5" cy="22.5" r="1.3" fill="#991b1b" />
            <circle cx="22.5" cy="15.5" r="1.3" fill="#991b1b" />

            {/* Compass Needle - pointing Northeast (~38 degrees) */}
            <g transform="translate(32, 32) rotate(38)">
              <polygon points="0,-16.5 -4.2,-1 0,0" fill={`url(#tzNeedleL_${variant}_${size})`} />
              <polygon points="0,-16.5 4.2,-1 0,0" fill={`url(#tzNeedleD_${variant}_${size})`} />
              <polygon points="0,6.5 -3,0 0,0" fill={`url(#tzNeedleD_${variant}_${size})`} />
              <polygon points="0,6.5 3,0 0,0" fill={`url(#tzNeedleL_${variant}_${size})`} />
              <circle cx="0" cy="0" r="2.8" fill="#ffffff" stroke="#991b1b" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="1.2" fill="#7f1d1d" />
            </g>
          </svg>
        </span>

        {/* 'go' - immediately following compass 'o' */}
        <span
          className="font-black bg-gradient-to-r from-[#cf1a37] to-[#991822] bg-clip-text text-transparent shrink-0 inline-block"
          style={{
            fontFamily: "'Outfit', 'Montserrat', -apple-system, sans-serif",
            fontSize: `${config.fontSize}px`,
            letterSpacing: '-0.035em',
            lineHeight: 1.18,
            paddingBottom: `${config.descenderPadding}px`,
            marginBottom: `-${config.descenderPadding}px`,
          }}
        >
          go
        </span>
      </div>

      {/* Tagline: travel smart. go easy. - positioned cleanly below with sufficient clearance from p and g */}
      {showTagline && (
        <span
          className="font-medium tracking-widest text-center whitespace-nowrap block"
          style={{
            fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
            fontSize: `${config.taglineSize}px`,
            letterSpacing: config.taglineLetterSpacing,
            color: taglineColor,
            marginTop: `${config.taglineMarginTop}px`,
            lineHeight: 1.2,
          }}
        >
          travel smart. go easy.
        </span>
      )}
    </div>
  );
};

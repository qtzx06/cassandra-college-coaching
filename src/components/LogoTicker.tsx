import React from 'react';
import './LogoTicker.css';

import BrownLogo from '../assets/logos/Brown_University.svg?react';
import ColumbiaLogo from '../assets/logos/Columbia_University_1754.svg?react';
import CornellLogo from '../assets/logos/Cornell_University_logo.svg?react';
import MitLogo from '../assets/logos/MIT_Logo_and_Wordmark.svg?react';
import NorthwesternLogo from '../assets/logos/Northwestern_University_wordmark.svg?react';
import StanfordLogo from '../assets/logos/Stanford_wordmark_(2012).svg?react';
import UcbLogo from '../assets/logos/University_of_California,_Berkeley_Logo_2024.svg?react';
import UclaLogo from '../assets/logos/University_of_California,_Los_Angeles_logo.svg?react';
import UchicagoLogo from '../assets/logos/University_of_Chicago_wordmark.svg?react';
import YaleLogo from '../assets/logos/Yale_University_logo.svg?react';

const logos = [
  { Component: BrownLogo, alt: 'Brown University', width: 2000 },
  { Component: ColumbiaLogo, alt: 'Columbia University', width: 200 },
  { Component: CornellLogo, alt: 'Cornell University', width: 150 },
  { Component: MitLogo, alt: 'MIT', width: 1000 },
  { Component: NorthwesternLogo, alt: 'Northwestern University', width: 200 },
  { Component: StanfordLogo, alt: 'Stanford University', width: 180 },
  { Component: UcbLogo, alt: 'UC Berkeley', width: 180 },
  { Component: UclaLogo, alt: 'UCLA', width: 150 },
  { Component: UchicagoLogo, alt: 'University of Chicago', width: 200 },
  { Component: YaleLogo, alt: 'Yale University', width: 150 },
];

const LogoTicker: React.FC = () => {
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="py-12 bg-white">
      <div className="ticker-container">
        <div className="ticker-track">
          {extendedLogos.map(({ Component, alt, width }, index) => (
            <div key={index} className="ticker-item">
              <Component
                className="logo-svg"
                style={{ width: `${width}px` }}
                aria-label={alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;

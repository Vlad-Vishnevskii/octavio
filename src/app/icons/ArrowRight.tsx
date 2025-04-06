import React from 'react';

export const ArrowRight = ({ width = 31, height = 31, stroke = 'currentColor' }) => (
  <svg width={width} height={height} viewBox="0 0 31 31" fill="none">
    <path
      d="M2 15.5H29.5"
      stroke={stroke}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 1.75L29.5 15.5L15.75 29.25"
      stroke={stroke}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

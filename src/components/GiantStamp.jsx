import styled from 'styled-components';

const StampSvg = styled.svg`
  display: block;
`;

const GiantStamp = ({ size = 100 }) => {
  return (
    <StampSvg width={size} height={size} viewBox="0 0 100 100">
      {/* Giant silhouette with axe - simplified for implementation */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="#D94141" strokeWidth="2" />
      <path 
        d="M30 30 L50 10 L70 30 L50 50 Z M50 50 L30 70 L50 90 L70 70 Z" 
        fill="#D94141" 
        stroke="#0B0B0B"
      />
    </StampSvg>
  );
};

export default GiantStamp;
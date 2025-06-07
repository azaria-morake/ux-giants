import styled from 'styled-components';

const AxeSvg = styled.svg`
  position: absolute;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
`;

const AxeMark = ({ position = 'center', size = 200 }) => {
  return (
    <AxeSvg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        top: position.includes('top') ? '20px' : position.includes('bottom') ? 'auto' : '50%',
        bottom: position.includes('bottom') ? '20px' : 'auto',
        left: position.includes('left') ? '20px' : position.includes('right') ? 'auto' : '50%',
        right: position.includes('right') ? '20px' : 'auto',
        transform: position === 'center' ? 'translate(-50%, -50%)' : 'none',
      }}
    >
      {/* Custom axe SVG path would go here */}
      <path d="M50 10 L90 50 L70 70 L30 30 Z M30 30 L10 50 L30 70 L70 30 Z" fill="#D94141" />
    </AxeSvg>
  );
};

export default AxeMark;
import styled from 'styled-components';
import logo from '../assets/uxgiants-logo-D94141.png';

const AxeDiv = styled.div`
  position: absolute;
  opacity: 0.07;
  z-index: 0;
  pointer-events: none;
  background: url(${logo}) no-repeat center center;
  background-size: contain;
`;

const AxeMark = ({ position = 'center', size = 200 }) => {
  const style = {
    width: size,
    height: size,
    top: position.includes('top') ? '20px' : position.includes('bottom') ? 'auto' : '50%',
    bottom: position.includes('bottom') ? '20px' : 'auto',
    left: position.includes('left') ? '20px' : position.includes('right') ? 'auto' : '50%',
    right: position.includes('right') ? '20px' : 'auto',
    transform: position === 'center' ? 'translate(-50%, -50%)' : 'none',
  };

  return <AxeDiv style={style} />;
};

export default AxeMark;
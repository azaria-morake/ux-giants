import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ScrollLine = styled.div`
  width: 2px;
  height: 100px;
  background: ${({ theme }) => theme.colors.gray};
  position: relative;
  border-radius: 1px;
`;

const ScrollDot = styled.div`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  position: absolute;
  top: ${({ progress }) => `${progress}%`};
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.1s ease-out;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accent};
`;

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContainer>
      <ScrollLine>
        <ScrollDot progress={scrollProgress} />
      </ScrollLine>
    </ScrollContainer>
  );
};

export default ScrollIndicator;
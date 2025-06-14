import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import AxeMark from '../components/AxeMark';
import { Link } from 'react-router-dom';
import PhilosophyCard from '../components/PhilosophyCard';
import { FiCpu, FiUsers, FiRefreshCw, FiCode } from 'react-icons/fi';

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
    width: 100vw;
  max-width: 100vw;
`;

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;

    margin-top: 0; // Remove any default margin

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: auto;
    padding-top: ${({ theme }) => theme.spacing.xl};
    padding-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const Tagline = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: ${({ theme }) => theme.spacing.md};
  max-width: 800px;
`;

const Subheading = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 600px;
  font-weight: 300;
`;


const CTAButton = styled(motion(Link))`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  align-self: flex-start;
  text-decoration: none;
  cursor: pointer;

  
  &:hover {
    color: ${({ theme }) => theme.colors.primary}; // Ensure it stays visible
    background: ${({ theme }) => theme.colors.accent}; // Optional: Or slightly change for hover effect
  }
`;


const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`}; // Reduced padding  max-width: 1200px;
  margin: 0 auto;
`;

const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Home = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const philosophies = [
    {
      icon: <FiCpu size={32} />,
      title: "Cutting Edge Engineering",
      description: "We build with the latest technologies to ensure performance and scalability."
    },
    {
      icon: <FiUsers size={32} />,
      title: "Human-Centered Algorithms",
      description: "Our code understands people, not just processes."
    },
    {
      icon: <FiRefreshCw size={32} />,
      title: "Tactical Agility",
      description: "We adapt to challenges with precision and speed."
    },
    {
      icon: <FiCode size={32} />,
      title: "Functional Elegance",
      description: "Every line of code serves both purpose and beauty."
    }
  ];

  return (
    <Container>
      <AxeMark size={400} position="top-right" />
      
      <HeroSection>
        <Tagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cutting Through Complexity.
        </Tagline>
        <Subheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where UX meets code. Where precision meets power.
        </Subheading>
        <CTAButton
          to='/contact'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let's Build
        </CTAButton>
      </HeroSection>

      <Section ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontWeight: 'bold', marginTop: '1rem' }}
        >
          We design like engineers. We build like visionaries.
        </motion.p>
      </Section>

      <Section>
        <h2>Pillars of Our Philosophy</h2>
        <PhilosophyGrid>
          {philosophies.map((philosophy, index) => (
            <PhilosophyCard
              key={index}
              icon={philosophy.icon}
              title={philosophy.title}
              description={philosophy.description}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </PhilosophyGrid>
      </Section>
    </Container>
  );
};

export default Home;
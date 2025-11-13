import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AxeMark from '../components/AxeMark';
import { FiCode, FiLayers, FiCpu } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import PromiseCard from '../components/PromiseCard';


const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};
  }
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50%;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
  margin-left: ${({ theme }) => theme.spacing.md};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.colors.gray};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -${({ theme }) => theme.spacing.lg};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    transform: translateX(-5px);
  }
`;

const TimelineDate = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const PromiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;



const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const promises = [
    {
      icon: <FiCode size={24} />,
      title: "Code as Design",
      description: "We treat every line of code as a design decision, ensuring technical and aesthetic harmony."
    },
    {
      icon: <FiLayers size={24} />,
      title: "Purposeful Pixels",
      description: "No decorative elements. Every visual component serves a functional purpose."
    },
    {
      icon: <FaRobot size={20} />,
      title: "Engineered Experience",
      description: "User flows are architected like software systems - with logic, structure, and scalability."
    }
  ];

  return (
    <Container>
      <AxeMark size={300} position="top-left" />
      
      <Section>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          The Mythology
        </SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
UX Giants is a collective of engineers, designers, and thinkers redefining what it means to build digital experiences.  
We treat code as our medium and engineering as our art form.

Every function is a motion.  
Every interface is a system of thought.
Our goal is to consolidate human intuition with machine precision.

        </motion.p>
      </Section>

      <Section ref={ref}>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          The Transformation
        </SectionTitle>
        <Timeline>
          <TimelineItem
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <TimelineDate>2022-2023</TimelineDate>
            <h3>Traditional UX Agency</h3>
            <p>Began as a conventional UX design studio concept, aiming at delivering wireframes and prototypes.</p>
          </TimelineItem>
          <TimelineItem
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TimelineDate>2023</TimelineDate>
            <h3>The Awakening</h3>
            <p>Recognized the limitations of design-first approaches without engineering integration.</p>
          </TimelineItem>
          <TimelineItem
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TimelineDate>2024-Present</TimelineDate>
            <h3>UX as Software</h3>
            <p>Transitioned to a code-first philosophy where UX is implemented, not just imagined.</p>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Promise
        </SectionTitle>
        <PromiseGrid>
          {promises.map((promise, index) => (
      <PromiseCard
        key={index}
        icon={promise.icon}
        title={promise.title}
        description={promise.description}
        transition={{ delay: index * 0.1 }}
      />
    ))}   
        </PromiseGrid>
      </Section>
    </Container>
  );
};

export default About;
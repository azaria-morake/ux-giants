import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    img {
      transform: scale(1.05);
    }
  }
`;

const IconContainer = styled.div`
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

const IconWrapper = styled.div`
  font-size: 4rem; /* Increased size for better visibility */
  display: flex;
  
  border-radius: 50%;
  background: rgba(217, 65, 65, 0.1);
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent};
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: auto;
`;

const TechPill = styled.span`
  background: rgba(217, 65, 65, 0.1);
  color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: 0.7rem;
  border-radius: 20px;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <IconContainer>
        <IconWrapper>{project.icon}</IconWrapper>
      </IconContainer>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <TechStack>
          {project.techStack.map((tech, index) => (
            <TechPill key={index}>{tech}</TechPill>
          ))}
        </TechStack>
      </Content>
    </Card>
  );
};

export default ProjectCard;
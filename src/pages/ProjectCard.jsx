import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
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
      <ImageContainer>
        <ProjectImage 
          src={project.image} 
          alt={project.title}
          loading="lazy"
        />
      </ImageContainer>
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
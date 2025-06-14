import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import AxeMark from '../components/AxeMark';

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`}; // Reduced padding
  min-height: calc(100vh - 80px); // Account for navbar height
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FilterControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
  cursor: pointer;

  &.active {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); // More flexible min-width
  gap: ${({ theme }) => theme.spacing.md}; // Reduced gap
  margin-top: ${({ theme }) => theme.spacing.lg};
  overflow: visible; // Ensure no hidden overflow
   
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr; // Single column on mobile
    padding: 0 ${({ theme }) => theme.spacing.sm}; // Add side padding
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from an API or JSON file
    const loadProjects = async () => {
      try {
        // In a real app, this would be a fetch call
        const mockProjects = [
          {
            id: 1,
            title: "FinBridge",
            description: "A financial inclusion platform for SMEs in emerging markets",
            techStack: ["React", "Node.js", "MongoDB"],
            category: "finance",
            url: "https://finbridge.io",
            image: "/finbridge-logo.jpg"
          },
          {
            id: 2,
            title: "HealthTrack Pro",
            description: "AI-powered health monitoring system for clinics",
            techStack: ["Python", "TensorFlow", "React Native"],
            category: "health",
            url: "https://healthtrackpro.com",
            image: "/health-track-logo.jpg"
          },
          {
            id: 3,
            title: "NSFP",
            description: "National Soccer Facilities Project to help underserved communities soccer teams compete at national level.",
            techStack: ["Django", "React", "Postgres"],
            category: "education",
            url: "https://eduvrse.app",
            image: "/nsfp.jpg"
          },
          {
            id: 4,
            title: "ShopFlow",
            description: "Next-gen e-commerce platform with AR integration",
            techStack: ["Three.js", "Next.js", "GraphQL"],
            category: "ecommerce",
            url: "https://shopflow.tech",
            image: "/shopflow-logo.jpg"
          }
        ];
        
        setProjects(mockProjects);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load projects:", error);
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <Container>
      <AxeMark size={250} position="bottom-right" />
      
      <Header>
        <h1>Our Projects</h1>
        <p>Where our philosophy meets execution</p>
        
        <FilterControls>
          {categories.map(category => (
            <FilterButton
              key={category}
              onClick={() => setFilter(category)}
              className={filter === category ? 'active' : ''}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterControls>
      </Header>

      {isLoading ? (
        <div>Loading projects...</div>
      ) : (
        <AnimatePresence>
          <ProjectsGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      )}
    </Container>
  );
};

export default Projects;
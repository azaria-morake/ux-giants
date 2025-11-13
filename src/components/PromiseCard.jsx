import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: rgba(11, 11, 11, 0.7);
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 4px;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 480px) {
  margin: 20px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: rgba(11, 11, 11, 0.9);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(217, 65, 65, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 1.1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const PromiseCard = ({ icon, title, description }) => {
  return (
    <Card
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default PromiseCard;
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import AxeMark from '../components/AxeMark';

const Container = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ContactCard = styled(motion.div)`
  background: rgba(11, 11, 11, 0.7);
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-5px);
  }
`;

const ContactIcon = styled.div`
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

const ContactLabel = styled.h3`
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ContactInfo = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiMail />,
      label: "Email",
      info: "uxgiants@gmail.com",
      href: "mailto:uxgiants@gmail.com"
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      info: "+27 66 085-7813",
      href: "tel:+27660857813"
    },
    {
      icon: <FiMapPin />,
      label: "HQ Location",
      info: "19 Ameshoff Street, Braamfontein, JHB",
      href: "https://www.google.com/maps/place/19+Ameshoff+St,+Braamfontein,+Johannesburg,+2001/@-26.1909428,28.0372315,3a,75y,21.28h,90t/data=!3m7!1e1!3m5!1slBPshnlz8XTAQ7N0wCanXA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DlBPshnlz8XTAQ7N0wCanXA%26yaw%3D21.28!7i13312!8i6656!4m7!3m6!1s0x1e950c19945f0cd9:0x55afd081af485e1!8m2!3d-26.1906678!4d28.0373743!10e5!16s%2Fg%2F11v0zz4j3r?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: <FiClock />,
      label: "Hours",
      info: "Mon-Fri: 9AM-5PM SAST",
      href: null
    }
  ];

  return (
    <Container>
      <AxeMark size={300} position="center" />
      
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </Title>

      <ContactGrid>
        {contactMethods.map((method, index) => (
          <ContactCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            as={method.href ? 'a' : 'div'}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIcon>
              {method.icon}
            </ContactIcon>
            <ContactLabel>{method.label}</ContactLabel>
            <ContactInfo>{method.info}</ContactInfo>
          </ContactCard>
        ))}
      </ContactGrid>
    </Container>
  );
};

export default Contact;
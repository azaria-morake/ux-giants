import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

const TerminalWindow = styled(motion.div)`
  background: rgba(11, 11, 11, 0.8);
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.lg};
  font-family: 'Courier New', monospace;
  position: relative;
  overflow: hidden;
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
  background: ${({ color }) => color};
`;

const TerminalTitle = styled.div`
  margin-left: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
`;

const TerminalBody = styled.div`
  line-height: 1.6;
`;

const TerminalLine = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Prompt = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const BlinkingCursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: ${({ theme }) => theme.colors.accent};
  vertical-align: middle;
  margin-left: 4px;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const InputField = styled.input`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  outline: none;
  flex-grow: 1;
`;

const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: ${({ theme }) => theme.spacing.lg};
  align-self: flex-end;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    project: '',
    email: ''
  });
  const [activeField, setActiveField] = useState('name');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeField]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (activeField === 'name') {
        setActiveField('project');
      } else if (activeField === 'project') {
        setActiveField('email');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <Container>
      <AxeMark size={300} position="center" />
      
      <TerminalWindow
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TerminalHeader>
          <TerminalButton color="#FF5F56" />
          <TerminalButton color="#FFBD2E" />
          <TerminalButton color="#27C93F" />
          <TerminalTitle>contact-form --cli</TerminalTitle>
        </TerminalHeader>

        <TerminalBody>
          {isSubmitted ? (
            <>
              <TerminalLine>
                <Prompt>$</Prompt> Transmission successful!
              </TerminalLine>
              <TerminalLine>
                <Prompt>$</Prompt> We'll be in touch soon.
              </TerminalLine>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <TerminalLine>
                <Prompt>$</Prompt> Who are you?
                {activeField === 'name' ? (
                  <>
                    <InputField
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      ref={inputRef}
                      autoComplete="off"
                    />
                    <BlinkingCursor />
                  </>
                ) : (
                  ` ${formData.name || '[not provided]'}`
                )}
              </TerminalLine>

              {formData.name && (
                <TerminalLine>
                  <Prompt>$</Prompt> What are you building?
                  {activeField === 'project' ? (
                    <>
                      <InputField
                        type="text"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        ref={activeField === 'project' ? inputRef : null}
                        autoComplete="off"
                      />
                      <BlinkingCursor />
                    </>
                  ) : (
                    ` ${formData.project || '[not provided]'}`
                  )}
                </TerminalLine>
              )}

              {formData.project && (
                <TerminalLine>
                  <Prompt>$</Prompt> Where can we reach you?
                  {activeField === 'email' ? (
                    <>
                      <InputField
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        ref={activeField === 'email' ? inputRef : null}
                        autoComplete="off"
                      />
                      <BlinkingCursor />
                    </>
                  ) : (
                    ` ${formData.email || '[not provided]'}`
                  )}
                </TerminalLine>
              )}

              {formData.email && (
                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Transmission'}
                </SubmitButton>
              )}
            </form>
          )}
        </TerminalBody>
      </TerminalWindow>
    </Container>
  );
};

export default Contact;
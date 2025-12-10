import React from "react";
import { SectionId } from "../types";
import { styled } from "styled-components";
import { Container } from "../styles/common";

export const About: React.FC = () => {
  return (
    <Section id={SectionId.ABOUT}>
      <Grid>
        <Half>
          <Visual>
            {/* Abstract Visual Representation of "Building Solutions" */}
            <VisualGrid>
              <ImageA
                src="https://picsum.photos/600/800?grayscale"
                alt="Team collaboration"
              />
              <ImageB
                src="https://picsum.photos/600/801?grayscale"
                alt="Digital structure"
              />
            </VisualGrid>
            <Frame />
          </Visual>
        </Half>

        <Half>
          <Title>
            WE CREATE VALUE THROUGH <br /> INNOVATION & EXPERTISE
          </Title>
          <Paragraph>
            TIKA.AI is an AI-powered consulting company specializing in
            cutting-edge software solutions that streamline workflows, automate
            processes, and drive digital transformation.
          </Paragraph>
          <Paragraph>
            Our approach is hands-on, from project planning and development to
            execution and client presentation. We prioritize efficiency, user
            experience, and future-ready technology to ensure scalable and
            sustainable results.
          </Paragraph>

          <StatsGrid>
            <div>
              <StatValue>100%</StatValue>
              <StatLabel>Tailor-Made Solutions</StatLabel>
            </div>
            <div>
              <StatValue>AI Agents</StatValue>
              <StatLabel>POWERED BY MCP • BUILT TO SCALE</StatLabel>
            </div>
          </StatsGrid>
        </Half>
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.tika.black};
  color: ${({ theme }) => theme.colors.white};
`;

const Grid = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

const Half = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 50%;
  }
`;

const Visual = styled.div`
  position: relative;
`;

const VisualGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

const ImageA = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;
  border-radius: 2px;
  opacity: 0.8;
  display: block;
`;

const ImageB = styled.img`
  width: 100%;
  height: 256px;
  object-fit: cover;
  border-radius: 2px;
  opacity: 0.6;
  margin-top: 32px;
  display: block;
`;

const Frame = styled.div`
  position: absolute;
  z-index: -1;
  top: 40px;
  left: 40px;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 2px;
`;

const Title = styled.h2`
  margin: 0 0 32px;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 48px;
  }
`;

const Paragraph = styled.p`
  margin: 0 0 24px;
  font-size: 18px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.gray[400]};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  margin-top: 48px;
`;

const StatValue = styled.h4`
  margin: 0 0 8px;
  font-size: 30px;
  font-weight: 900;
`;

const StatLabel = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 700;
`;

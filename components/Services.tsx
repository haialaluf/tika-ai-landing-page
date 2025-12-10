import React from "react";
import { Bot, Globe, Cog, Package, Cloud, TrendingUp } from "lucide-react";
import { SectionId, ServiceItem } from "../types";
import { styled } from "styled-components";
import { Container } from "../styles/common";

const services: ServiceItem[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Context-aware intelligent agents built using the Model Context Protocol (MCP), designed to enhance productivity and automate communication.",
    icon: <Bot size={40} />,
  },
  {
    id: "web-dev",
    title: "Web App Development",
    description:
      "Custom-built and scalable applications with intuitive design and seamless functionality using modern frameworks.",
    icon: <Globe size={40} />,
  },
  {
    id: "automation",
    title: "Process Automation",
    description:
      "Innovative solutions to optimize processes and reduce manual workload, freeing up your team for strategic tasks.",
    icon: <Cog size={40} />,
  },
  {
    id: "erp",
    title: "ERP Integration",
    description:
      "Seamless integration of enterprise resource planning systems to improve business operations and data flow.",
    icon: <Package size={40} />,
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Scalable infrastructure and cloud-based tools for enhanced performance, security, and accessibility.",
    icon: <Cloud size={40} />,
  },
  {
    id: "digital",
    title: "Digital Transformation",
    description:
      "Modernizing business operations through technology-driven strategies to keep you ahead of the curve.",
    icon: <TrendingUp size={40} />,
  },
];

export const Services: React.FC = () => {
  return (
    <Section id={SectionId.SERVICES}>
      <Container>
        <HeadingWrap>
          <Title>OUR EXPERTISE</Title>
          <Divider />
          <Subtitle>
            We don’t just build solutions, we create value through
            collaboration, innovation, and expertise.
          </Subtitle>
        </HeadingWrap>

        <Grid>
          {services.map((service) => (
            <Card key={service.id}>
              <CardIcon>{service.icon}</CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardText>{service.description}</CardText>
              <CardRule />
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.tika.dark};
  position: relative;
`;

const HeadingWrap = styled.div`
  margin-bottom: 64px;
`;

const Title = styled.h2`
  margin: 0 0 24px;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.02em;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 48px;
  }
`;

const Divider = styled.div`
  width: 96px;
  height: 4px;
  background: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[400]};
  max-width: 672px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const CardIcon = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
  display: inline-block;
  transition: transform 300ms ease;
`;

const Card = styled.div`
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  transition: background 300ms ease, transform 300ms ease,
    border-color 300ms ease;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-8px);
  }

  &:hover ${CardIcon} {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 24px;
  font-weight: 800;
`;

const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
  line-height: 1.75;
`;

const CardRule = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 200ms ease;

  ${Card}:hover & {
    background: ${({ theme }) => theme.colors.white};
  }
`;

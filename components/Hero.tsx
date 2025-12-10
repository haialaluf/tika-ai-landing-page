import React from "react";
import {
  ArrowRight,
  Bot,
  Code,
  Cpu,
  Globe,
  Cloud,
  Database,
} from "lucide-react";
import { SectionId } from "../types";
import { css, keyframes, styled } from "styled-components";
import { Container } from "../styles/common";

export const Hero: React.FC = () => {
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      const nav = document.getElementById("site-nav");
      const navHeight = nav?.getBoundingClientRect().height ?? 0;
      const targetTop =
        element.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    }
  };

  return (
    <HeroSection id={SectionId.HOME}>
      {/* Abstract Background Elements */}
      <Blob
        $top="25%"
        $left="25%"
        $size="384px"
        $bg="rgba(0, 0, 0, 0.03)"
        $animate="pulse"
      />
      <Blob
        $bottom="25%"
        $right="25%"
        $size="500px"
        $bg="rgba(0, 0, 0, 0.02)"
      />

      <HeroInner>
        <Pill style={{ animationDelay: "0.1s" }}>
          <StatusDot />
          <PillText>
            {/* Model Context Protocol (MCP) Experts */}
            {/* Expertise in AI agents leveraging MCP */}
            {/* Expertise developing AI agents with MCP */}
            {/* Expertise in AI agents built on MCP. */}
            {/* Expertise in AI agents powered by MCP  */}
            Expertise in AI agents
          </PillText>
        </Pill>

        <Title style={{ animationDelay: "0.2s" }}>
          TURNING IDEAS <br />
          INTO <GradientText>AI-POWERED INNOVATION</GradientText>
        </Title>

        <Subtitle style={{ animationDelay: "0.4s" }}>
          We specialize in cutting-edge software solutions designed to
          streamline workflows, automate processes, and drive digital
          transformation through intelligent AI agents and full-stack
          development.
        </Subtitle>

        <Actions style={{ animationDelay: "0.6s" }}>
          <PrimaryButton onClick={() => scrollToSection(SectionId.CONTACT)}>
            <span>Start Your Project</span>
            <PrimaryIcon />
          </PrimaryButton>

          <SecondaryButton onClick={() => scrollToSection(SectionId.SERVICES)}>
            Explore Services
          </SecondaryButton>
        </Actions>

        {/* Floating Icons representing Tech Stack */}
        <FloatingIcon $left="40px" $top="33%" $durationSeconds={3}>
          <Bot size={52} />
        </FloatingIcon>
        <FloatingIcon $right="40px" $bottom="33%" $durationSeconds={4}>
          <Globe size={48} />
        </FloatingIcon>
        <FloatingIcon $left="25%" $bottom="40px" $durationSeconds={5}>
          <Code size={48} />
        </FloatingIcon>
      </HeroInner>
    </HeroSection>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseSlow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 96px;
  overflow: hidden;
  background: rgb(245, 245, 247);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 80px;
  }
`;

const Blob = styled.div<{
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $size: string;
  $bg: string;
  $animate?: "pulse";
}>`
  position: absolute;
  top: ${({ $top }) => $top ?? "auto"};
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  bottom: ${({ $bottom }) => $bottom ?? "auto"};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: ${({ $bg }) =>
    `radial-gradient(circle, ${$bg} 0%, ${$bg} 30%, transparent 70%)`};
  border-radius: 9999px;
  ${({ $animate }) =>
    $animate === "pulse" &&
    css`
      animation: ${pulseSlow} 3s ease-in-out infinite;
    `}
`;

const HeroInner = styled(Container)`
  position: relative;
  z-index: 10;
  text-align: center;
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.03);
  margin-bottom: 32px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.green[500]};
  animation: ${pulseSlow} 1.5s ease-in-out infinite;
`;

const PillText = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Title = styled.h1`
  margin: 0 0 32px;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0;
  animation: ${slideUp} 0.8s ease-out forwards;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 72px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 96px;
  }
`;

const GradientText = styled.span`
  color: transparent;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.black},
    ${({ theme }) => theme.colors.gray[600]}
  );
  -webkit-background-clip: text;
  background-clip: text;
`;

const Subtitle = styled.p`
  margin: 0 auto 48px;
  max-width: 672px;
  font-size: 18px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.gray[600]};
  opacity: 0;
  animation: ${slideUp} 0.8s ease-out forwards;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 20px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: 0;
  animation: ${slideUp} 0.8s ease-out forwards;
  margin-bottom: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
  padding: 16px 32px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 800;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  transition:
    background 200ms ease,
    padding-right 200ms ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[800]};
    padding-right: 40px;
  }
`;

const SecondaryButton = styled.button`
  appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 16px 32px;
  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 800;
  font-size: 18px;
  border-radius: 12px;
  transition:
    background 200ms ease,
    border-color 200ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.3);
  }
`;

const PrimaryIcon = styled(ArrowRight)`
  width: 20px;
  height: 20px;
  transition: transform 200ms ease;

  ${PrimaryButton}:hover & {
    transform: translateX(4px);
  }
`;

const FloatingIcon = styled.div<{
  $left?: string;
  $right?: string;
  $top?: string;
  $bottom?: string;
  $durationSeconds: number;
}>`
  position: absolute;
  left: ${({ $left }) => $left ?? "auto"};
  right: ${({ $right }) => $right ?? "auto"};
  top: ${({ $top }) => $top ?? "auto"};
  bottom: ${({ $bottom }) => $bottom ?? "auto"};
  opacity: 0.1;
  color: ${({ theme }) => theme.colors.black};
  display: none;
  animation: ${bounce} ${({ $durationSeconds }) => $durationSeconds}s
    ease-in-out infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: block;
  }
`;

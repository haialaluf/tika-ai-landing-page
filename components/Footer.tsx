import React from "react";
import { styled } from "styled-components";
import { Container } from "../styles/common";

interface FooterProps {
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onTermsClick,
  onPrivacyClick,
}) => {
  return (
    <FooterWrap>
      <Top>
        <Brand>
          <BrandRow>
            <Logo src="logo.PNG" alt="TIKA.AI Logo" />
            <BrandName>TIKA.AI</BrandName>
          </BrandRow>
          <BrandText>
            Turning Ideas Into Tailored AI Agents, Full-Stack Development, and
            ERP Integration Services
          </BrandText>
        </Brand>

        <Socials>
          <SocialLink href="https://www.linkedin.com/company/106613237">
            LinkedIn
          </SocialLink>
          {/* <SocialLink href="#">Twitter</SocialLink>
          <SocialLink href="#">Instagram</SocialLink> */}
        </Socials>
      </Top>

      <Bottom>
        <p>&copy; {new Date().getFullYear()} TIKA.AI. All rights reserved.</p>
        <Legal>
          <LegalButton onClick={onPrivacyClick}>Privacy Policy</LegalButton>
          <LegalButton onClick={onTermsClick}>Terms of Service</LegalButton>
        </Legal>
      </Bottom>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  background: ${({ theme }) => theme.colors.tika.black};
  padding: 48px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
`;

const Top = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
    align-items: center;
    gap: 0;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const Logo = styled.img`
  height: 64px;
  width: auto;
  object-fit: contain;
  display: block;
`;

const BrandName = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.03em;
`;

const BrandText = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[500]};
  max-width: 520px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    white-space: nowrap;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 32px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const SocialLink = styled.a`
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Bottom = styled(Container)`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[600]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

const Legal = styled.div`
  display: flex;
  gap: 24px;
`;

const LegalButton = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  color: inherit;
  cursor: pointer;
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

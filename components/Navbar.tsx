import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SectionId } from "../types";
import { styled } from "styled-components";
import { Container } from "../styles/common";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <Nav id="site-nav" $isScrolled={isScrolled}>
      <NavInner>
        <BrandButton onClick={() => scrollToSection(SectionId.HOME)}>
          <LogoImg src="logo.PNG" alt="TIKA.AI Logo" />
          <span>TIKA.AI</span>
        </BrandButton>

        {/* Desktop Menu */}
        <DesktopMenu>
          {[
            { label: "Services", id: SectionId.SERVICES },
            { label: "About", id: SectionId.ABOUT },
            { label: "Contact", id: SectionId.CONTACT },
          ].map((item) => (
            <NavLink key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </NavLink>
          ))}
          <CtaButton onClick={() => scrollToSection(SectionId.CONTACT)}>
            LET'S TALK
          </CtaButton>
        </DesktopMenu>

        {/* Mobile Toggle */}
        <MobileToggle>
          <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </MobileToggle>
      </NavInner>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu>
          {[
            { label: "Services", id: SectionId.SERVICES },
            { label: "About", id: SectionId.ABOUT },
            { label: "Contact", id: SectionId.CONTACT },
          ].map((item) => (
            <MobileNavLink
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileMenu>
      )}
    </Nav>
  );
};

const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 24px 0;
  transition: all 300ms ease;
  color: ${({ theme }) => theme.colors.black};

  ${({ $isScrolled }) =>
    $isScrolled
      ? `
        background: linear-gradient(
          to bottom,
          rgba(245, 245, 247, 0.98) 0%,
          rgba(245, 245, 247, 0.96) 70%,
          rgba(245, 245, 247, 0.93) 100%
        );
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      `
      : `
        background: transparent;
        border-bottom: 1px solid transparent;
      `}
`;

const NavInner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandButton = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.03em;
`;

const LogoImg = styled.img`
  height: 64px;
  width: auto;
  object-fit: contain;
  display: block;
`;

const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
  }
`;

const NavLink = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[600]};
  transition: color 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const CtaButton = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
  padding: 8px 24px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  border-radius: 12px;
  transition: background 200ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[800]};
  }
`;

const MobileToggle = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

const IconButton = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  padding: 6px;
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgb(245, 245, 247);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

const MobileNavLink = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[600]};
  transition: color 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

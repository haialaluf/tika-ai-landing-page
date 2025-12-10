import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";
import { TermsOfService } from "./components/TermsOfService";
import { PrivacyPolicy } from "./components/PrivacyPolicy";

const AppShell = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const App: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Scroll to top when Terms or Privacy pages are shown
  useEffect(() => {
    if (showTerms || showPrivacy) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showTerms, showPrivacy]);

  return (
    <AppShell>
      {showTerms ? (
        <TermsOfService onClose={() => setShowTerms(false)} />
      ) : showPrivacy ? (
        <PrivacyPolicy onClose={() => setShowPrivacy(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <About />
            <Contact />
          </main>
          <Footer
            onTermsClick={() => setShowTerms(true)}
            onPrivacyClick={() => setShowPrivacy(true)}
          />
          <ChatWidget />
        </>
      )}
    </AppShell>
  );
};

export default App;

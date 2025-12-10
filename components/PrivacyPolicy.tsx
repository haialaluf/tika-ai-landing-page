import React from "react";
import { ArrowLeft } from "lucide-react";
import { styled } from "styled-components";
import { Container } from "../styles/common";

interface PrivacyPolicyProps {
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <Page>
      <Narrow>
        <BackButton onClick={onClose}>
          <BackIcon size={20} />
          <span>Back to Home</span>
        </BackButton>
        <Title>Privacy Policy</Title>
        <Updated>Last updated: {new Date().toLocaleDateString()}</Updated>

        <Body>
          <section>
            <H2>1. Introduction</H2>
            <p>
              TIKA.AI ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
            <div>
              <H3>Data Controller</H3>
              <p>
                For the purposes of applicable data protection laws, including
                the EU General Data Protection Regulation (GDPR), TIKA.AI acts
                as the data controller responsible for your personal
                information. TIKA.AI is established in the European Union.
              </p>
            </div>
          </section>

          <section>
            <H2>2. Information We Collect</H2>
            <H3>2.1 Personal Information</H3>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <List>
              <li>Contact us through our website forms</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletters or communications</li>
              <li>Engage with our services</li>
            </List>
            <p>
              This information may include your name, email address, phone
              number, company name, and any other information you choose to
              provide.
            </p>

            <H3>2.2 Automatically Collected Information</H3>
            <p>
              When you visit our website, we may automatically collect certain
              information about your device, including:
            </p>
            <List>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Date and time of access</li>
            </List>
          </section>

          <section>
            <H2>3. How We Use Your Information</H2>
            <p>We use the information we collect to:</p>
            <List>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>
                Communicate with you about products, services, and promotions
              </li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </List>
            <div>
              <H3>Legal Basis for Processing (GDPR)</H3>
              <p>
                Where required under GDPR, we process personal information based
                on one or more of the following legal grounds: your consent, the
                performance of a contract or steps taken prior to entering into
                a contract, compliance with legal obligations, and our
                legitimate interests, provided such interests do not override
                your fundamental rights and freedoms.
              </p>
            </div>
          </section>

          <section>
            <H2>4. Information Sharing and Disclosure</H2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in the following
              circumstances:
            </p>
            <List>
              <li>
                <strong>Service Providers:</strong> We may share information
                with third-party service providers who perform services on our
                behalf, such as hosting, analytics, and email services.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a
                merger, acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities.
              </li>
              <li>
                <strong>Protection of Rights:</strong> We may disclose
                information to protect and defend our rights or property, or the
                safety of our users.
              </li>
            </List>
          </section>

          <section>
            <H2>5. Data Security</H2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <H2>6. Cookies and Tracking Technologies</H2>
            <p>
              We may use cookies, web beacons, and similar tracking technologies
              to collect and store information about your preferences and
              activity on our website. We use essential cookies necessary for
              the operation of our website. Non-essential cookies, such as
              analytics or performance cookies, are used only where permitted by
              applicable law and, where required, with your consent.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <H2>7. Third-Party Links</H2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              third-party sites. We encourage you to review the privacy policies
              of any third-party sites you visit.
            </p>
          </section>

          <section>
            <H2>8. Your Rights and Choices</H2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <List>
              <li>
                <strong>Access:</strong> Request access to your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your
                personal information
              </li>
              <li>
                <strong>Data Portability:</strong> Request transfer of your
                information
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent for data
                processing where applicable
              </li>
            </List>
            <p>
              To exercise these rights, please contact us using the information
              provided in the Contact section below.
            </p>
            <p>
              You also have the right to lodge a complaint with a competent data
              protection supervisory authority in your country of residence or
              within the European Union.
            </p>
          </section>

          <section>
            <H2>9. Children's Privacy</H2>

            <p>
              Our services are not intended for individuals under the age of 16.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </section>

          <section>
            <H2>10. International Data Transfers</H2>
            <p>
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              data protection laws that differ from those in your country.
            </p>
            <p>
              Where personal data is transferred outside the EU/EEA, we ensure
              appropriate safeguards are in place, such as the use of Standard
              Contractual Clauses approved by the European Commission.
            </p>
          </section>

          <section>
            <H2>11. Data Retention</H2>
            <p>
              We will retain your personal information for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <H2>12. Changes to This Privacy Policy</H2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <H2>13. Contact Us</H2>
            <p>
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us through our website contact form or
              at the contact information provided on our website.
            </p>
          </section>

          <FinePrint>
            <FinePrintText>
              This Privacy Policy is subject to periodic review and may be
              updated to reflect changes in our practices or applicable laws.
              Users are encouraged to review this policy regularly. For specific
              legal questions regarding privacy matters, please consult with
              qualified legal counsel.
            </FinePrintText>
          </FinePrint>
        </Body>
      </Narrow>
    </Page>
  );
};

const Page = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.tika.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 80px 0;
`;

const Narrow = styled(Container)`
  max-width: 896px;
`;

const BackButton = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.gray[400]};
  transition: color 150ms ease;
  margin-bottom: 32px;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const BackIcon = styled(ArrowLeft)`
  transition: transform 150ms ease;

  ${BackButton}:hover & {
    transform: translateX(-4px);
  }
`;

const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 36px;
  font-weight: 900;
`;

const Updated = styled.p`
  margin: 0 0 48px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${({ theme }) => theme.colors.gray[300]};
  line-height: 1.8;

  section p {
    margin: 0;
  }

  section p + p {
    margin-top: 16px;
  }

  section ul {
    margin-top: 8px;
  }

  section ul + p {
    margin-top: 16px;
  }
`;

const H2 = styled.h2`
  margin: 0 0 16px;
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`;

const H3 = styled.h3`
  margin: 16px 0 8px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 16px;
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FinePrint = styled.section`
  padding-top: 32px;
  margin-top: 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FinePrintText = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-style: italic;
`;

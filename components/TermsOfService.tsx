import React from "react";
import { ArrowLeft } from "lucide-react";
import { styled } from "styled-components";
import { Container } from "../styles/common";

interface TermsOfServiceProps {
  onClose: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
  return (
    <Page>
      <Narrow>
        <BackButton onClick={onClose}>
          <BackIcon size={20} />
          <span>Back to Home</span>
        </BackButton>
        <Title>Terms of Service</Title>
        <Updated>Last updated: {new Date().toLocaleDateString()}</Updated>

        <Body>
          <section>
            <H2>1. Acceptance of Terms</H2>
            <p>
              By accessing and using TIKA.AI's services, you accept and agree to
              be bound by the terms and provision of this agreement. If you do
              not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <H2>2. Description of Services</H2>
            <p>
              TIKA.AI provides intelligent software solutions including but not
              limited to:
            </p>
            <List>
              <li>AI Agents development and implementation</li>
              <li>Web application development</li>
              <li>Process automation services</li>
              <li>ERP integration services</li>
              <li>Cloud solutions and infrastructure</li>
              <li>Digital transformation consulting</li>
            </List>
            <p>
              We reserve the right to modify, suspend, or discontinue any part
              of our services at any time with or without notice.
            </p>
          </section>

          <section>
            <H2>3. User Obligations</H2>
            <p>You agree to:</p>
            <List>
              <li>
                Provide accurate and complete information when engaging our
                services
              </li>
              <li>Use our services only for lawful purposes</li>
              <li>
                Not attempt to reverse engineer, decompile, or disassemble any
                software or technology provided
              </li>
              <li>
                Not interfere with or disrupt the integrity or performance of
                our services
              </li>
              <li>Comply with all applicable laws and regulations</li>
            </List>
          </section>

          <section>
            <H2>4. Intellectual Property Rights</H2>
            <p>
              All content, features, and functionality of our services,
              including but not limited to text, graphics, logos, software, and
              code, are owned by TIKA.AI and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
            <p>
              Unless otherwise specified in a separate agreement,
              custom-developed solutions remain the property of TIKA.AI until
              full payment is received, at which point ownership may transfer as
              specified in the project agreement.
            </p>
          </section>

          <section>
            <H2>5. Payment Terms</H2>
            <p>
              Payment terms will be specified in individual service agreements
              or project contracts. Unless otherwise agreed:
            </p>
            <List>
              <li>
                Invoices are due within the timeframe specified in the agreement
              </li>
              <li>Late payments may incur interest charges</li>
              <li>
                We reserve the right to suspend services for overdue accounts
              </li>
            </List>
          </section>

          <section>
            <H2>6. Limitation of Liability</H2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TIKA.AI SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
              INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE,
              GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p>
              Our total liability for any claims arising from or related to our
              services shall not exceed the amount paid by you to TIKA.AI in the
              twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <H2>7. Indemnification</H2>
            <p>
              You agree to indemnify, defend, and hold harmless TIKA.AI and its
              officers, directors, employees, and agents from and against any
              claims, damages, obligations, losses, liabilities, costs, or debt,
              and expenses (including attorney's fees) arising from your use of
              our services or violation of these Terms.
            </p>
          </section>

          <section>
            <H2>8. Confidentiality</H2>
            <p>
              Both parties agree to maintain the confidentiality of any
              proprietary or confidential information shared during the course
              of providing or receiving services. This obligation shall survive
              the termination of any service agreement.
            </p>
          </section>

          <section>
            <H2>9. Data Protection and Privacy</H2>
            <p>
              We are committed to protecting your data and privacy. Our
              collection, use, and protection of personal information is
              governed by our Privacy Policy. Personal data is processed in
              accordance with applicable data protection laws and the legal
              bases described in our Privacy Policy.
            </p>
          </section>

          <section>
            <H2>10. Service Availability</H2>
            <p>
              While we strive to ensure our services are available at all times,
              we do not guarantee uninterrupted or error-free service. We may
              perform scheduled or unscheduled maintenance that may temporarily
              interrupt service availability.
            </p>
          </section>

          <section>
            <H2>11. Termination</H2>
            <p>
              Either party may terminate a service agreement in accordance with
              the terms specified in the individual service agreement. We
              reserve the right to terminate or suspend access to our services
              immediately, without prior notice, for conduct that we believe
              violates these Terms or is harmful to other users, us, or third
              parties.
            </p>
          </section>

          <section>
            <H2>12. Dispute Resolution</H2>
            <p>
              Any disputes arising out of or relating to these Terms or our
              services shall be resolved through good faith negotiations. If a
              resolution cannot be reached, disputes shall be submitted to the
              competent courts in accordance with applicable law.
            </p>
          </section>

          <section>
            <H2>13. Governing Law</H2>
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws of the European Union and, where relevant, the
              laws of the jurisdiction in which TIKA.AI is established, without
              regard to conflict of law principles.
            </p>
          </section>

          <section>
            <H2>14. Changes to Terms</H2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the new Terms on
              this page and updating the "Last updated" date. Your continued use
              of our services after such modifications constitutes acceptance of
              the updated Terms.
            </p>
          </section>

          <section>
            <H2>15. Severability</H2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </section>

          <section>
            <H2>16. Contact Information</H2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us through our website contact form or at the contact
              information provided on our website.
            </p>
          </section>

          <FinePrint>
            <FinePrintText>
              These Terms of Service are subject to periodic review and may be
              updated to reflect changes in our services or applicable laws.
              Users are encouraged to review these terms regularly. For specific
              legal questions, please consult with qualified legal counsel.
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

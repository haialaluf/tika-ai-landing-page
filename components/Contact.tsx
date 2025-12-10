import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { SectionId } from "../types";
import { MapPin, Mail } from "lucide-react";
import { sendContactEmail } from "../services/emailService";
import { styled } from "styled-components";
import { Container } from "../styles/common";

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const Contact: React.FC = () => {
  // reCAPTCHA is optional - will be undefined if not configured
  const recaptcha = useGoogleReCaptcha();
  const executeRecaptcha = recaptcha?.executeRecaptcha;

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: "",
    company: "",
    industry: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid work email.",
      });
      return;
    }

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in both first and last name.",
      });
      return;
    }

    if (!formData.company.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your company name.",
      });
      return;
    }

    if (!formData.industry.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please select an industry.",
      });
      return;
    }

    if (!formData.country.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your country.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Get reCAPTCHA token (optional for spam protection)
      let recaptchaToken = "";
      const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

      // Only attempt reCAPTCHA if it's configured
      if (recaptchaSiteKey) {
        if (executeRecaptcha) {
          try {
            recaptchaToken = await executeRecaptcha("contact_form");
            if (!recaptchaToken) {
              console.warn("reCAPTCHA token was empty, continuing without it");
            }
          } catch (recaptchaError) {
            // Log error but don't block form submission
            // reCAPTCHA is a nice-to-have, not a hard requirement
            console.error("reCAPTCHA error:", recaptchaError);
            console.warn("Proceeding without reCAPTCHA verification");
          }
        } else {
          // reCAPTCHA is configured but not available (e.g., network issue, blocked)
          // Log warning but allow form submission to proceed
          console.warn(
            "reCAPTCHA is configured but not available, proceeding without it",
          );
        }
      }

      await sendContactEmail({
        ...formData,
        recaptchaToken,
      });
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        jobTitle: "",
        phone: "",
        company: "",
        industry: "",
        country: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id={SectionId.CONTACT}>
      <Content>
        <Layout>
          <Left>
            <Title>
              LET'S BUILD <br /> THE FUTURE.
            </Title>
            <Lead>
              Ready to transform your business with AI Agents, AI Voice Agents, and Custom
              Software? Reach out to us.
            </Lead>

            <InfoList>
              <InfoLink
                href="https://www.linkedin.com/company/106613237"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCircle>
                  <LinkedinIcon size={20} />
                </IconCircle>
                <InfoMeta>
                  <MetaLabel>LinkedIn</MetaLabel>
                  <MetaValue>TIKA.AI</MetaValue>
                </InfoMeta>
              </InfoLink>

              <InfoRow>
                <IconCircle>
                  <MapPin size={20} />
                </IconCircle>
                <InfoMeta>
                  <MetaLabel>Headquarters</MetaLabel>
                  <MetaValue>Stockholm, Sweden</MetaValue>
                </InfoMeta>
              </InfoRow>

              <InfoLink
                href={`mailto:${import.meta.env.TIKA_AI_EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCircle>
                  <Mail size={20} />
                </IconCircle>
                <InfoMeta>
                  <MetaLabel>Email</MetaLabel>
                  <MetaValue>{import.meta.env.TIKA_AI_EMAIL}</MetaValue>
                </InfoMeta>
              </InfoLink>
            </InfoList>
          </Left>

          <Right>
            <Card>
              <FormHeader>
                <FormTitle>Get in touch</FormTitle>
                <FormDescription>
                  Submit the form and our team will be in touch shortly.
                </FormDescription>
              </FormHeader>
              <Form onSubmit={handleSubmit} noValidate>
                <Field>
                  <Label>Work email *</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Work email"
                    required
                  />
                </Field>

                <TwoCol>
                  <Field>
                    <Label>First name *</Label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                    />
                  </Field>
                  <Field>
                    <Label>Last name *</Label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                    />
                  </Field>
                </TwoCol>

                <TwoCol>
                  <Field>
                    <Label>Job title</Label>
                    <Input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="Job title"
                    />
                  </Field>
                  <Field>
                    <Label>Phone number</Label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                    />
                  </Field>
                </TwoCol>

                <TwoCol>
                  <Field>
                    <Label>Company *</Label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      required
                    />
                  </Field>
                  <Field>
                    <Label>Industry *</Label>
                    <Select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      $empty={!formData.industry}
                    >
                      <option value="">Select an industry...</option>
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="Retail">Retail</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Education">Education</option>
                      <option value="Other">Other</option>
                    </Select>
                  </Field>
                </TwoCol>

                <Field>
                  <Label>Country *</Label>
                  <Input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    required
                  />
                </Field>

                {submitStatus.type && (
                  <StatusBox $type={submitStatus.type}>
                    <StatusText>{submitStatus.message}</StatusText>
                  </StatusBox>
                )}

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </SubmitButton>
              </Form>
              <PrivacyNote>
                We store and process the data in this form to respond to your
                request. For more information on how we use data, please refer
                to our Privacy policy.
              </PrivacyNote>
            </Card>
          </Right>
        </Layout>
      </Content>

      {/* Decorative large text background */}
      <BackgroundWord>TIKA.AI</BackgroundWord>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.gray[50]};
  color: ${({ theme }) => theme.colors.black};
`;

const Content = styled(Container)`
  position: relative;
  z-index: 10;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 50%;
  }
`;

const Right = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 50%;
  }
`;

const Title = styled.h2`
  margin: 0 0 32px;
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 56px;
  }
`;

const Lead = styled.p`
  margin: 0 0 48px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[600]};
  max-width: 448px;
  line-height: 1.6;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const InfoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.8;
  }
`;

const IconCircle = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const InfoMeta = styled.div``;

const MetaLabel = styled.p`
  margin: 0 0 2px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const MetaValue = styled.p`
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px 32px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  max-width: 512px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 48px 40px;
  }
`;

const FormHeader = styled.div`
  margin-bottom: 32px;
`;

const FormTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.black};
`;

const FormDescription = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PrivacyNote = styled.p`
  margin: 24px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Field = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const controlStyles = `
  width: 100%;
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  padding: 16px;
  outline: none;
  border-radius: 12px;
  transition: border-color 150ms ease;
  color: #000000;

  &::placeholder {
    color: #737373;
  }

  &:focus {
    border-color: #000;
  }
`;

const Input = styled.input`
  ${controlStyles}
`;

const Textarea = styled.textarea`
  ${controlStyles}
  resize: vertical;
`;

const Select = styled.select<{ $empty?: boolean }>`
  ${controlStyles}
  color: ${({ $empty }) => ($empty ? "#737373" : "#000000")};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
`;

const StatusBox = styled.div<{ $type: "success" | "error" }>`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid
    ${({ $type, theme }) =>
      $type === "success" ? theme.colors.green[500] : theme.colors.red[300]};
  background: ${({ $type, theme }) =>
    $type === "success" ? "rgba(34, 197, 94, 0.12)" : theme.colors.red[100]};
  color: ${({ $type, theme }) =>
    $type === "success" ? "#166534" : theme.colors.red[800]};
`;

const StatusText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;

const SubmitButton = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 0;
  font-size: 1.125rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  border-radius: 12px;
  transition:
    background 200ms ease,
    opacity 200ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[800]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BackgroundWord = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.gray[400]};
  opacity: 0.5;
  line-height: 0.9;
  margin-bottom: -8px;
  font-size: 15vw;
  user-select: none;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 18vw;
    opacity: 0.4;
    margin-bottom: -24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 20vw;
    opacity: 0.5;
    margin-bottom: -40px;
  }
`;

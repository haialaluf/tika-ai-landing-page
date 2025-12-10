import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  recaptchaToken?: string;
}

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<void> => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS configuration is missing. Please check your environment variables."
    );
  }

  // Initialize EmailJS
  emailjs.init(publicKey);

  // Prepare template parameters
  // These will be used in your EmailJS email template
  const templateParams = {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    first_name: formData.firstName,
    last_name: formData.lastName,
    message: formData.message,
    recaptcha_token: formData.recaptchaToken || "",
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
};

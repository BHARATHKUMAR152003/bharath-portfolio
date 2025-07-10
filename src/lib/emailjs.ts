import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: 'service_9a4978i',
  templateId: 'template_fcs2bgd',
  publicKey: '7RB2dLIVcdtJrzcsy',
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'bharathkumar94492@gmail.com',
  };

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams
  );
};
/**
 * Configuração central da odontologia For U - odontologia Especializada
 * Altere aqui os dados de contato, redes sociais, horários e mensagens.
 */

export interface ClinicConfig {
  name: string;
  tagline: string;
  phoneDisplay: string;
  phone: string;
  email: string;
  instagram: string;
  instagramUser: string;
  domain: string;
  whatsappMessage: string;
  hours: {
    segundaAQuinta: string;
    sexta: string;
  };
  address?: {
    city: string;
    state: string;
  };
}

export const clinicConfig: ClinicConfig = {
  name: "For U - Odontologia Especializada",
  tagline: "Sua experiência em saúde bucal e estética com exclusividade",
  phoneDisplay: "(11) 99349-8545",
  phone: "5511993498545",
  email: "consultorioodontorefi@gmail.com",
  instagram: "https://www.instagram.com/foruodontologia/",
  instagramUser: "@foruodontologia",
  domain: "https://foruodontologia.com.br",
  whatsappMessage: "Olá! Vim pelo site da For U - Odontologia Especializada e gostaria de mais informações.",
  hours: {
    segundaAQuinta: "8h às 18h",
    sexta: "8h às 17h",
  },
  address: {
    city: "São Paulo",
    state: "SP",
  },
};

/**
 * Retorna a URL formatada do WhatsApp com a mensagem codificada
 */
export function getWhatsAppUrl(message?: string): string {
  const msg = message || clinicConfig.whatsappMessage;
  const encodedMsg = encodeURIComponent(msg);
  return `https://wa.me/${clinicConfig.phone}?text=${encodedMsg}`;
}

/**
 * Retorna a URL do mailto
 */
export function getMailtoUrl(): string {
  return `mailto:${clinicConfig.email}`;
}

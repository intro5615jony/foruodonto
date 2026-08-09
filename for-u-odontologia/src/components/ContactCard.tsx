import React, { useState } from 'react';
import { MessageCircle, Mail, Clock, ExternalLink, Check, Copy } from 'lucide-react';
import { clinicConfig, getWhatsAppUrl, getMailtoUrl } from '../config/clinic';

export const ContactCard: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const whatsappUrl = getWhatsAppUrl();
  const mailtoUrl = getMailtoUrl();

  return (
    <section className="py-4 md:py-12 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Card Container: Outer box on Desktop, Transparent Wrapper on Mobile */}
        <div className="bg-transparent md:bg-white md:rounded-3xl md:border md:border-[#E6C89B]/40 md:shadow-xl md:shadow-[#A86E35]/5 p-0 md:p-8 lg:p-10 transition-all duration-300 md:hover:shadow-2xl md:hover:shadow-[#A86E35]/10">
          
          <div className="flex flex-col gap-4 md:grid md:grid-cols-[0.95fr_1.2fr_1fr] md:gap-0 md:divide-x md:divide-[#E6C89B]/30">
            
            {/* CARD 1 — WHATSAPP */}
            <div className="bg-white rounded-2xl md:rounded-none border border-[#E6C89B]/40 md:border-none p-5 sm:p-6 md:p-0 md:pr-6 lg:pr-8 shadow-sm shadow-[#A86E35]/5 md:shadow-none flex flex-col items-start justify-between space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F3] border border-[#E6C89B]/50 flex items-center justify-center text-[#A86E35] shadow-xs shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#A86E35]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl text-[#49382F] font-semibold">
                    WhatsApp
                  </h3>
                  <p className="text-xs text-[#746861] font-light">
                    Fale conosco agora
                  </p>
                </div>
              </div>

              <div className="w-full space-y-2 pt-1 sm:pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-[#49382F] hover:text-[#A86E35] transition-colors"
                >
                  <span>{clinicConfig.phoneDisplay}</span>
                  <ExternalLink className="w-4 h-4 text-[#C58A45] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A86E35] hover:text-[#815124] transition-colors"
                  >
                    Iniciar conversa &rarr;
                  </a>

                  {/* "Copiar" button hidden on mobile, visible on desktop */}
                  <button
                    onClick={() => handleCopy(clinicConfig.phoneDisplay, 'whatsapp')}
                    className="hidden md:inline-flex text-xs text-[#746861] hover:text-[#49382F] items-center gap-1 transition-colors"
                    title="Copiar telefone"
                  >
                    {copiedField === 'whatsapp' ? (
                      <span className="text-emerald-600 inline-flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copiado
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Copy className="w-3 h-3" /> Copiar
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2 — E-MAIL */}
            <div className="bg-white rounded-2xl md:rounded-none border border-[#E6C89B]/40 md:border-none p-5 sm:p-6 md:p-0 md:px-6 lg:px-8 shadow-sm shadow-[#A86E35]/5 md:shadow-none flex flex-col items-start justify-between space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F3] border border-[#E6C89B]/50 flex items-center justify-center text-[#A86E35] shadow-xs shrink-0">
                  <Mail className="w-6 h-6 text-[#A86E35]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl text-[#49382F] font-semibold">
                    E-mail
                  </h3>
                  <p className="text-xs text-[#746861] font-light">
                    Envie sua mensagem
                  </p>
                </div>
              </div>

              <div className="w-full space-y-2 pt-1 sm:pt-2">
                <a
                  href={mailtoUrl}
                  className="group inline-flex items-center gap-1.5 text-[clamp(0.72rem,3.4vw,0.95rem)] sm:text-base md:text-[clamp(0.75rem,0.95vw,0.95rem)] lg:text-[0.95rem] font-medium text-[#49382F] hover:text-[#A86E35] transition-colors whitespace-nowrap tracking-tight max-w-full"
                >
                  <span className="truncate">{clinicConfig.email}</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C58A45] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A86E35] hover:text-[#815124] transition-colors"
                  >
                    Enviar e-mail &rarr;
                  </a>

                  {/* "Copiar" button hidden on mobile, visible on desktop */}
                  <button
                    onClick={() => handleCopy(clinicConfig.email, 'email')}
                    className="hidden md:inline-flex text-xs text-[#746861] hover:text-[#49382F] items-center gap-1 transition-colors"
                    title="Copiar e-mail"
                  >
                    {copiedField === 'email' ? (
                      <span className="text-emerald-600 inline-flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copiado
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Copy className="w-3 h-3" /> Copiar
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 3 — HORÁRIOS */}
            <div className="bg-white rounded-2xl md:rounded-none border border-[#E6C89B]/40 md:border-none p-5 sm:p-6 md:p-0 md:pl-6 lg:pl-8 shadow-sm shadow-[#A86E35]/5 md:shadow-none flex flex-col items-start justify-between space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F3] border border-[#E6C89B]/50 flex items-center justify-center text-[#A86E35] shadow-xs shrink-0">
                  <Clock className="w-6 h-6 text-[#A86E35]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl text-[#49382F] font-semibold">
                    Horários de atendimento
                  </h3>
                  <p className="text-xs text-[#746861] font-light">
                    Atendimento presencial e agendamentos
                  </p>
                </div>
              </div>

              <div className="w-full space-y-1.5 pt-1 sm:pt-2 text-sm text-[#49382F]">
                <div className="flex justify-between items-center py-1 border-b border-[#FAF7F3]">
                  <span className="font-medium text-[#746861]">Segunda a quinta:</span>
                  <span className="font-semibold text-[#49382F] bg-[#FAF7F3] px-2.5 py-0.5 rounded-md border border-[#E6C89B]/30 whitespace-nowrap">
                    {clinicConfig.hours.segundaAQuinta}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-[#746861]">Sexta-feira:</span>
                  <span className="font-semibold text-[#49382F] bg-[#FAF7F3] px-2.5 py-0.5 rounded-md border border-[#E6C89B]/30 whitespace-nowrap">
                    {clinicConfig.hours.sexta}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import { useState } from "react";
import backgroundImg from "./img/background.png";
import logoImg from "./img/logo.svg";

// Ícones simples em SVG
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
);

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="18,15 12,9 6,15"></polyline>
  </svg>
);

const MessageCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
  </svg>
);

const MapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Clock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
);

const Instagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const MoonIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path
      d="M21 16C21 19.866 17.866 23 14 23C10.134 23 7 19.866 7 16C7 12.134 10.134 9 14 9C15.5 9 16.9 9.5 18 10.4C17.1 10.1 16.1 10 15 10C11.7 10 9 12.7 9 16C9 19.3 11.7 22 15 22C17.4 22 19.4 20.5 20.2 18.4C20.7 17.6 21 16.8 21 16Z"
      fill="currentColor"
    />
  </svg>
);

const services = [
  {
    id: "banho-gel",
    name: "Banho de Gel",
    description: "Fortalecimento e brilho duradouro",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    procedure: "Aplicação de gel sobre a unha natural para proteção e brilho",
    effect: "Unhas mais fortes e com aparência natural",
    duration: "45-60 minutos",
    application: "R$ 35,00",
    maintenance: "R$ 25,00 (a cada 15 dias)",
    additionals: ["Remoção: R$ 15,00", "Francesinha: +R$ 10,00"],
  },
  {
    id: "esmaltacao-gel",
    name: "Esmaltação em Gel",
    description: "Cor vibrante que dura até 3 semanas",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=300&fit=crop",
    procedure: "Aplicação de esmalte em gel com secagem em cabine UV/LED",
    effect: "Cor intensa e duradoura sem descascar",
    duration: "60-75 minutos",
    application: "R$ 45,00",
    maintenance: "R$ 35,00 (a cada 20 dias)",
    additionals: ["Remoção: R$ 20,00", "Nail art: +R$ 15,00", "Glitter: +R$ 8,00"],
  },
  {
    id: "unha-tradicional",
    name: "Unha Tradicional",
    description: "Cuidado clássico para suas unhas",
    image: "https://images.unsplash.com/photo-1599948128020-9a44d1f0824a?w=400&h=300&fit=crop",
    procedure: "Cuidados básicos + esmaltação tradicional",
    effect: "Unhas bem cuidadas e com cor",
    duration: "30-45 minutos",
    application: "R$ 25,00",
    maintenance: "R$ 20,00 (a cada 7-10 dias)",
    additionals: ["Cutilagem: incluído", "Lixa e formato: incluído"],
  },
  {
    id: "spa-pes",
    name: "SPA dos Pés",
    description: "Relaxamento e cuidado completo",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    procedure: "Escalda-pés + esfoliação + hidratação + esmaltação",
    effect: "Pés macios, relaxados e bem cuidados",
    duration: "75-90 minutos",
    application: "R$ 55,00",
    maintenance: "R$ 45,00 (a cada 20-25 dias)",
    additionals: ["Remoção de calos: +R$ 15,00", "Parafina: +R$ 20,00"],
  },
];

export default function App() {
  const [openService, setOpenService] = useState<string | null>(null);
  const [showCareGuide, setShowCareGuide] = useState(false);

  const handleWhatsApp = (message: string) => {
    const phone = "5511959854244";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-mila-cream">
      <div className="max-w-md mx-auto bg-mila-white shadow-xl min-h-screen">
        {/* Header */}
        <div className="relative h-80 bg-gradient-to-br from-mila-terracotta via-mila-sage to-mila-teal overflow-hidden">
          <img
            src={backgroundImg}
            alt="Mila Cruz Studio"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mila-terracotta/40 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-mila-white text-center px-6">
            <img src={logoImg} alt="Logo" style={{width: '30px', height: '30px'}} className="mb-4" />
            <h1 className="text-4xl mb-2 font-medium">Mila Cruz</h1>
            <p className="text-lg opacity-95 mb-3">Sua beleza em boas mãos</p>
            <span className="badge bg-mila-white" style={{color: '#305369'}}>Studio de Manicure</span>
          </div>
        </div>

        {/* Apresentação */}
        <div className="p-6 -mt-8 relative z-10">
          <div className="card mb-6 shadow-xl">
            <div className="card-header text-center pb-4">
              <h2 className="text-xl text-mila-terracotta font-semibold">Olá, eu sou a Milena!</h2>
              <p className="text-base text-mila-dark-brown">
                Manicure especializada em técnicas modernas há mais de 6 anos. Atendo em São Paulo com muito
                carinho e dedicação para deixar suas unhas sempre perfeitas.
              </p>
            </div>
            <div className="card-content">
              <button
                onClick={() => handleWhatsApp("Olá! Gostaria de agendar um horário")}
                className="w-full bg-mila-terracotta hover:bg-mila-terracotta text-mila-white shadow-lg size-lg flex items-center justify-center gap-2"
              >
                <MessageCircle />
                Agendar pelo WhatsApp
              </button>
            </div>
          </div>

          {/* Catálogo */}
          <div className="mb-6">
            <h2 className="text-2xl text-mila-teal mb-2 text-center font-bold">Meus Procedimentos</h2>
            <p className="text-center mb-6" style={{color: '#305369'}}>
              Descubra os tratamentos que vão transformar suas unhas
            </p>

            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="card overflow-hidden shadow-lg">
                  <div
                    className="cursor-pointer hover:bg-mila-cream transition-colors"
                    onClick={() => setOpenService(openService === service.id ? null : service.id)}
                  >
                    <div className="flex">
                      <div className="w-24 flex-shrink-0">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="card-header flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg text-mila-terracotta font-semibold">{service.name}</h3>
                            <p className="text-mila-dark-brown">{service.description}</p>
                          </div>
                          {openService === service.id ? <ChevronUp /> : <ChevronDown />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {openService === service.id && (
                    <div className="card-content pt-0 space-y-4">
                      <div className="separator" />

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-mila-teal mb-1">Como funciona:</h4>
                          <p className="text-sm text-mila-dark-brown">{service.procedure}</p>
                        </div>

                        <div>
                          <h4 className="font-medium text-mila-teal mb-1">Efeito:</h4>
                          <p className="text-sm text-mila-dark-brown">{service.effect}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <h4 className="font-medium text-mila-teal">Duração:</h4>
                            <p className="text-mila-dark-brown">{service.duration}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-mila-teal">Aplicação:</h4>
                            <p className="text-mila-dark-brown">{service.application}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-mila-teal mb-1">Manutenção:</h4>
                          <p className="text-sm text-mila-dark-brown">{service.maintenance}</p>
                        </div>

                        {service.additionals.length > 0 && (
                          <div>
                            <h4 className="font-medium text-mila-teal mb-2">Adicionais:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.additionals.map((additional, index) => (
                                <span
                                  key={index}
                                  className="badge text-xs bg-mila-sage text-mila-teal border-mila-sage"
                                >
                                  {additional}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleWhatsApp(`Olá! Gostaria de agendar: ${service.name}`)}
                        className="w-full bg-mila-terracotta hover:bg-mila-terracotta text-mila-white mt-4 shadow-lg"
                      >
                        Agendar {service.name}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Endereço e Horários */}
          <div className="card mb-6 shadow-lg">
            <div className="card-header">
              <h2 className="text-xl text-mila-teal flex items-center gap-2">
                <MapPin />
                Onde me encontrar
              </h2>
            </div>
            <div className="card-content space-y-4">
              <div>
                <h4 className="font-medium text-mila-terracotta mb-1">Studio:</h4>
                <p className="text-sm text-mila-dark-brown">
                  Rua Manuel Bicudo, 300<br />
                  Apartamento 104, Bloco B<br />
                  São Paulo - SP
                </p>
              </div>

              <div>
                <h4 className="font-medium text-mila-terracotta mb-1">Atendimento Domiciliar:</h4>
                <p className="text-sm text-mila-dark-brown">
                  Disponível sob consulta<br />
                  <span className="text-xs">(taxa de deslocamento à combinar)</span>
                </p>
              </div>

              <div className="separator" />

              <div>
                <h4 className="font-medium text-mila-terracotta mb-2 flex items-center gap-2">
                  <Clock />
                  Horários de Atendimento:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-mila-dark-brown">
                  <div>Segunda a Sexta: 9h às 18h</div>
                  <div>Sábado: 9h às 16h</div>
                  <div className="col-span-2">Domingo: Fechado</div>
                </div>
              </div>

              <button
                onClick={() => handleWhatsApp("Olá! Gostaria de saber sobre disponibilidade de horários")}
                className="w-full border border-mila-teal text-mila-teal hover:bg-mila-teal"
              >
                Verificar Disponibilidade
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-4 pb-8">
            <div className="separator" />
            <p className="text-sm" style={{color: '#A34924'}}>Feito com carinho para você</p>
            <div className="flex justify-center">
              <button
                onClick={() => handleWhatsApp("Oi! Vi seu site e gostaria de saber mais sobre seus trabalhos")}
                className="text-mila-teal hover:bg-mila-teal flex items-center gap-2 text-sm p-2"
              >
                <Instagram />
                Siga no Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
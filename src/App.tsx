import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/ui/collapsible";
import { Separator } from "./components/ui/separator";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";


const services = [
  {
    id: "banho-gel",
    name: "Banho de Gel",
    description: "Fortalecimento e brilho duradouro",
    image:
      "https://images.unsplash.com/photo-1684459567928-d50c76f5d8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlsJTIwbWFuaWN1cmUlMjBoYW5kc3xlbnwxfHx8fDE3NTY0MTExODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    procedure:
      "Aplicação de gel sobre a unha natural para proteção e brilho",
    effect: "Unhas mais fortes e com aparência natural",
    duration: "45-60 minutos",
    application: "R$ 35,00",
    maintenance: "R$ 25,00 (a cada 15 dias)",
    additionals: [
      "Remoção: R$ 15,00",
      "Francesinha: +R$ 10,00",
    ],
  },
  {
    id: "esmaltacao-gel",
    name: "Esmaltação em Gel",
    description: "Cor vibrante que dura até 3 semanas",
    image:
      "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlsJTIwcG9saXNoJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU2NDExMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    procedure:
      "Aplicação de esmalte em gel com secagem em cabine UV/LED",
    effect: "Cor intensa e duradoura sem descascar",
    duration: "60-75 minutos",
    application: "R$ 45,00",
    maintenance: "R$ 35,00 (a cada 20 dias)",
    additionals: [
      "Remoção: R$ 20,00",
      "Nail art: +R$ 15,00",
      "Glitter: +R$ 8,00",
    ],
  },
  {
    id: "unha-tradicional",
    name: "Unha Tradicional",
    description: "Cuidado clássico para suas unhas",
    image:
      "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMG5haWwlMjBwb2xpc2glMjBtYW5pY3VyZXxlbnwxfHx8fDE3NTY0MTExODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    procedure: "Cuidados básicos + esmaltação tradicional",
    effect: "Unhas bem cuidadas e com cor",
    duration: "30-45 minutos",
    application: "R$ 25,00",
    maintenance: "R$ 20,00 (a cada 7-10 dias)",
    additionals: [
      "Cutilagem: incluído",
      "Lixa e formato: incluído",
    ],
  },
  {
    id: "spa-pes",
    name: "SPA dos Pés",
    description: "Relaxamento e cuidado completo",
    image:
      "https://images.unsplash.com/photo-1739643502069-07e2fec97a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290JTIwc3BhJTIwcGVkaWN1cmUlMjByZWxheGluZ3xlbnwxfHx8fDE3NTY0MTExODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    procedure:
      "Escalda-pés + esfoliação + hidratação + esmaltação",
    effect: "Pés macios, relaxados e bem cuidados",
    duration: "75-90 minutos",
    application: "R$ 55,00",
    maintenance: "R$ 45,00 (a cada 20-25 dias)",
    additionals: [
      "Remoção de calos: +R$ 15,00",
      "Parafina: +R$ 20,00",
    ],
  },
];

const careGuide = [
  {
    title: "Quanto tempo dura cada técnica?",
    content:
      "Banho de gel: 2-3 semanas | Esmaltação em gel: 3-4 semanas | Unha tradicional: 7-10 dias | SPA dos pés: 3-4 semanas",
  },
  {
    title: "Por que escolher esses procedimentos?",
    content:
      "Os procedimentos em gel oferecem maior durabilidade, resistência e proteção para suas unhas naturais, além de um acabamento profissional impecável.",
  },
  {
    title: "Mitos sobre o gel",
    content:
      "MITO: O gel estraga a unha. VERDADE: Quando aplicado e removido corretamente, o gel protege e fortalece a unha natural.",
  },
];

export default function App() {
  const [openService, setOpenService] = useState<string | null>(
    null,
  );
  const [showCareGuide, setShowCareGuide] = useState(false);

  const handleWhatsApp = (message: string) => {
    const phone = "5511959854244"; // Substituir pelo número real
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phone}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-mila-cream">
      <div className="max-w-md mx-auto bg-mila-white/95 backdrop-blur-sm min-h-screen shadow-xl">
        {/* Header */}
        <div className="relative h-80 from-mila-terracotta via-mila-sage to-mila-teal overflow-hidden background">
    
          <div className="absolute inset-0 bg-gradient-to-t from-mila-dark-brown/80 via-mila-terracotta/60 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-mila-white text-center px-6">
            <h1
              className="text-4xl mb-2"
              style={{ fontWeight: 500 }}
            >
              Mila Cruz
            </h1>
            <p className="text-lg opacity-95 mb-3">
              Sua beleza em boas mãos
            </p>
            <Badge
              variant="secondary"
              className="bg-mila-white/20 text-mila-white border-mila-white/30 backdrop-blur-sm"
            >
              Studio de Manicure
            </Badge>
          </div>
        </div>

        {/* Apresentação */}
        <div className="p-6 -mt-8 relative z-10">
          <Card className="mb-6 shadow-xl border-mila-sage/20 bg-mila-white">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-mila-terracotta">
                Olá, eu sou a Milena!
              </CardTitle>
              <CardDescription className="text-base text-mila-dark-brown">
                Manicure especializada em técnicas modernas há
                mais de 6 anos. Atendo em São Paulo com muito
                carinho e dedicação para deixar suas unhas
                sempre perfeitas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() =>
                  handleWhatsApp(
                    "Olá! Gostaria de agendar um horário",
                  )
                }
                className="w-full bg-mila-terracotta hover:bg-mila-terracotta/90 text-mila-white shadow-lg"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar pelo WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Catálogo */}
          <div className="mb-6">
            <h2
              className="text-2xl text-mila-teal mb-2 text-center"
              style={{ fontWeight: 700 }}
            >
              Meus Procedimentos
            </h2>
            <p className="text-center text-mila-sage mb-6">
              Descubra os tratamentos que vão transformar suas
              unhas
            </p>

            <div className="space-y-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="overflow-hidden border-mila-sage/20 bg-mila-white shadow-lg"
                >
                  <Collapsible
                    open={openService === service.id}
                    onOpenChange={() =>
                      setOpenService(
                        openService === service.id
                          ? null
                          : service.id,
                      )
                    }
                  >
                    <CollapsibleTrigger asChild>
                      <div className="cursor-pointer hover:bg-mila-cream/30 transition-colors">
                        <div className="flex">
                          <div className="w-24 h-24 flex-shrink-0">
                            <ImageWithFallback
                              src={service.image}
                              alt={service.name}
                              className="w-full h-full object-cover rounded-l-lg"
                            />
                          </div>
                          <CardHeader className="flex-1 pb-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <CardTitle className="text-lg text-mila-terracotta">
                                  {service.name}
                                </CardTitle>
                                <CardDescription className="text-mila-dark-brown">
                                  {service.description}
                                </CardDescription>
                              </div>
                              {openService === service.id ? (
                                <ChevronUp className="w-5 h-5 text-mila-teal" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-mila-teal" />
                              )}
                            </div>
                          </CardHeader>
                        </div>
                      </div>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <CardContent className="pt-0 space-y-4">
                        <Separator className="bg-mila-sage/20" />

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-mila-teal mb-1">
                              Como funciona:
                            </h4>
                            <p className="text-sm text-mila-dark-brown">
                              {service.procedure}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium text-mila-teal mb-1">
                              Efeito:
                            </h4>
                            <p className="text-sm text-mila-dark-brown">
                              {service.effect}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <h4 className="font-medium text-mila-teal">
                                Duração:
                              </h4>
                              <p className="text-mila-dark-brown">
                                {service.duration}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium text-mila-teal">
                                Aplicação:
                              </h4>
                              <p className="text-mila-dark-brown">
                                {service.application}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-mila-teal mb-1">
                              Manutenção:
                            </h4>
                            <p className="text-sm text-mila-dark-brown">
                              {service.maintenance}
                            </p>
                          </div>

                          {service.additionals.length > 0 && (
                            <div>
                              <h4 className="font-medium text-mila-teal mb-2">
                                Adicionais:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {service.additionals.map(
                                  (additional, index) => (
                                    <Badge
                                      key={index}
                                      variant="secondary"
                                      className="text-xs bg-mila-sage/20 text-mila-teal border-mila-sage/30"
                                    >
                                      {additional}
                                    </Badge>
                                  ),
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        <Button
                          onClick={() =>
                            handleWhatsApp(
                              `Olá! Gostaria de agendar: ${service.name}`,
                            )
                          }
                          className="w-full bg-mila-terracotta hover:bg-mila-terracotta/90 text-mila-white mt-4 shadow-lg"
                        >
                          Agendar {service.name}
                        </Button>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>

          {/* Endereço e Horários */}
          <Card className="mb-6 border-mila-sage/20 bg-mila-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-mila-teal flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Onde me encontrar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-mila-terracotta mb-1">
                  Studio:
                </h4>
                <p className="text-sm text-mila-dark-brown">
                  Rua Manuel Bicudo, 300
                  <br />
                  Apartamento 104, Bloco B<br />
                  São Paulo - SP
                </p>
              </div>

              <div>
                <h4 className="font-medium text-mila-terracotta mb-1">
                  Atendimento Domiciliar:
                </h4>
                <p className="text-sm text-mila-dark-brown">
                  Disponível sob consulta
                  <br />
                  <span className="text-xs">
                    (taxa de deslocamento à combinar)
                  </span>
                </p>
              </div>

              <Separator className="bg-mila-sage/20" />

              <div>
                <h4 className="font-medium text-mila-terracotta mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Horários de Atendimento:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-mila-dark-brown">
                  <div>Segunda a Sexta: 9h às 18h</div>
                  <div>Sábado: 9h às 16h</div>
                  <div className="col-span-2">
                    Domingo: Fechado
                  </div>
                </div>
              </div>

              <Button
                onClick={() =>
                  handleWhatsApp(
                    "Olá! Gostaria de saber sobre disponibilidade de horários",
                  )
                }
                variant="outline"
                className="w-full border-mila-teal text-mila-teal hover:bg-mila-teal/10"
              >
                Verificar Disponibilidade
              </Button>
            </CardContent>
          </Card>

          {/* Guia de Cuidados */}
          <Card className="mb-6 border-mila-sage/20 bg-mila-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-mila-teal">
                Guia de Cuidados
              </CardTitle>
              <CardDescription className="text-mila-dark-brown">
                Informações importantes sobre os procedimentos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible
                open={showCareGuide}
                onOpenChange={setShowCareGuide}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between border-mila-teal text-mila-teal hover:bg-mila-teal/10"
                  >
                    Ver Informações Importantes
                    {showCareGuide ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="mt-4 space-y-4">
                  {careGuide.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-mila-cream/50 rounded-lg border border-mila-sage/20"
                    >
                      <h4 className="font-medium text-mila-terracotta mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-mila-dark-brown">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center space-y-4 pb-8">
            <Separator className="bg-mila-sage/20" />
            <p className="text-sm text-mila-sage">
              Feito com carinho para você
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                size="sm"
                variant="ghost"
                onClick={() =>
                  handleWhatsApp(
                    "Oi! Vi seu site e gostaria de saber mais sobre seus trabalhos",
                  )
                }
                className="text-mila-teal hover:bg-mila-teal/10"
              >
                <Instagram className="w-4 h-4 mr-1" />
                Siga no Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
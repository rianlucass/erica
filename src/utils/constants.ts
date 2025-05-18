import { Message, MomentImage, Game, FuturePlan } from '../types';
import { Heart, Gamepad2, MapPin, Users, Gift, Home } from 'lucide-react';

// Anniversary date
export const ANNIVERSARY_DATE = new Date('2024-05-18T00:00:00');

// Heart messages
export const MESSAGES: Message[] = [
  {
    id: 1,
    text: "Vai ter que me aguentar por mais tempo, viu?"
  },
  {
    id: 2,
    text: "Amo cada momento que passamos juntos"
  },
  {
    id: 3,
    text: "Com você até segunda-feira fica bomm!"
  },
  {
    id: 4,
    text: "Você é a razão do meu sorriso"
  },
  {
    id: 5,
    text: "Te amo muito muito(sempre bom dizer bastante para não esquecer)!"
  },
  {
    id: 6,
    text: "Você é o meu player 2 para sempre"
  },
  {
    id: 7,
    text: "Quero sempre estar com você!!"
  },
  {
    id: 8,
    text: "Você é a melhor coisa que já me aconteceu"
  }
];

// Carousel images - using Pexels stock photos as placeholders
export const MOMENTS: MomentImage[] = [
  {
    id: 1,
    url: "",
    captions: [
    "Tudo fica melhor do seu lado ❤️"
    ]
  },
  {
    id: 2,
    url: "",
    captions: [
      "Saudade desse seu sorriso! ❤️"
    ]
  },
  {
    id: 3,
    url: "",
    captions: [
      "Jogando e sorrindo junto com você ❤️"
    ]
  },
  {
    id: 4,
    url: "",
    captions: [
      "Amo cada detalhe seu❤️"
    ]
  }
];

// Games we play
export const GAMES: Game[] = [
  {
    id: 1,
    title: "It Takes Two",
    description: "100% de compatibilidade",
    progress: 100,
    icon: "🎮"
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    description: "Casal mais selvagem do Oeste Americano ❤️🤠🤠",
    progress: 100,
    icon: "🤠"
  },
  {
    id: 3,
    title: "A Way Out",
    description: "Fugindo juntos da prisão 🏃‍♂️🏃‍♀️❤️",
    progress: 100,
    icon: "🚔"
  },
  {
    id: 4,
    title: "Forza Horizon 5",
    description: "Minha piloto favorita ❤️",
    progress: 100,
    icon: "🏎️"
  },
  {
    id: 5,
    title: "Brawl Stars",
    description: "Minha parceira de batalha em busca do Mitico kkkkkkk🥵",
    progress: 80,
    icon: "⚔️"
  },
  {
    id: 6,
    title: "Red Dead Redemption 1",
    description: "Ainda jogaremos viuu 🥵",
    progress: 0,
    icon: "🤠"
  }
];

// Future plans
export const FUTURE_PLANS: FuturePlan[] = [
  {
    id: 1,
    year: "Eu te amoo",
    description: "Eu escolho você todos os dias, sem dúvidas."
  },
  {
    id: 2,
    year: "Meu amor!!!",
    description: "Estar ao seu lado é meu lugar favorito no mundo."
  },
  {
    id: 3,
    year: "Minha princesa",
    description: "Obrigado por ser quem você é, do jeito que eu amo."
  }
];

// Icons for nav
export const NAV_ITEMS = [
  {
    id: 'hero',
    icon: Heart,
    label: 'Início'
  },
  {
    id: 'messages',
    icon: Gift,
    label: 'Mensagens'
  },
  {
    id: 'moments',
    icon: Users,
    label: 'Momentos'
  },
  {
    id: 'games',
    icon: Gamepad2,
    label: 'Jogos'
  },
  {
    id: 'future',
    icon: MapPin,
    label: 'Mais Mensagens'
  },
  {
    id: 'footer',
    icon: Home,
    label: 'Final'
  }
];

// Surprise modal message
export const SURPRISE_MESSAGE = "Oiii amor da minha vida, essa mensagem é pra você lembrar que eu te amo muitooo, que sou a pessoa mais feliz do mundo quando estou ao seu lado, nunca se esqueça disso viu!!!❤️❤️❤️❤️";
export interface Message {
  id: number;
  text: string;
}

export interface MomentImage {
  id: number;
  url: string;
  captions: string[];
}

export interface Game {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon: string;
}

export interface FuturePlan {
  id: number;
  year: string;
  description: string;
}
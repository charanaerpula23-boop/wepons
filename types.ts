export interface Lot {
  id: string;
  name: string;
  category: 'Kinetic' | 'Armored' | 'Aerial' | 'Maritime';
  description: string;
  price: string;
  image: string;
  details: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  ESSENCE = 'Essence',
  COLLECTION = 'Collection',
  PROTOCOL = 'Protocol',
  CONCIERGE = 'Concierge'
}
export interface PricingData {
  planName: string;
  price: number;
  features: string[];
}

export interface FeatureList {
  title: string;
  description: string;
}

export interface Testimonial {
  clientName: string;
  feedback: string;
  clientImage: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
}

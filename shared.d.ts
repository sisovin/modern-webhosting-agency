interface User {
  username: string;
  email: string;
  password: string;
  date_joined: Date;
}

interface HostingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
}

interface Domain {
  name: string;
  registration_date: Date;
  expiry_date: Date;
}

interface Testimonial {
  author: string;
  content: string;
  date: Date;
}

interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

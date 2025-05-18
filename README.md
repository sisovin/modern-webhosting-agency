# Modern Webhosting Agency

A full-stack web application for a modern webhosting agency, built as a monorepo containing a Next.js 15 frontend with TypeScript in strict mode and a Django backend.

## 📋 Table of Contents

- [Repository Structure](#repository-structure)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Development Workflow](#development-workflow)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 📁 Repository Structure

This project follows a monorepo structure:

```
modern-webhosting-agency/
├── frontend/                 # Next.js frontend application
│   ├── app/                  # App Router structure
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Utility functions and shared logic
│   ├── public/               # Static assets
│   ├── styles/               # Global styles
│   ├── next.config.js        # Next.js configuration
│   ├── package.json          # Frontend dependencies
│   └── tsconfig.json         # TypeScript configuration
│
├── backend/                  # Django backend application
│   ├── api/                  # API endpoints
│   ├── core/                 # Core application functionality
│   ├── config/               # Django settings
│   ├── manage.py             # Django management script
│   └── requirements.txt      # Backend dependencies
│
├── docker/                   # Docker configuration
│   ├── frontend/             # Frontend Docker setup
│   └── backend/              # Backend Docker setup
│
├── .github/                  # GitHub workflows and templates
├── docker-compose.yml        # Docker Compose configuration
└── README.md                 # This file
```

## 🔧 Technologies

### Frontend
- Next.js 15 with App Router
- TypeScript (Strict Mode)
- React
- TailwindCSS
- ESLint & Prettier

### Backend
- Django
- Django REST Framework
- PostgreSQL
- Celery (for task management)

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18.17 or later)
- npm or yarn
- Python (3.10 or later)
- Pip
- PostgreSQL
- Docker & Docker Compose (optional, for containerized setup)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The frontend will be available at [http://localhost:3000](http://localhost:3000).

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   # For Linux/Mac
   python -m venv venv
   source venv/bin/activate

   # For Windows
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   
5. Update the database settings in the `.env` file.

6. Apply migrations:
   ```bash
   python manage.py migrate
   ```

7. Create a superuser (admin):
   ```bash
   python manage.py createsuperuser
   ```

8. Start the development server:
   ```bash
   python manage.py runserver
   ```

   The Django admin will be available at [http://localhost:8000/admin](http://localhost:8000/admin).
   The API will be available at [http://localhost:8000/api](http://localhost:8000/api).

### Docker Setup (Optional)

To run the entire stack using Docker:

1. Make sure Docker and Docker Compose are installed.

2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

   This will start both the frontend and backend services, along with a PostgreSQL database.

## 💻 Development Workflow

### Frontend

- The frontend uses Next.js 15's App Router for routing
- TypeScript strict mode is enabled for type safety
- Components should be created in the `components` directory
- Pages are defined in the `app` directory following Next.js 15 conventions
- API calls should use the API services in `lib/api`

### Backend

- Django's model-view-template architecture is used
- API endpoints are defined using Django REST Framework
- Database migrations should be created when models change
- Test coverage is encouraged for all new features

## 🔌 API Integration

The frontend communicates with the backend through RESTful API endpoints.

Example of API integration in the frontend:

```typescript
// lib/api/clients.ts
import { fetchApi } from './fetch';
import type { Client } from '@/types';

export const getClients = async (): Promise<Client[]> => {
  return fetchApi('/api/clients/');
};

export const getClient = async (id: string): Promise<Client> => {
  return fetchApi(`/api/clients/${id}/`);
};
```

## 📦 Deployment

### Frontend Deployment

The Next.js application can be deployed to Vercel:

1. Connect your GitHub repository to Vercel
2. Configure the environment variables
3. Deploy from the Vercel dashboard

### Backend Deployment

The Django application can be deployed to a server using:

1. Setup a server with Docker installed
2. Configure environment variables
3. Run Docker Compose in production mode:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

## 👥 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

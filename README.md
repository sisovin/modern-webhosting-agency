# Modern Webhosting Agency

This repository contains the codebase for a modern web hosting agency project. It includes both frontend and backend applications, as well as necessary configurations for Docker and pnpm workspace.

## Project Structure

```
├── .gitignore
├── apps/
│   ├── frontend/
│   │   │   ├── app/     # App Router
│   │   │   │   ├── (main)/
│   │   │   │   │   ├── page.tsx              # Homepage
│   │   ├── next.config.js
│   │   ├── package.json
│   │   ├── postcss.config.js
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   └── backend/
│       ├── core/
│       │   ├── migrations/
│       │   ├── __init__.py
│       │   ├── admin.py
│       │   ├── apps.py
│       │   ├── models.py
│       │   ├── serializers.py
│       │   ├── urls.py
│       │   └── views.py
├── docker-compose.yml
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

## Setup and Run

### Prerequisites

- Docker
- pnpm

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Start the development environment:
   ```
   docker-compose up
   ```

4. Access the frontend application at `http://localhost:3000` and the backend application at `http://localhost:8000`.

## Contributing

We welcome contributions to this project. Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a clear message.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

Thank you for your contributions!

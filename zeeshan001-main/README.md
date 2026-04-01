# Zeeshan Younas Portfolio

Personal portfolio website for Zeeshan Younas (Data Scientist, AI Engineer, Kaggle Grandmaster).  
Built with React + TypeScript + Vite, featuring modern UI animations, multi-page routing, and dedicated sections for projects, skills, experience, and contact.

## Live Demo

- Portfolio: https://zeeshn-portoflio.vercel.app/

## Highlights

- Modern responsive portfolio UI
- Dedicated pages: Home, About, Skills, Projects, Experience, Contact
- Animated interactions using Framer Motion
- Project showcase with category filters and detailed modal view
- CV section with view and download support
- Clean component architecture with reusable UI blocks

## Featured Project Categories

- AI Systems
- Machine Learning
- Computer Vision
- Automation
- Data Platforms

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui (Radix primitives)
- Framer Motion
- React Router DOM
- TanStack Query
- Vitest + Testing Library

## Project Structure

```text
src/
	components/       # Reusable sections and UI components
	pages/            # Route-level pages (About, Skills, Projects, etc.)
	hooks/            # Custom hooks
	lib/              # Utility helpers
	test/             # Test setup and test files
```

## Getting Started

### 1. Clone

```bash
git clone https://github.com/Zeeshan5932/ZeeshanYounas001.git
cd zeeshan001-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Dev Server

```bash
npm run dev
```

Open the local URL shown in terminal (usually http://localhost:5173).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run build:dev` - create development-mode build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint
- `npm run test` - run tests once
- `npm run test:watch` - run tests in watch mode

## Customization Notes

- Main routes are configured in `src/App.tsx`.
- Project data and CV section are managed in `src/pages/ProjectsPage.tsx`.
- Navbar branding is in `src/components/Navbar.tsx`.
- Footer branding and social links are in `src/components/Footer.tsx`.
- Contact details are in `src/components/ContactSection.tsx`.

## Contact

- Email: zeeshanofficial01@gmail.com
- GitHub: https://github.com/Zeeshan5932
- LinkedIn: https://www.linkedin.com/in/zeeshan-younas-919a09253/
- Kaggle: https://www.kaggle.com/zeeshanyounas001

## License

This project is for personal portfolio use.

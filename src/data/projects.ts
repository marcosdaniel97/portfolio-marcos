// Real project data sourced from Marcos Daniel Casimiro's public GitHub
// repositories. Descriptions and metrics reflect actual technical facts —
// no fabricated statistics.
import type { Project } from '../types/project';

export const projects: readonly Project[] = [
  {
    id: 'teslo-shop-next',
    name: 'teslo-shop-next',
    description:
      'E-commerce fullstack desarrollado con Next.js: autenticación, gestión de productos y pagos integrados.',
    tags: ['Next.js', 'TypeScript', 'Pagos'],
    metrics: [
      { label: 'Auth', value: 'Sesiones + roles' },
      { label: 'Pagos', value: 'Integrados' },
    ],
    repoUrl: 'https://github.com/marcosdaniel97/teslo-shop-next',
    demoUrl: 'https://tienda-mc-shop.vercel.app',
  },
  {
    id: 'teslo-shop-react',
    name: 'teslo-shop-react',
    description:
      'E-commerce en React usando TanStack para el manejo de datos, Zustand para estado global y autenticación JWT.',
    tags: ['React', 'TanStack', 'Zustand'],
    metrics: [
      { label: 'Data fetching', value: 'TanStack Query' },
      { label: 'Estado', value: 'Zustand' },
    ],
    repoUrl: 'https://github.com/marcosdaniel97/teslo-shop-react',
    demoUrl: 'https://teslo-shop-reactmc.netlify.app/',
  },
  {
    id: 'react-mern-backend',
    name: 'React-MERN-backend',
    description:
      'Backend de una app de calendario (stack MERN): CRUD de eventos y usuarios, manejo de estado con Redux y autenticación JWT.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    metrics: [
      { label: 'Auth', value: 'JWT' },
      { label: 'Estado', value: 'Redux' },
    ],
    repoUrl: 'https://github.com/marcosdaniel97/React-MERN-backend',
    demoUrl: 'https://react-mern-backend-ya9f.onrender.com',
  },
  {
    id: 'heroes-app-githubpages',
    name: 'heroes-app-githubpages',
    description:
      'SPA en React que consume una API hecha en NestJS, con TanStack Query, React Router y componentes shadcn/ui.',
    tags: ['React', 'NestJS', 'TanStack Query'],
    metrics: [
      { label: 'API', value: 'NestJS' },
      { label: 'Data fetching', value: 'TanStack Query' },
    ],
    repoUrl: 'https://github.com/marcosdaniel97/heroes-app-githubpages',
    demoUrl: 'https://marcosdaniel97.github.io/heroes-app-githubpages/',
  },
  {
    id: 'admin-todo-app',
    name: 'Admin-Todo-App',
    description:
      'Gestor de tareas con autenticación vía GitHub y Google (AuthJS), relación de tareas por usuario, consumo de una API RESTful propia y carrito con cookies. Combina SSR y CSR.',
    tags: ['Next.js', 'AuthJS', 'TypeScript'],
    metrics: [
      { label: 'Auth', value: 'GitHub + Google' },
      { label: 'Render', value: 'SSR + CSR' },
    ],
    repoUrl: 'https://github.com/marcosdaniel97/Admin-Todo-App',
    demoUrl: 'https://admin-todo-mocha.vercel.app/',
  },
  {
    id: 'todo-with-sdd',
    name: 'todo-with-sdd',
    description:
      'Todo app construida siguiendo Spec-Driven Development (metodología Openspec): primero specs y tareas, después el código.',
    tags: ['TypeScript', 'SDD'],
    metrics: [{ label: 'Metodología', value: 'Spec-Driven Dev' }],
    repoUrl: 'https://github.com/marcosdaniel97/todo-with-sdd',
  },
  {
    id: 'nextjs-pokemon-dashboard',
    name: 'nextjs-pokemon-dashboard',
    description:
      'Dashboard interactivo de Pokémon hecho con Next.js: consume una API externa y muestra stats, tipos y detalles con una interfaz responsive y optimizada.',
    tags: ['Next.js', 'TypeScript', 'API REST'],
    metrics: [
      { label: 'Deploy', value: 'Vercel' },
      { label: 'Data', value: 'PokeAPI' },
    ],
    repoUrl: 'https://github.com/marcosdaniel97/nextjs-pokemon-dashboard',
    demoUrl: 'http://pokemon-dashboard-flame.vercel.app',
  },
  {
    id: 'gifs-app',
    name: 'gifs-app',
    description:
      'Buscador de GIFs que consume la API de Giphy, con testing unitario usando Vitest y React Testing Library.',
    tags: ['React', 'Vitest', 'Testing Library'],
    metrics: [
      { label: 'Testing', value: 'Vitest + RTL' },
      { label: 'API', value: 'Giphy' },
    ],
    repoUrl: 'https://github.com/marcosdaniel97/gifs-app',
    demoUrl: 'https://soft-kataifi-dcc245.netlify.app/',
  },
];

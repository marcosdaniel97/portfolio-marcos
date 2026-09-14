import type { ComplementaryEducationEntry, EducationEntry } from '../types/education';

export const education: readonly EducationEntry[] = [
  {
    id: 'ingenieria-informatica',
    degree: 'Ingeniería en Informática',
    institution: 'Universidad Nacional de Jujuy',
    dates: 'En curso',
  },
  {
    id: 'analista-programador',
    degree: 'Analista Programador Universitario',
    institution: 'Universidad Nacional de Jujuy',
    dates: '2016 - 2017',
  },
  {
    id: 'tecnico-informatica',
    degree: 'Técnico en Informática',
    institution: 'Escuela de Minas "Dr. Horacio Carrillo"',
    dates: '2010 - 2015',
  },
];

export const complementaryEducation: readonly ComplementaryEducationEntry[] = [
  {
    id: 'digitalers',
    title: 'Java Developer',
    institution: 'Digitalers',
    year: '2022',
  },
  {
    id: 'cilsa',
    title: 'Testing Funcional y Accesibilidad Web · Testing 2 · Full Stack Developer',
    institution: 'Cilsa',
    year: '2024',
  },
  {
    id: 'itgrarte',
    title: 'Control de versionado colaborativo con Git y GitHub',
    institution: 'Itgrarte',
    year: '2024',
  },
  {
    id: 'devtalles',
    title: 'React: De cero a experto · Next.js: El framework de React para producción',
    institution: 'DevTalles — Fernando Herrera (Udemy)',
  },
];

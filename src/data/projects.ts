// Seeded v1 project data (design obs#40 Decision 5 / Interfaces section).
// `repoUrl`/`demoUrl` are intentionally omitted for all 3 entries — no real
// links exist yet. Per spec obs#39 (portfolio-project-data domain), this
// means every ProjectCard renders zero action buttons, which is correct
// behavior, not a defect, pending a follow-up data-entry task.
import type { Project } from '../types/project';

export const projects: readonly Project[] = [
  {
    id: 'fixture-mundial-2026',
    name: 'Fixture Mundial 2026',
    description:
      'Aplicación para consultar el fixture del Mundial 2026: partidos, sedes y resultados en un solo lugar.',
    metrics: [
      { label: 'Requisitos funcionales relevados', value: '35' },
      { label: 'Endpoints de API', value: '12' },
    ],
    tags: ['Angular', 'TypeScript'],
  },
  {
    id: 'gestion-pedidos-pizzeria',
    name: 'Gestión de Pedidos — Pizzería',
    description:
      'Sistema académico de gestión de pedidos para una pizzería, modelado con UML y estimado con FPA y COCOMO II.',
    metrics: [
      { label: 'Casos de uso modelados', value: '9' },
      { label: 'Módulos integrados', value: '3' },
    ],
    tags: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    id: 'chatbot-whatsapp-ia',
    name: 'Chatbot de WhatsApp con IA',
    description:
      'Bot conversacional para WhatsApp que automatiza pedidos y consultas frecuentes de la pizzería usando IA.',
    metrics: [
      { label: 'Mensajes procesados por día', value: '500+' },
      { label: 'Tiempo de respuesta promedio', value: '<2s' },
    ],
    tags: ['Python', 'FastAPI', 'OpenAI API'],
  },
];

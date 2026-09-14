// Real freelance and independent engineering work sourced from Marcos Daniel
// Casimiro's CV. No fabricated links or metrics.
import type { Experience } from '../types/experience';

export const experience: readonly Experience[] = [
  {
    id: 'el-carmen-kayak',
    name: 'El Carmen Kayak',
    role: 'Freelance',
    status: 'En desarrollo',
    description:
      'Desarrollo end-to-end de sitio institucional, tienda online y galería de fotos por calendario para un emprendimiento turístico de Jujuy. Panel de administración con roles, checkout como invitado y confirmación de pagos vía webhook de Mercado Pago.',
    tags: ['Next.js', 'Mercado Pago', 'SDD'],
    methodology: 'Spec-Driven Development',
    repoUrl: 'https://github.com/marcosdaniel97/carmen_kayaks',
  },
  {
    id: 'bot-alertas-inversion',
    name: 'Bot de Alertas de Inversión',
    role: 'Proyecto personal',
    status: 'En desarrollo',
    description:
      'Bot de señales de compra/venta para CEDEARs basado en indicadores técnicos (cruce de EMA 20/50, MACD, RSI, volumen), integrado con APIs de brokers (IOL, Balanz), con perfiles de riesgo y parámetros de take profit / stop loss configurables.',
    tags: ['Trading APIs', 'Indicadores técnicos', 'SDD'],
    methodology: 'Spec-Driven Development',
    isPrivate: true,
  },
];

// Shared shape for project data. Phase 3 will create `src/data/projects.ts`
// which imports these same interfaces and exports the seeded `projects` array
// (design Decision 5 / obs#40 Interfaces section) — nothing here should need
// to change when that happens.

export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly metrics?: readonly ProjectMetric[];
  readonly tags: readonly string[];
  readonly repoUrl?: string;
  readonly demoUrl?: string;
}

// Shared shape for professional/freelance experience entries — distinct from
// Project (src/types/project.ts) because experience carries role/status/
// methodology metadata that side projects don't.

export interface Experience {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly status: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly methodology?: string;
  readonly repoUrl?: string;
  readonly demoUrl?: string;
  readonly isPrivate?: boolean;
}

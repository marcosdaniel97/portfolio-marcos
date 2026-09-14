export interface EducationEntry {
  readonly id: string;
  readonly degree: string;
  readonly institution: string;
  readonly dates: string;
}

export interface ComplementaryEducationEntry {
  readonly id: string;
  readonly title: string;
  readonly institution: string;
  readonly year?: string;
}

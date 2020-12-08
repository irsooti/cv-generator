export interface Detail {
  topic?: string;
  list: string[];
}

export interface Experience {
  from: { month: number; year: number };
  to: { month: number; year: number };
  companyName: string;
  projectName: string;
  projectDescription: string;
  technologies: Detail[];
  role: string;
}

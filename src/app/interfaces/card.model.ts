export interface Skill {
  id: string;
  name: string;
  type: string;
  image?: string;
}



export interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  status: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  image?: string;
  name: string;
  type: string;
  startDate: Date;
  endDate: Date; 
  projects: string[];
}

export type CardData = Skill | Project | Experience; 

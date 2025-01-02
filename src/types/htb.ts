export interface HTBResponse<T> {
  data: T;
  message?: string;
}

export interface Machine {
  id: number;
  name: string;
  os: string;
  difficulty: string;
  points: number;
  machine_avatar: string;
  completed_at: string;
  date: string;
}

export interface Academy {
  id: number;
  name: string;
  description: string;
  progress: number;
  completed: boolean;
}
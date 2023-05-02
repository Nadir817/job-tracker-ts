export enum JobType {
  REMOTE = "Remote",
  ONSITE = "Onsite",
  HYBRID = "Hybrid",
}

export interface Job {
  id: number;
  companyName: string;
  jobTitle: string;
  jobType: JobType;
  salary: number;
}

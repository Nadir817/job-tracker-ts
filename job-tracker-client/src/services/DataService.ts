import { Job, JobType } from "../models/JobType";

const jobs: Job[] = [
  {
    id: 1,
    companyName: "Google",
    jobTitle: "Software Engineer",
    jobType: JobType.HYBRID,
    salary: 100000,
  },
  {
    id: 2,
    companyName: "Google",
    jobTitle: "Software Engineer",
    jobType: JobType.HYBRID,
    salary: 100000,
  },
  {
    id: 3,
    companyName: "Google",
    jobTitle: "Software Engineer",
    jobType: JobType.HYBRID,
    salary: 100000,
  },
];

export async function getJobs(): Promise<Array<Job>> {
  const promise = new Promise<Array<Job>>((res, rej) => {
    setTimeout(() => {
      res(jobs);
    }, 2000);
  });

  return promise;
}

export function deleteJob(id: number) {
  let i = 0;
  for (i; i < jobs.length; i++) {
    if (jobs[i].id === id) break;
  }

  if (i < jobs.length) jobs.splice(i, 1);
  return jobs;
}

export function addJob(item: Job) {
  jobs.push(item);
}

import React from "react";
import { Job } from "../models/JobType";

interface JobInfoProps {
  job: Job;
  deleteJob: (id: number) => void;
}

export default function JobInfo({ job, deleteJob }: JobInfoProps) {
  const arr = Object.entries(job);
  return (
    <tr key={job.id}>
      {arr.map(([k, v]) => {
        return k !== "id" ? <td key={k}>{v}</td> : null;
      })}
      <td>
        <button onClick={() => deleteJob(job.id)}>Delete</button>
      </td>
    </tr>
  );
}

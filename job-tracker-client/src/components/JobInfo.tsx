import React from "react";
import { Job } from "../models/JobType";
import { useAppDispatch } from "../store/hooks";
import { deleteJob } from "../store/jobSlice";

interface JobInfoProps {
  job: Job;
}

export default function JobInfo({ job }: JobInfoProps) {
  const arr = Object.entries(job);
  const dispatch = useAppDispatch();
  return (
    <tr key={job.id}>
      {arr.map(([k, v]) => {
        return k !== "id" ? <td key={k}>{v}</td> : null;
      })}
      <td>
        <button onClick={() => dispatch(deleteJob(job.id))}>Delete</button>
      </td>
    </tr>
  );
}

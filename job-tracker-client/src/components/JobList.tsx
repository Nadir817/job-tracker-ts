import React, { useEffect } from "react";
import type { RootState } from "../store/store";
import { addJob, getJobs } from "../store/jobSlice";

import "./JobList.css";
import JobInfo from "./JobInfo";
import { getJobLists } from "../services/DataService";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function JobList() {
  const jobs = useAppSelector((state: RootState) => state.job);
  const dispatch = useAppDispatch();
  const fetchJobs = async () => {
    const jobs = await getJobLists();
    return jobs;
  };

  useEffect(() => {
    fetchJobs().then((jobList) => {
      jobList.map((job) => dispatch(addJob(job)));
    });
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          <th>Company Name</th>
          <th>Job Title</th>
          <th>Type</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
        {jobs.map((ls) => {
          return <JobInfo job={ls} key={ls.id} />;
        })}
      </tbody>
    </table>
  );
}

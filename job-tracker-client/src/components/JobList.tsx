import React, { useEffect, useState } from "react";
import "./JobList.css";
import { Job } from "../models/JobType";
import { getJobs } from "../services/DataService";
import JobInfo from "./JobInfo";

export default function JobList() {
  const [lists, setLists] = useState<Array<Job>>([]);
  const fetchJobs = async () => {
    const jobs = await getJobs();
    return jobs;
  };

  const deleteFromList = (id: number) => {
    const newArr = lists.filter((job) => {
      return job.id !== id;
    });
    setLists(newArr);
  };

  useEffect(() => {
    fetchJobs().then((jobList) => setLists(jobList));
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
        {lists.map((ls) => {
          return <JobInfo job={ls} deleteJob={deleteFromList} key={ls.id} />;
        })}
      </tbody>
    </table>
  );
}

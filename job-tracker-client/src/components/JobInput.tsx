import React, { ChangeEvent, FormEvent, useState } from "react";
import { Job, JobType } from "../models/JobType";
import { useAppDispatch } from "../store/hooks";
import { addJob } from "../store/jobSlice";

function JobInput() {
  const dispatch = useAppDispatch();
  const [item, setItem] = useState<Job>({
    id: 0,
    companyName: "",
    jobTitle: "",
    jobType: JobType.ONSITE,
    salary: 0,
  });

  const [err, setErr] = useState("");

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log(item);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!item.companyName || !item.jobTitle) {
      setErr("Do not leave anything blank.");
      return;
    }
    setErr("");
    dispatch(addJob(item));
  };

  return (
    <>
      {err && <input readOnly value={err} style={{ color: "red" }} />}
      <form onSubmit={handleSubmit}>
        <label>
          Company Name
          <input
            type="text"
            name="companyName"
            value={item.companyName}
            onChange={handleInput}
          />
        </label>
        <label>
          Job Title
          <input
            type="text"
            name="jobTitle"
            value={item.jobTitle}
            onChange={handleInput}
          />
        </label>
        <select value={item.jobType} onChange={handleInput} name="jobType">
          {Object.values(JobType).map((value) => (
            <option aria-selected="true" key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <label>
          Salary
          <input
            type="number"
            name="salary"
            value={item.salary}
            onChange={handleInput}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default JobInput;

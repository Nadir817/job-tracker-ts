import React from "react";
import "./App.css";
import JobList from "./components/JobList";
import JobInput from "./components/JobInput";

export default function App() {
  return (
    <div className="App">
      <div className="header">Job Application Tracker</div>
      <div className="form-input">
        <JobInput />
      </div>
      <div className="table">
        <JobList />
      </div>
    </div>
  );
}

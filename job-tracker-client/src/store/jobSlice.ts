import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Job } from "../models/JobType";

const initialState: Job[] = [];

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<Job>) => {
      state.push(action.payload);
    },

    deleteJob: (state, action: PayloadAction<number>) => {
      const newArr = state.filter((j) => j.id !== action.payload);
      state = newArr;
    },

    getJobs: (state) => {
      return state;
    },
  },
});

export const { addJob, deleteJob, getJobs } = jobSlice.actions;

export default jobSlice.reducer;

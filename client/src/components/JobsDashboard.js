import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_JOBS } from "../utils/queries";
import Dashboard from "../pages/dashboard";

export default function JobsDashboard() {
  const { error, data, loading } = useQuery(QUERY_JOBS, {
    variables: {
      jobsFilters: {},
    },
  });
  const [initial_state, setInitialState] = useState(null);

  useEffect(() => {
    reloadJobs();

    // return () => {
    //   cleanup;
    // };
  }, []);

  const job_columns_order = [
    "other",
    "applied",
    "interview",
    "inactive",
    "offer",
  ];
  const reloadJobs = async () => {
    try {
      if (!loading) {
        console.log("data from apollo server", data);
        const jobs = data.jobs;
        const _initial_state = reduceJobsToTask(jobs);
        setInitialState(_initial_state);
        console.log({ initial_state });
      }
    } catch (error) {
      console.log("failed to reloadJobs", error);
    }
  };

  const reduceJobsToTask = (jobs) => {
    return jobs.reduce(
      (initial_state, job) => {
        let temp_task = {};
        temp_task[job._id] = job;
        initial_state.tasks = Object.assign(initial_state.tasks, temp_task);

        //check column does not exist
        if (!Object.keys(initial_state.columns).includes(job.job_status)) {
          initial_state.columns[job.job_status] = makeColumn(job.job_status);
        }

        //add the job._id to taskIds
        initial_state.columns[job.job_status].taskIds.push(job._id);

        return initial_state;
      },
      { tasks: {}, columns: {} }
    );
  };

  const makeColumn = (key) => {
    return {
      id: key,
      title: key,
      //the array helps with ownership, the second benefit is maintain order.
      taskIds: [],
    };
  };
  const updateJob = () => {
    //   code to update job
  };
  const deleteJob = () => {
    //   code to update job
  };

  const getJobDetail = () => {
    ///job details
  };

  const showDashboard = (show) => {
      console.log('initial state')
    if (!show) return;
    else
      return (
        <>
          <Dashboard
            initial_state={initial_state}
            columnOrder={job_columns_order}
          ></Dashboard>
        </>
      );
  };

  return <>{showDashboard(initial_state)}</>;
}

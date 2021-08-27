import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_JOBS } from "../utils/queries";
import Dashboard from "../pages/dashboard";
import { DELETE_JOB, UPDATE_JOB } from "../utils/mutations";

export default function JobsDashboard() {
  const { error, data, loading } = useQuery(QUERY_JOBS, {
    variables: {
      jobsFilters: {},
    },
  });

  const [md_deleteJob, { md_data, md_loading, md_error }] = useMutation(
    DELETE_JOB,
    {
      refetchQueries: [QUERY_JOBS],
    }
  );
  const [mu_updateJob, { mu_data, mu_loading, mu_error }] = useMutation(
    UPDATE_JOB,
    {
      refetchQueries: [QUERY_JOBS],
    }
  );

  const job_columns_order = [
    "wish list",
    "applied",
    "interview",
    "offer",
    "inactive",
  ];

  const showDashboard = (data) => {
    try {
      const _initial_state = reduceJobsToTask(data.jobs);

      return makeDashboard(_initial_state, job_columns_order);
    } catch (error) {
      return <p>jobsDashboard failed to load</p>;
    }
  };

  const reduceJobsToTask = (jobs) => {
    let columns = job_columns_order.reduce((columns_map, col_name) => {
      columns_map[col_name] = makeColumn(col_name);
      return columns_map;
    }, {});

    return jobs.reduce(
      (initial_state, job) => {
        let temp_task = {};
        temp_task[job._id] = Object.assign(
          {
            delete: () => {
              deleteJob(job._id);
            },
            update: updateJob,
          },
          job
        );

        initial_state.tasks = Object.assign(initial_state.tasks, temp_task);

        //add job to column taskIds
        initial_state.columns[job.job_status.toLowerCase()].taskIds.push(
          job._id
        );

        // initial_state.columnOrder = job_columns_order

        return initial_state;
      },
      { tasks: {}, columns }
    );
  };

  const makeColumn = (key) => {
    return {
      id: key.toLowerCase(),
      title: key.toLowerCase(),
      //the array helps with ownership, the second benefit is maintain order.
      taskIds: [],
    };
  };
  const updateJob = (job) => {
    //   code to update job
    mu_updateJob({ variables: { ...job } }).then(() => {
      // window.location.assign("/dashboard");
    });
  };
  const deleteJob = (_id) => {
    //   code to update job
    md_deleteJob({ variables: { deleteJobId: _id } }).then(() => {
      window.location.assign("/dashboard");
    });
  };

  const getJobDetail = () => {
    ///job details
  };

  const makeDashboard = (initial_state, job_columns_order) => {
    return (
      <>
        <Dashboard
          initial_state={initial_state}
          columnOrder={job_columns_order}
          crud={{ deleteJob, updateJob }}
        ></Dashboard>
      </>
    );
  };

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>JobsDashboard failed to load</p>;
  }

  return <>{showDashboard(data)}</>;
}

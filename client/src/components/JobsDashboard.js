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

	const job_columns_order = ["favorite", "applied", "interview", "inactive", "offer"];

	const showDashboard = (data) => {
		try {
			console.log("data from apollo server", data);

			const _initial_state = reduceJobsToTask(data.jobs);

			return makeDashboard(_initial_state, job_columns_order);
		} catch (error) {
			console.log("failed to reloadJobs", error);
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
				temp_task[job._id] = job;
				initial_state.tasks = Object.assign(initial_state.tasks, temp_task);

        //add job to column taskIds
        initial_state.columns[job.job_status.toLowerCase()].taskIds.push(job._id)

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
	const updateJob = () => {
		//   code to update job
	};
	const deleteJob = () => {
		//   code to update job
	};

	const getJobDetail = () => {
		///job details
	};

	const makeDashboard = (initial_state, job_columns_order) => {
		return (
			<>
				<Dashboard initial_state={initial_state} columnOrder={job_columns_order}></Dashboard>
			</>
		);
	};

	if (loading) {
		console.log("jobDashboard loading...");
		return <p>Loading.....</p>;
	}

	if (error) {
		console.log("error loading jobDashboard");
		return <p>JobsDashboard failed to load</p>;
	}

	return showDashboard(data);
}

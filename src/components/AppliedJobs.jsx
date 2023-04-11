import React from 'react';

const AppliedJobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];

    if (appliedJobs.length === 0) {
        return <div>No jobs have been applied for yet.</div>;
    }

    return (
        <div>
            <h2>Applied Jobs</h2>
            <ul>
                {appliedJobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.company}</h3>
                        <p>Job Title: {job.jobTitle}</p>
                        <p>Job ID: {job.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppliedJobs;

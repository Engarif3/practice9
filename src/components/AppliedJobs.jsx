import React from "react";

import AppliedjobViewDetails from "./AppliedjobViewDetails";

const AppliedJobs = () => {
  const appliedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

  if (appliedJobs.length === 0) {
    return <div>No jobs have been applied for yet.</div>;
  }

  return (
    <div>
     
        {appliedJobs.map((job) => <AppliedjobViewDetails key={job.id} job={job}></AppliedjobViewDetails> )}
      
    </div>
  );
};

export default AppliedJobs;

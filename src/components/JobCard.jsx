import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const { id,img, jobTitle, companyName, jobType, jobLocation, salary } = job;
  return (
    
    <div className="flex justify-center items-center w-full">
      <div className="border-solid border border-[#E8E8E8] rounded-lg p-4 w-full flex flex-col gap-4">
        <img className="h-12 w-40" src={img} alt="" />
        <h2 className="font-semibold">{jobTitle}</h2>
        <p className="text-[#757575]">{companyName}</p>
        <div>
          <button className="btn-secondary mr-2">{jobType}</button>
          <button className="btn-secondary">Full Time</button>
        </div>
        <p>
          <span className="text-[#757575]">{jobLocation}</span> <span className="text-[#757575]">{salary}</span>
        </p>
        <Link to ={`/jobCard/${id}`} className="w-2/6">
            <button className="btn-primary w-full">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;

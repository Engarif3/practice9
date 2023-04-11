import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobCardId } = useParams();
  const dataDetails = useLoaderData();

  const [details, setDetails] = useState({});

  useEffect(() => {
    const jobDetails = dataDetails.find(
      (job) => job.id === parseInt(jobCardId)
    );
    setDetails(jobDetails || {});
  }, [jobCardId, dataDetails]);

  return (
    <div>
      <div className="flex justify-between items-center gap-10 ">
        <div className="w-2/4 border rounded-lg m-auto p-8  flex flex-col gap-4">
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            <span className="text-[#757575]">
              {details.jobDes || "Category not found"}
            </span>
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span>{" "}
            <span className="text-[#757575]">
              {details.jobRes || "Availability not found"}
            </span>
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span>{" "}
            <span className="text-[#757575]">
              {details.eduReq || "Availability not found"}
            </span>
          </p>
          <p>
            <span className="font-bold">Experiences:</span>{" "}
            <span className="text-[#757575]">
              {details.experience || "Availability not found"}
            </span>
          </p>
        </div>
        <div className=" p-8 m-auto w-1/4">
          <div className=" rounded-lg p-8 bg-[#EAE3FF]">
            <h2 className="text-lg font-bold">Job Details</h2>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            <div className="flex flex-col gap-2 mb-4">
              <p>
                {" "}
                <span className="font-semibold">Salary:</span>{" "}
                <span className="text-[#757575]">{details.salary}</span>{" "}
              </p>
              <p>
                {" "}
                <span className="font-semibold"> Job Title:</span>{" "}
                <span className="text-[#757575]">{details.jobTitle}</span>
              </p>
            </div>

            <h2 className="text-lg font-bold">Contact Information</h2>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400"></hr>

            <div className="flex flex-col gap-2 mb-4">
              <p>
                {" "}
                <span className="font-semibold">Phone:</span>{" "}
                <span className="text-[#757575]">{details.phone}</span>
              </p>
              <p>
                {" "}
                <span className="font-semibold">Email:</span>{" "}
                <span className="text-[#757575]">{details.email}</span>
              </p>
              <p>
                {" "}
                <span className="font-semibold">Address:</span>{" "}
                <span className="text-[#757575]">{details.address}</span>
              </p>
            </div>
          </div>
          <div className="my-8">
            <button className="btn-primary w-full">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

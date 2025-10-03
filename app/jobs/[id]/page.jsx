"use client";

import React, { useState } from "react";
import Link from "next/link";
import { jobs } from "@/constants/jobsData";
import JobCard from "@/components/ui/jobCard";
import { useParams } from "next/navigation";
import ApplyModal from "@/components/job-page/apply-modal";

export default function JobDetailsPage({ params }) {
  // Correctly unwrap the entire paams Prormise first
  const resolvedParams = React.use(params); 
  
  // Then access the 'id' property from the resolved object
  const { id } = resolvedParams; 
  
  const job = jobs.find((job) => job.id === parseInt(id));

  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!job) {
    return <div className="p-8 text-center text-white">Job not found.</div>;
  }
  
  const relatedJobs = jobs
    .filter(
      (relatedJob) => relatedJob.category === job.category && relatedJob.id !== job.id
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1a] to-black text-white p-8 md:p-16">
      <Link href="/jobs" className="text-blue-400 hover:underline mb-8 block">
        &larr; Back to Job Listings
      </Link>

      <div
        className="bg-white/5 border border-[#1E90FF]/20 backdrop-blur-xl
                   hover:shadow-lg hover:hover:shadow-[#1E90FF]/40 transition p-8 rounded-xl shadow-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <ApplyModal jobTitle={job.title} />
        </div>

        <p className="text-md text-gray-400 mb-4">
          {job.location} | {job.jobType} | {job.pay}
        </p>
        <p className="text-gray-300 text-lg mb-6">{job.shortDesc}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {job.longDesc && Object.entries(job.longDesc).map(([section, items]) => (
            <div
              key={section}
              className="bg-[#1E90FF]/20 border border-[#1E90FF]/40 p-6 rounded-lg"
            >
              <h2 className="text-xl font-bold text-gray-200 mb-4 capitalize">
                {section}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {relatedJobs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedJobs.map((relatedJob) => (
              <JobCard key={relatedJob.id} job={relatedJob} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
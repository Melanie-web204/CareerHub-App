"use client";

import React from "react";
import PropTypes from "prop-types";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/Card";
import Button from "@/ui/Buttons";
function JobCard({ job }) {
  if (!job) {
    return null;
  }

  return (
    <Link
      href={`/jobs/${job.id}`}
      role="button"
      aria-label={`⁠ View details for ${job.title} ⁠`}
      className="block"
    >
      <Card
        className="h-full bg-purple-400/10
                   border border-[#1E90FF]/20 backdrop-blur-xl
                   hover:shadow-lg hover:shadow-purple-600/40 transition-all duration-300 ease-in-out
                   hover:scale-102 cursor-pointer  "
      >
        <div className="flex-grow p-4">
          <CardHeader>
            <CardTitle className="text-xl text-black font-bold mb-2">
              {job.title}
            </CardTitle>
            <div className="flex space-x-2 mb-2 text-gray-700 text-sm">
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.jobType}</span>
            </div>
          </CardHeader>
          <CardContent className="text-gray-900/60">
            <p>{job.shortDesc}</p>
            {job.pay && (
              <div className="flex items-center mt-4 text-green-600 font-semibold text-lg">
                <DollarSign className="w-5 h-4" />
                <span>{job.pay}</span>
              </div>
            )}
          </CardContent>
        </div>
        <div className="p-6 pt-0 w-full">
          <Button>View Details</Button>
        </div>
      </Card>
    </Link>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    location: PropTypes.string,
    jobType: PropTypes.string,
    shortDesc: PropTypes.string,
    pay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    longDesc: PropTypes.object,
  }),
};

export default JobCard;

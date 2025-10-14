import React from 'react';
import Link from 'next/link';
import { jobs } from '@/components/data/jobsData';
import { slugify } from '@/lib/utils';
import JobCard from '@/ui/jobCard';
import ApplyModal from '@/components/job-page/apply-modal';
import MaxWidthContainer from '@/components/shared/max-width-container';

export async function generateStaticParams() {
  // Pre-render pages for all jobs using slug if available, otherwise a slugified title
  return jobs.map((job) => ({ slug: String(job.slug ?? slugify(job.title) ?? job.id) }));
}

export default function JobDetailsPage({ params }) {
  const { slug } = params;

  // Try to find by slug first, then by slugified title, then numeric id fallback
  const job =
    jobs.find((j) => String(j.slug) === String(slug)) ||
    jobs.find((j) => slugify(j.title) === String(slug)) ||
    jobs.find((j) => String(j.id) === String(slug));

  if (!job) {
    return <div className="p-8 text-center text-white">Job not found.</div>;
  }

  const relatedJobs = jobs
    .filter((relatedJob) => relatedJob.category === job.category && relatedJob.id !== job.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[url('/hero.png')] text-white font-bold p-8 md:p-16">
      <MaxWidthContainer>
        <div className='w-full flex justify-start'>
          <Link href="/jobs" className="border bg-purple-500 p-4 rounded-2xl hover:underline mb-12 block">
          &larr; Back to Job Listings
        </Link>
        </div>

        <div
          className="h-full bg-purple-400/10 
                   border border-[#1E90FF]/20 backdrop-blur-xl
                   hover:shadow-lg hover:shadow-purple-600/40 transition-all duration-300 ease-in-out
                   hover:scale-102 cursor-pointer p-10 rounded-lg mb-12"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl text-black font-bold">{job.title}</h1>
            <ApplyModal jobTitle={job.title} />
          </div>

          <p className="text-md text-gray-900 mb-4">
            {job.location} | {job.jobType} | {job.pay}
          </p>
          <p className="text-gray-700 text-lg mb-6">{job.shortDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {job.longDesc &&
              Object.entries(job.longDesc).map(([section, items]) => (
                <div
                  key={section}
                  className="bg-purple-400 border border-[#1E90FF]/40 p-6 rounded-lg"
                >
                  <h2 className="text-xl font-bold text-gray-800 mb-4 capitalize">{section}</h2>
                  <ul className="list-disc list-inside space-y-2 text-white">
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
            <h2 className="text-2xl text-black font-bold mb-6">Related Jobs:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedJobs.map((relatedJob) => (
                <JobCard key={relatedJob.id} job={relatedJob} />
              ))}
            </div>
          </div>
        )}
      </MaxWidthContainer>
    </div>
  );
}
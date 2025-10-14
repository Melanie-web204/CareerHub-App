"use client";

import React, { useState } from "react";
import MaxWidthContainer from "@/components/shared/max-width-container";
import SearchBar from "@/components/search-bar/page";
import CategoryButtons from "@/components/search-bar/categoryButtons";
import JobCard from "@/ui/jobCard";
import { jobs } from "@/components/data/jobsData";
import { ArrowLeft, ArrowRight } from "lucide-react";


const ITEMS_PER_PAGE = 9;

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setActiveCategory("All"); 
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchTerm(""); 
    setCurrentPage(1); 
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory =
      activeCategory === "All" || job.category === activeCategory; 
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()); 
    return matchesCategory && matchesSearch; 
  });

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE); 
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; 
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, endIndex); 

  return (
    <div className="min-h-screen bg-[url('/hero.png')] text-black">
      <MaxWidthContainer>
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-6xl sm:text-6xl md:text-7xl font-bold max-w-4xl landing-tight">
            Discover your next opportunity
          </h1>
          <p className="mt-4 text-lg text-black max-w-2xl">
            Type a few keywords into the search field, jump to a category, or
            use our filters to find your perfect match.
          </p>
          <div className="w-full mt-8 flex flex-col items-center">
            <SearchBar onSearch={handleSearch} />
            <CategoryButtons
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>


        <main className="p-8">
          <h2 className="text-center text-3xl font-bold mb-8">Job Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {currentJobs.length > 0 ? (
              // For each job in currentJobs, render a JobCard component
              currentJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              // If no jobs match the filters, show a message
              <p className="text-center text-gray-500 col-span-full">
                No jobs found matching your criteria.
              </p>
            )}
          </div> 

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-6 py-2 rounded-full disabled:opacity-50 transition-colors duration-200 bg-[#1E90FF]/20 border border-[#1E90FF]/40
                 text-purple-500 font-semibold backdrop-blur-md hover:bg-[#1E90FF]/30"
              >
                <ArrowLeft className="inline-block" />
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      i + 1 === currentPage
                        ? "bg-purple-500 text-white shadow-lg"
                        : "bg-gray-900 text-gray-400 hover:bg-gray-600 transition-colors duration-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="px-6 py-2 rounded-full disabled:opacity-50 transition-colors duration-200 bg-[#1E90FF]/20 border border-[#1E90FF]/40 
                text-purple-500 font-semibold backdrop-blur-md hover:bg-[#1E90FF]/30"
              >
                <ArrowRight className="inline-block" />
              </button>
            </div>
          )}
        </main>
      </MaxWidthContainer>
    </div>
  );
}
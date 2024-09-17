
import React, { useState, useEffect } from "react";
import JobCategoryFilter from "./JobCategoryFilter";
import SalaryFilter from "./SalaryFilter";
import JobList from "./JobList";

interface Job {
  id: number;
  title: string;
  salary: number;
  category: string;
}

interface JobSearchPageProps {
  jobs: Job[];
}

const JobSearchPage: React.FC<JobSearchPageProps> = ({ jobs }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [salary, setSalary] = useState<number>(0);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  useEffect(() => {
    let filtered = jobs;

    if (categories.length > 0) {
      filtered = filtered.filter((job) => categories.includes(job.category));
    }

    if (salary > 0) {
      filtered = filtered.filter((job) => job.salary >= salary);
    }

    setFilteredJobs(filtered);
  }, [categories, salary, jobs]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-6">
      {/* サイドバー（フィルターセクション） */}
      <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
        <h1 className="text-xl font-bold mb-6 text-gray-800">求人検索</h1>
        <JobCategoryFilter onChangeCategory={setCategories} />
        <SalaryFilter onChangeSalary={setSalary} />
      </aside>

      {/* メインコンテンツ（求人リストセクション） */}
      <main className="flex-1 bg-white p-6 rounded-lg shadow-lg ml-0 md:ml-6">
        <JobList jobs={filteredJobs} />
      </main>
    </div>
  );
};

export default JobSearchPage;
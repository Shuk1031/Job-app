import React from "react";
import JobPostForm from "./JobPostForm";

interface Job {
  title: string;
  salary: number;
  category: string;
}

interface JobPostPageProps {
  addJob: (job: Job) => void;
}

const JobPostPage: React.FC<JobPostPageProps> = ({ addJob }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">求人投稿ページ</h1>
        <JobPostForm addJob={addJob} />
      </div>
    </div>
  );
};

export default JobPostPage;
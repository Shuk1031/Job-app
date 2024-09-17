/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JobSearchPage from './componets/JobSearchPage';
import JobPostPage from './componets/JobPostPage';
interface Job {
  id: number;
  title: string;
  salary: number;
  category: string;
}

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    { id: 1, title: "営業職", salary: 350, category: "sales" },
    { id: 2, title: "エンジニア", salary: 600, category: "engineer" },
    // 他の初期データを必要に応じて追加
  ]);

  const addJob = (newJob: Omit<Job, 'id'>) => {
    const id = jobs.length + 1;
    setJobs([...jobs, { id, ...newJob }]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* ヘッダー（ナビゲーション） */}
        <header className="bg-gray-800 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between">
            <h1 className="text-xl font-bold">求人検索アプリ</h1>
            <nav className="flex space-x-4">
              <Link to="/" className="hover:underline">求人検索</Link>
              <Link to="/post" className="hover:underline">求人投稿</Link>
            </nav>
          </div>
        </header>

        {/* ページのルーティング */}
        <div className="max-w-7xl mx-auto py-8 px-4">
          <Routes>
            <Route path="/post" element={<JobPostPage addJob={addJob} />} />
            <Route path="/" element={<JobSearchPage jobs={jobs} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

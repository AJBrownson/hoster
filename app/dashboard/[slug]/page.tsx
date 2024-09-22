"use client"
import { NextPage } from 'next';
import Campaigns from '@/app/components/Cards/campaigns';
import CreateNew from '@/app/components/Cards/createNew';
import TotalPosts from '@/app/components/Cards/totalPosts';
import { useState } from 'react';
import RecentPosts from '@/app/components/Cards/recentPosts';


// Sidebar Tabs
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'campaign', label: 'Campaign' },
  { id: 'create', label: 'Create' },
];

interface DashProps {
    params: {
        slug: string;
    };
}

const Dashboard: NextPage<DashProps> = ({ params }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'campaign':
        return <Campaign />;
      case 'create':
        return <Create />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <h2 className="text-xl font-bold p-4">Dashboard</h2>
        <nav>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`block w-full text-left py-2 px-4 hover:bg-gray-700 ${
                activeTab === tab.id ? 'bg-gray-700' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* <h1>Welcome back {params.slug}</h1> */}

        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;

// Components for each tab
function Overview() {
  return (
    <>
    <TotalPosts />
    <RecentPosts />
    </>
  )
}

function Campaign() {
  return (
    <>
    <Campaigns />
    </>
  )
}

function Create() {
  return (
    <>
    <CreateNew />
    </>
  )
}
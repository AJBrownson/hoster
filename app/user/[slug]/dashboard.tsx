"use client"
import { useState } from 'react';

// Sidebar Tabs
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'campaign', label: 'Campaign' },
  { id: 'create', label: 'Create' },
];

export default function Dashboard() {
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
      <div className="flex-1  p-8">
        {renderContent()}
      </div>
    </div>
  );
}

// Components for each tab
function Overview() {
  return <div><h2>Overview Content</h2><p>This is the overview section.</p></div>;
}

function Campaign() {
  return <div><h2>Campaign Content</h2><p>This is the campaign section.</p></div>;
}

function Create() {
  return <div><h2>Create Content</h2><p>This is the create section.</p></div>;
}

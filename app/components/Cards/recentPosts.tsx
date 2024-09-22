import React from "react";

export default function RecentPosts() {
  const posts = [
    { post: "New Feature Release", platform: "Facebook", date: "2024-09-25" },
    { post: "Blog Announcement", platform: "Twitter", date: "2024-09-26" },
    { post: "Live Stream", platform: "Instagram", date: "2024-09-28" },
  ];

  return (
    <div className="container mx-auto mt-12">
        <h1 className="text-2xl font-bold">Recent Scheduled Posts</h1>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Post</th>
            <th className="px-4 py-2 text-left">Platform</th>
            <th className="px-4 py-2 text-left">Scheduled Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{post.post}</td>
              <td className="px-4 py-2">{post.platform}</td>
              <td className="px-4 py-2">{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
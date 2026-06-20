"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";

export default function PublicBrowseTasks() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/browse-tasks`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load tasks");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center animate-pulse text-gray-500">
        Loading available jobs...
      </div>
    );
  }
  const filteredTasks = tasks.filter((task) => {
  const matchesTitle = task.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    category === "All"
      ? true
      : task.category === category;

  return matchesTitle && matchesCategory;
});

 return (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h1 className="text-3xl font-bold mb-6">
      Browse Jobs
    </h1>

    {/* Search + Filter */}
    <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 flex flex-col md:flex-row gap-4">
      
      <input
        type="text"
        placeholder="Search by task title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#74d3ae]"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#74d3ae]"
      >
        <option value="All">All Categories</option>
        <option value="Design">Design</option>
        <option value="Writing">Writing</option>
        <option value="Development">Development</option>
        <option value="Marketing">Marketing</option>
        <option value="Other">Other</option>
      </select>
    </div>

    {/* No Results */}
    {filteredTasks.length === 0 ? (
      <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
        <div className="text-5xl mb-4">🔍</div>

        <h2 className="text-xl font-semibold">
          No matching tasks found
        </h2>

        <p className="text-gray-500 mt-2">
          Try another search term or category.
        </p>
      </div>
    ) : (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTasks.map((task) => (
          <div
            key={task._id}
            className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="font-bold text-lg">
              {task.title}
            </h2>

            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {task.description}
            </p>

            <div className="mt-3 text-sm space-y-1">
              <p>💰 ${task.budget}</p>
              <p>📅 {task.deadline}</p>
            </div>

            <div className="mt-3">
              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-sm">
                {task.category}
              </span>
            </div>

            <Link
              href={`/browse-tasks/${task._id}`}
              className="block mt-4 text-center bg-gradient-to-r from-[#678d58] to-[#74d3ae] text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    )}
  </div>
);
}
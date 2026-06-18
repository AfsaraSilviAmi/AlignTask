"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";


export default function MyTasksPage() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tasks?userId=${user.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load tasks");
        setLoading(false);
      });
  }, [user]);

  const handleDelete = async (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tasks/${taskId}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setTasks((prev) =>
        prev.filter((task) => task._id !== taskId)
      );

      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-700";

      case "in progress":
        return "bg-yellow-100 text-yellow-700";

      case "completed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        Loading tasks...
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        My Tasks
      </h1>

      {tasks.length === 0 ? (
        <div className="bg-white border rounded-xl p-8 text-center">
          <h2 className="font-semibold text-lg">
            No Tasks Found
          </h2>

          <p className="text-gray-500 mt-2">
            Start by posting your first task.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="border rounded-xl p-5 bg-white shadow-sm"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">
                  {task.title}
                </h2>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                    task.status
                  )}`}
                >
                  {task.status}
                </span>
              </div>

              <p className="text-gray-600 mt-3">
                {task.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">
                    Category:
                  </span>{" "}
                  {task.category}
                </p>

                <p>
                  <span className="font-semibold">
                    Budget:
                  </span>{" "}
                  ${task.budget}
                </p>

                <p>
                  <span className="font-semibold">
                    Deadline:
                  </span>{" "}
                  {task.deadline}
                </p>
              </div>

              <div className="flex gap-3 mt-5">
                {task.status === "open" && (
                  <Button
                    color="success"
                    variant="flat"
                  >
                    Edit
                  </Button>
                )}

                <Button
                  color="danger"
                  variant="flat"
                  onPress={() =>
                    handleDelete(task._id)
                  }
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { Input, TextArea } from "@heroui/react";

export default function ApplyProposal({ task }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [form, setForm] = useState({
    budget: "",
    days: "",
    message: "",
  });

  const submitProposal = async () => {
    try {
      if (!user) {
        return toast.error("Please login first");
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/proposals`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            taskId: task._id,
            freelancerId: user.id,
            freelancerEmail: user.email,
            budget: form.budget,
            days: form.days,
            message: form.message,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      toast.success("Proposal submitted!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="space-y-3 grid">

     <Input
  type="number"
  min="1"
  value={form.budget}
  placeholder="Your Budget"
  onChange={(e) =>
    setForm({ ...form, budget: e.target.value })
  }
/>

    <Input
  type="date"
  value={form.days}
  onChange={(e) =>
    setForm({ ...form, days: e.target.value })
  }
/>

      <TextArea
  placeholder="Cover message"
  value={form.message}
  onChange={(e) =>
    setForm({ ...form, message: e.target.value })
  }
/>

      <button
        onClick={submitProposal}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Submit Proposal
      </button>
    </div>
  );
}
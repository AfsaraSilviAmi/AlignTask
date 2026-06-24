"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { Table } from "@heroui/react";

export default function EarningsPage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEarnings = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/payments/freelancer/${user.email}`
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setPayments(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) loadEarnings();
  }, [user?.email]);

  if (loading) return (
      <div>
             <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
      <div className="flex flex-col items-center gap-4">
        
        {/* Animated ring loader */}
        <div className="relative">
          <div className="h-14 w-14 rounded-full border-4 border-gray-200"></div>
          <div className="h-14 w-14 rounded-full border-4 border-t-[#678d58] border-r-transparent border-b-transparent border-l-transparent animate-spin absolute top-0 left-0"></div>
        </div>

        {/* Text */}
        <p className="text-gray-600 font-medium tracking-wide">
          Loading your tasks...
        </p>

        {/* subtle dots animation */}
        <div className="flex gap-1 mt-1">
          <span className="h-2 w-2 bg-[#678d58] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="h-2 w-2 bg-[#678d58] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="h-2 w-2 bg-[#678d58] rounded-full animate-bounce"></span>
        </div>

      </div>
    </div>
        </div>
  );

  const total = payments.reduce(
    (sum, p) => sum + Number(p.amount || 0),
    0
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
    <div className="space-y-2">
        <h1 className="text-3xl text-gray-800 font-bold">My Earnings</h1>
        <p className="text-gray-500">Keep track of your earnings</p>
    </div>

      <p className="mb-6 mt-3 text-xl font-semibold text-green-600">
  Total Earned: ${total}
</p>

{payments.length === 0 ? (
  <div className="bg-white border rounded-2xl p-12 text-center shadow-sm mt-6">
    <div className="text-6xl mb-4">💸</div>

    <h2 className="text-2xl font-semibold text-gray-800">
      No Earnings Yet
    </h2>

    <p className="text-gray-500 mt-2 max-w-md mx-auto">
      You have not received any payments yet. Once a client pays for a completed
      task, your earnings will appear here.
    </p>
  </div>
) : (
  <Table>
    <Table.ScrollContainer>
      <Table.Content aria-label="Earnings Table">
        <Table.Header>
          <Table.Column isRowHeader>Task Title</Table.Column>
          <Table.Column>Client Name</Table.Column>
          <Table.Column>Amount Made</Table.Column>
          <Table.Column>Completion Date</Table.Column>
        </Table.Header>

        <Table.Body>
          {payments.map((p) => (
            <Table.Row key={p._id}>
              <Table.Cell className="line-clamp-1">
                {p?.taskTitle}
              </Table.Cell>

              <Table.Cell>
                {p?.clientName || "Unknown Client"}
              </Table.Cell>

              <Table.Cell>
                ${Number(p.amount)}
              </Table.Cell>

              <Table.Cell>
                {new Date(p.paidAt).toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Content>
    </Table.ScrollContainer>
  </Table>
)}
    </div>
  );
}
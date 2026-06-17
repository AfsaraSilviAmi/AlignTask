"use client";

import {
  Bars,
  Bell,
  Envelope,
  Gear,
  House,
  Person,
  Briefcase,
  Clipboard,
  Plus,
  ListCheck,
  File,
} from "@gravity-ui/icons";

import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function DashboardSideBar() {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const role = user?.role || "client";

  // ROLE BASED NAVIGATION
  const navItems = {
    client: [
      { icon: House, label: "Home", href: "/dashboard/client" },
       { icon: Plus, label: "Post Tasks", href: "/dashboard/client/tasks/new" },
      { icon: ListCheck, label: "My Tasks", href: "/dashboard/client/tasks" },
      { icon: File, label: "Manage Proposals", href: "/dashboard/client/proposals" },
     
    ],

    freelancer: [
      { icon: House, label: "Dashboard", href: "/dashboard/freelancer" },
      { icon: Briefcase, label: "Jobs", href: "/dashboard/freelancer/jobs" },
      { icon: Envelope, label: "Messages", href: "/dashboard/freelancer/messages" },
      { icon: Gear, label: "Settings", href: "/dashboard/freelancer/settings" },
    ],

    admin: [
      { icon: House, label: "Admin Panel", href: "/dashboard/admin" },
      { icon: Person, label: "Users", href: "/dashboard/admin/users" },
      { icon: Bell, label: "Reports", href: "/dashboard/admin/reports" },
      { icon: Gear, label: "Settings", href: "/dashboard/admin/settings" },
    ],
  };

  const items = navItems[role];

  return (
    <>
      {/* ================= MOBILE DRAWER ================= */}
      <div className="lg:hidden">
        <Drawer open={open} onOpenChange={setOpen}>
          <Button variant="secondary" onPress={() => setOpen(true)}>
            <Bars />
            Menu
          </Button>

          <Drawer.Backdrop>
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />

                <Drawer.Header>
                  <Drawer.Heading>Dashboard</Drawer.Heading>
                </Drawer.Header>

                <Drawer.Body>
                  <nav className="flex flex-col gap-2">
                    {items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:bg-gray-100 transition"
                      >
                        <item.icon className="size-5 text-gray-500" />
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:h-screen border-r bg-white px-4 py-6">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {role === "admin"
              ? "Admin Panel"
              : role === "freelancer"
              ? "Freelancer Hub"
              : "Client Space"}
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Manage your dashboard
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              <item.icon className="size-5 text-gray-500" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t text-xs text-gray-400">
          Logged in as {user?.name}
        </div>
      </aside>
    </>
  );
}
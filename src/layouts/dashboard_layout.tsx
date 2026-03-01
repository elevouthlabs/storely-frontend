// src/layouts/DashboardLayout.jsx
import { DashboardSidebar } from "@/components/DashboardSidebar/page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, Search } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const notifications = [
  {
    id: 1,
    title: "New order received",
    description: "Order #1042 was placed by Jamie Lee.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Payment confirmed",
    description: "Payment of $128.00 for order #1039 was successful.",
    time: "1 hr ago",
    read: false,
  },
  {
    id: 3,
    title: "Low stock alert",
    description: 'Product "Classic White Tee" is running low (3 left).',
    time: "3 hr ago",
    read: true,
  },
  {
    id: 4,
    title: "New customer signed up",
    description: "Alex Morgan just created an account.",
    time: "Yesterday",
    read: true,
  },
];

export default function DashboardLayout() {
  const [notifs, setNotifs] = useState(notifications);
  const unreadCount = notifs.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex-1">
        <div className="p-4 border-b flex items-center gap-2">
          <SidebarTrigger />
          <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3">
            <Search className="w-6 h-6 text-gray-300" />
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md focus:outline-none"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            {/* Notification Bell */}
            <Popover>
              <PopoverTrigger asChild>
                <div className="cursor-pointer relative p-2 rounded-full bg-gray-100 transition-colors">
                  <Bell className="w-5 h-5 text-gray-600" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-[1.6px] -right-[1.4px] bg-purple-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </div>
              </PopoverTrigger>

              <PopoverContent
                className="w-80 p-0 rounded-2xl shadow-lg"
                align="end"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <h4 className="font-semibold text-sm text-gray-800">
                    Notifications
                  </h4>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllRead}
                      className="text-xs text-purple-600 hover:underline"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>

                {/* List */}
                <ul className="divide-y max-h-80 overflow-y-auto">
                  {notifs.map((notif) => (
                    <li
                      key={notif.id}
                      className={`px-4 py-3 flex gap-3 items-start cursor-pointer hover:bg-gray-50 transition-colors ${
                        !notif.read ? "bg-purple-50" : ""
                      }`}
                      onClick={() =>
                        setNotifs((prev) =>
                          prev.map((n) =>
                            n.id === notif.id ? { ...n, read: true } : n,
                          ),
                        )
                      }
                    >
                      {/* Dot */}
                      <span className="mt-1.5 shrink-0">
                        {!notif.read ? (
                          <span className="block w-2 h-2 rounded-full bg-purple-600" />
                        ) : (
                          <span className="block w-2 h-2 rounded-full bg-transparent" />
                        )}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate">
                          {notif.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                          {notif.description}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-1">
                          {notif.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="px-4 py-3 border-t text-center">
                  <button className="text-xs text-purple-600 hover:underline">
                    View all notifications
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            <img
              src="https://i.pravatar.cc/300"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

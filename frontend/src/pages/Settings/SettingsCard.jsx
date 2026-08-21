import React from "react";
import {
  Settings as SettingsIcon,
  Store,
  Palette,
  User,
  LockKeyhole,
  ShieldCheck,
  CreditCard,
  Users,
  Plug,
  Bell,
  TriangleAlert,
  ChevronRight,
} from "lucide-react";

const settingsSections = [
  {
    title: "STORE & APPEARANCE",
    items: [
      {
        title: "Store Settings",
        description: "Manage store name, logo, and contact information",
        icon: Store,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        path: "/dashboard/settings/store",
      },
      {
        title: "Storefront Customisation",
        description: "Customize your store's theme and appearance",
        icon: Palette,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        path: "/dashboard/settings/storefront",
      },
    ],
  },

  {
    title: "ACCOUNT & SECURITY",
    items: [
      {
        title: "Account & Profile",
        description: "Manage your personal information and preferences",
        icon: User,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        path: "/dashboard/settings/profile",
      },
      {
        title: "Change Password",
        description: "Update your account password",
        icon: LockKeyhole,
        iconBg: "bg-orange-50",
        iconColor: "text-orange-600",
        path: "/dashboard/settings/password",
      },
      {
        title: "Two-Factor Authentication",
        description: "Add an extra layer of security to your account",
        icon: ShieldCheck,
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-600",
        path: "/dashboard/settings/2fa",
      },
    ],
  },

  {
    title: "BILLING & PAYMENTS",
    items: [
      {
        title: "Billing & Subscription",
        description: "View your plan, invoices, and billing history",
        icon: CreditCard,
        iconBg: "bg-pink-50",
        iconColor: "text-pink-600",
        path: "/dashboard/settings/billing",
      },
    ],
  },

  {
    title: "TEAM & COLLABORATION",
    items: [
      {
        title: "Team Members",
        description: "Manage team members and their permissions",
        icon: Users,
        iconBg: "bg-cyan-50",
        iconColor: "text-cyan-600",
        path: "/dashboard/settings/team",
      },
    ],
  },

  {
    title: "INTEGRATIONS & NOTIFICATIONS",
    items: [
      {
        title: "Integrations",
        description: "Connect third-party apps and services",
        icon: Plug,
        iconBg: "bg-sky-50",
        iconColor: "text-sky-600",
        path: "/dashboard/settings/integrations",
      },
      {
        title: "Notification Preferences",
        description: "Configure email and push notifications",
        icon: Bell,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        path: "/dashboard/settings/notifications",
      },
    ],
  },

  {
    title: "DANGER ZONE",
    items: [
      {
        title: "Delete Account / Store",
        description: "Permanently delete your account and store data",
        icon: TriangleAlert,
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
        danger: true,
        path: "/dashboard/settings/delete",
      },
    ],
  },
];

const Settings = () => {
  const handleSettingsClick = (item) => {
    // Replace with your existing Storely navigation logic.
    // Example:
    // navigate(item.path);

    console.log(`Opening ${item.title}:`, item.path);
  };

  return (
    <div className="w-full p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <SettingsIcon
            size={19}
            strokeWidth={2}
            className="text-slate-700"
          />

          <h1 className="text-[18px] font-semibold tracking-tight text-slate-900">
            Settings
          </h1>
        </div>

        <p className="mt-1 text-[12px] text-slate-500">
          Manage your store, account, billing, and team settings
        </p>
      </div>


      <div className="space-y-6">
        {settingsSections.map((section) => (
          <section key={section.title}>
            {/* Section title */}
            <div className="mb-2.5">
              <h2 className="text-[9px] font-bold uppercase tracking-[0.06em] text-slate-500">
                {section.title}
              </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => handleSettingsClick(item)}
                    className={`
                      group flex min-h-[68px] w-full items-center
                      justify-between rounded-lg border bg-white
                      px-3.5 py-3 text-left
                      transition-all duration-200
                      focus:outline-none focus:ring-2
                      focus:ring-offset-1
                      ${
                        item.danger
                          ? "border-red-100 hover:border-red-200 hover:bg-red-50/20 focus:ring-red-200"
                          : "border-slate-200 hover:border-slate-300 hover:shadow-sm focus:ring-slate-200"
                      }
                    `}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      {/* Icon */}
                      <div
                        className={`
                          flex h-9 w-9 shrink-0 items-center
                          justify-center rounded-md
                          ${item.iconBg} ${item.iconColor}
                        `}
                      >
                        <Icon size={17} strokeWidth={1.8} />
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <h3
                          className={`
                            text-[12px] font-semibold leading-4
                            ${
                              item.danger
                                ? "text-red-600"
                                : "text-slate-800"
                            }
                          `}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-0.5 text-[10px] leading-4 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      size={14}
                      strokeWidth={1.8}
                      className="
                        ml-3 shrink-0 text-slate-400
                        transition-transform duration-200
                        group-hover:translate-x-0.5
                      "
                    />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Settings;
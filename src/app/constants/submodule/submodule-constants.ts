export const CRM_SUB_MODULE_MENU: MenuDef[] = [
  {
    name: "Home",
    href: "/",
    menuItems: []
  },
  {
    name: "Accounts",
    href: "/accounts",
    menuItems: [
      { name: "+ New Account", href: "/accounts/create" },
      { name: "Recent Accounts", href: "/accounts/recent", id: "recent-accounts", itemType: "separator" },
      { name: "accounts 2", href: "#" },
      { name: "accounts 3", href: "#" },
      { name: "accounts 4", href: "#" },
      { name: "accounts 5", href: "#" },
      { name: "accounts 6", href: "#" },
    ],
  },
  {
    name: "Contacts",
    href: "/contacts",
    menuItems: [
      { name: "+ New Contact", href: "/contacts/create" },
      { name: "Recent Contacts", href: "/contacts/recent", id: "recent-contacts", itemType: "separator" },
      { name: "contacts 2", href: "#" },
      { name: "contacts 3", href: "#" },
      { name: "contacts 4", href: "#" },
      { name: "contacts 5", href: "#" },
      { name: "contacts 6", href: "#" },
    ],
  },
  {
    name: "Leads",
    href: "/leads",
    menuItems: [
      { name: "+ New Lead", href: "/leads/create" },
      { name: "Recent Leads", href: "/leads/recent", id: "recent-leads", itemType: "separator" },
      { name: "leads 2", href: "#" },
      { name: "leads 3", href: "#" },
      { name: "leads 4", href: "#" },
      { name: "leads 5", href: "#" },
      { name: "leads 6", href: "#" },
    ],
  },
  {
    name: "Opportunities",
    href: "/opportunities",
    menuItems: [
      { name: "+ New Opportunity", href: "/opportunities/create" },
      { name: "Recent Opportunities", href: "/opportunities/recent", id: "recent-opportunities", itemType: "separator" },
      { name: "opportunities 2", href: "#" },
      { name: "opportunities 3", href: "#" },
      { name: "opportunities 4", href: "#" },
      { name: "opportunities 5", href: "#" },
      { name: "opportunities 6", href: "#" },
    ],
  },
  {
    name: "Tasks",
    href: "/tasks",
    menuItems: [
      { name: "+ New Task", href: "/tasks/create" },
      { name: "Recent Tasks", href: "/tasks/recent", id: "recent-tasks", itemType: "separator" },
      { name: "tasks 2", href: "#" },
      { name: "tasks 3", href: "#" },
      { name: "tasks 4", href: "#" },
      { name: "tasks 5", href: "#" },
      { name: "tasks 6", href: "#" },
    ],
  },
  {
    name: "Calendar",
    href: "/calendar",
    menuItems: [
      { name: "+ New Calendar Entry", href: "/calendar/create" },
      { name: "Recent Entries", href: "/calendar/recent", id: "recent-calendar", itemType: "separator" },
      { name: "calendar 2", href: "#" },
      { name: "calendar 3", href: "#" },
      { name: "calendar 4", href: "#" },
      { name: "calendar 5", href: "#" },
      { name: "calendar 6", href: "#" },
    ],
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    menuItems: [
      { name: "View Dashboard", href: "/dashboard" },
      { name: "Recent Dashboards", href: "/dashboard/recent", id: "recent-dashboard", itemType: "separator" },
      { name: "dashboard 2", href: "#" },
      { name: "dashboard 3", href: "#" },
      { name: "dashboard 4", href: "#" },
      { name: "dashboard 5", href: "#" },
      { name: "dashboard 6", href: "#" },
    ],
  },
];

const navigationConfig = [
  {
    id: "applications",
    title: "Applications",
    type: "group",
    icon: "apps",
    children: [
      {
        type: "divider",
        id: "divider-2"
      },
      {
        id: "analytics-dashboard",
        title: "Dashboard",
        type: "item",
        url: "/apps/dashboards/project",
        icon: "assignment"
      },

      {
        id: "news-papers",
        title: "News Papers",
        type: "item",
        url: "/apps/newspapers",
        icon: "import_contacts"
      },

      {
        id: "academy",
        title: "Academy",
        type: "item",
        icon: "school",
        url: "/apps/academy"
      },

      {
        id: "blog",
        title: "Blog",
        type: "item",
        icon: "check_box",
        url: "/apps/todo",
        badge: {
          title: 3,
          bg: "rgb(255, 111, 0)",
          fg: "#FFFFFF"
        }
      },

      {
        id: "chat",
        title: "Chat",
        type: "item",
        icon: "chat",
        url: "/apps/cg",
        badge: {
          title: 13,
          bg: "rgb(9, 210, 97)",
          fg: "#FFFFFF"
        }
      },

      {
        id: "faq",
        title: "Faq",
        type: "item",
        icon: "help",
        url: "/pages/faq"
      },
      {
        id: "knowledge-base",
        title: "Knowledge Base",
        type: "item",
        icon: "import_contacts",
        url: "/pages/knowledge-base"
      },
      {
        id: "about",
        title: "About",
        type: "item",
        icon: "today",
        url: "/apps/about"
      }
    ]
  },

  {
    type: "divider",
    id: "divider-2"
  }
];

export default navigationConfig;

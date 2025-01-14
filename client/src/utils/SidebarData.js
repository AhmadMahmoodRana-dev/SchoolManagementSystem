import { CiSettings } from "react-icons/ci";

const data = {
    navMain: [
      {
        title: "General Settings",
        // icon: <CiSettings />,
        url: "#",
        items: [
          { title: "Institute Profile", url: "#" },
          { title: "Fee Particulars", url: "#" },
          { title: "Account For Fee Invoice", url: "#" },
          { title: "Rules & Regulations", url: "#" },
          { title: "Marks Grading", url: "#" },
          { title: "Theme & Language", url: "#" },
          { title: "Account Settings", url: "#" },
          { title: "Log out", url: "#" },
        ],
      },
      {
        title: "Classes",
        // icon: <CiSettings />,
        items: [
          { title: "All Classes", url: "#" },
          { title: "Add Class", url: "/form/add-class" },
        ],
      },
      {
        title: "API Reference",
        // icon: <CiSettings />,
        items: [
          { title: "Components", url: "#" },
          { title: "File Conventions", url: "#" },
          { title: "Functions", url: "#" },
          { title: "next.config.js Options", url: "#" },
          { title: "CLI", url: "#" },
          { title: "Edge Runtime", url: "#" },
        ],
      },
      {
        title: "Employees",
        // icon: <CiSettings />,
        items: [
          { title: "All Employees", url: "/table/shown-employee" },
          { title: "Add New", url: "/form/add-employee" },
        ],
      },
    ],
  };

  export default data;
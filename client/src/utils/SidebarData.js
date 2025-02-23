
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
          { title: "Log out", url: "#"},
        ],
      },
      {
        title: "Classes",
        // icon: <CiSettings />,
        items: [
          { title: "All Classes", url: "/table/shown-class" },
          { title: "Add Class", url: "/form/add-class" },
        ],
      },
      {
        title: "Subjects",
        // icon: <CiSettings />,
        items: [
          { title: "Classes With Subjects", url: "/table/shown-subject" },
          { title: "Assign Subjects", url: "/form/assign-subject" },
        ],
      },
      {
        title: "Employees",
        // icon: <CiSettings />,
        items: [
          { title: "All Employees", url: "/table/shown-employee" },
          { title: "Add New", url: "/form/add-employee" },
          { title: "Users Management", url: "/table/employee-user" },
        ],
      },
      {
        title: "Students",
        // icon: <CiSettings />,
        items: [
          { title: "All Students", url: "/table/Shown-student" },
          { title: "Add Student", url: "/form/add-student" },
          { title: "Users Management", url: "/table/student-user" },
        ],
      },
    ],
  };

  export default data;
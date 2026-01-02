localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Aman",
    email: "l@l.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create responsive login UI",
        date: "2025-01-10",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue",
        date: "2025-01-08",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Testing",
        description: "Test authentication API",
        date: "2025-01-12",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create Dashboard UI",
        description: "Develop admin dashboard layout",
        date: "2025-01-07",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Reduce image loading time",
        date: "2025-01-09",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy Project",
        description: "Deploy on production server",
        date: "2025-01-15",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Neha",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Database Schema",
        description: "Design user database schema",
        date: "2025-01-05",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "JWT Integration",
        description: "Add secure authentication",
        date: "2025-01-13",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Log System",
        description: "Implement activity logs",
        date: "2025-01-16",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Unit Testing",
        description: "Write test cases",
        date: "2025-01-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug Fix Sprint",
        description: "Fix critical bugs",
        date: "2025-01-11",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "UI Polish",
        description: "Enhance UI experience",
        date: "2025-01-14",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Create API Docs",
        description: "Document all APIs",
        date: "2025-01-09",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Slack Integration",
        description: "Integrate Slack notifications",
        date: "2025-01-12",
        category: "Integration",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Refactor Code",
        description: "Improve code quality",
        date: "2025-01-18",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));

};

export const getLocalStorage = () => {
  const employees= JSON.parse(localStorage.getItem('employees'));
  const admin= JSON.parse(localStorage.getItem('admin'));
 
return {employees,admin};

};


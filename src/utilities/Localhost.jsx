const employee = [
  
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      name: "Chris Downhill",
      tasks: [
        {
          active: true,
          new_task: true,
          completed: false,
          failed: false,
          task_title: "Prepare Monthly Report",
          task_description: "Compile data for the monthly performance report.",
          task_date: "2025-01-07",
          category: "Reporting",
        },
        {
          active: false,
          new_task: false,
          completed: true,
          failed: false,
          task_title: "Client Follow-up",
          task_description: "Contact clients to gather feedback on recent projects.",
          task_date: "2025-01-05",
          category: "Communication",
        },
        {
          active: true,
          new_task: false,
          completed: false,
          failed: false,
          task_title: "Team Meeting Preparation",
          task_description: "Prepare the agenda for the weekly team meeting.",
          task_date: "2025-01-08",
          category: "Planning",
        },
      ],
      taskCounts: {
        active: 2,
        new_task: 1,
        completed: 1,
        failed: 0,
      },
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      name: "Emma Johnson",
      tasks: [
        {
          active: true,
          new_task: true,
          completed: false,
          failed: false,
          task_title: "Market Analysis",
          task_description: "Conduct an analysis of market trends for Q1.",
          task_date: "2025-01-10",
          category: "Research",
        },
        {
          active: false,
          new_task: false,
          completed: true,
          failed: false,
          task_title: "Draft Email Campaign",
          task_description: "Create draft content for the upcoming email campaign.",
          task_date: "2025-01-06",
          category: "Marketing",
        },
      ],
      taskCounts: {
        active: 1,
        new_task: 1,
        completed: 1,
        failed: 0,
      },
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      name: "Michael Smith",
      tasks: [
        {
          active: true,
          new_task: false,
          completed: false,
          failed: false,
          task_title: "Inventory Check",
          task_description: "Ensure all inventory items are updated in the system.",
          task_date: "2025-01-09",
          category: "Operations",
        },
        {
          active: false,
          new_task: false,
          completed: false,
          failed: true,
          task_title: "Prepare Presentation",
          task_description: "Create a presentation for the new product launch.",
          task_date: "2025-01-05",
          category: "Marketing",
        },
        {
          active: true,
          new_task: true,
          completed: false,
          failed: false,
          task_title: "Employee Feedback",
          task_description: "Collect feedback from team members.",
          task_date: "2025-01-10",
          category: "HR",
        },
      ],
      taskCounts: {
        active: 2,
        new_task: 1,
        completed: 0,
        failed: 1,
      },
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      name: "Sophia Brown",
      tasks: [
        {
          active: true,
          new_task: false,
          completed: false,
          failed: false,
          task_title: "Code Review",
          task_description: "Review the code submitted by the development team.",
          task_date: "2025-01-08",
          category: "Development",
        },
        {
          active: false,
          new_task: false,
          completed: true,
          failed: false,
          task_title: "Bug Fixing",
          task_description: "Fix the reported issues in the application.",
          task_date: "2025-01-06",
          category: "Development",
        },
      ],
      taskCounts: {
        active: 1,
        new_task: 0,
        completed: 1,
        failed: 0,
      },
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      name: "Olivia Davis",
      tasks: [
        {
          active: true,
          new_task: false,
          completed: false,
          failed: false,
          task_title: "Customer Survey",
          task_description: "Design and distribute a customer satisfaction survey.",
          task_date: "2025-01-10",
          category: "Customer Relations",
        },
        {
          active: true,
          new_task: true,
          completed: false,
          failed: false,
          task_title: "Budget Planning",
          task_description: "Prepare the budget proposal for Q2.",
          task_date: "2025-01-11",
          category: "Finance",
        },
        {
          active: false,
          new_task: false,
          completed: true,
          failed: false,
          task_title: "Policy Review",
          task_description: "Review and update company policies.",
          task_date: "2025-01-07",
          category: "Administration",
        },
      ],
      taskCounts: {
        active: 2,
        new_task: 1,
        completed: 1,
        failed: 0,
      },
    },
  ];
  const admin = [{
    name: "Admin",
    id: "admin1",
    email: "admin@me.com",
    password: "123"
}];  
export const setLocalStorage = () =>{
    localStorage.setItem('employee',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
   
    const employee= JSON.parse(localStorage.getItem('employee'))
    
    const admin= JSON.parse(localStorage.getItem('admin'))
    return {employee, admin}

}
setLocalStorage();
getLocalStorage();

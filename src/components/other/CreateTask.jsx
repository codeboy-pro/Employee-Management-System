import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useToast } from "../../context/ToastContext";

const CreateTask = () => {
  const { userData, addTask } = useContext(AuthContext);
  const toast = useToast();

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!taskTitle || !description || !taskDate || !assignTo || !category) {
      toast.error("Please fill in all fields");
      return;
    }

    // Find the employee to assign the task to
    const employeeExists = userData?.find(
      (emp) => emp.firstName.toLowerCase() === assignTo.toLowerCase()
    );
    if (!employeeExists) {
      toast.error(`Employee "${assignTo}" not found`);
      return;
    }

    const newTask = {
      title: taskTitle,
      description: description,
      date: taskDate,
      category: category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Use the addTask function from context (handles state + localStorage)
    addTask(assignTo, newTask);

    // Clear form fields
    setTaskTitle("");
    setDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");

    toast.success(`Task "${taskTitle}" assigned to ${assignTo}!`);
  };

  // Loading state
  if (!userData) {
    return (
      <div className="p-8 bg-slate-900 mt-7 rounded-xl border border-slate-800 shadow-xl">
        <p className="text-slate-400">Loading employees...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="p-8 bg-slate-900 mt-7 rounded-xl border border-slate-800 shadow-xl">
        <h2 className="text-xl font-semibold text-white mb-6">Create New Task</h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-full md:w-[48%]">
            <div className="mb-4">
              <h3 className="text-sm text-slate-400 mb-1.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="text-sm py-3 px-4 w-full rounded-lg outline-none bg-slate-800 border border-slate-700 text-slate-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-500"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-slate-400 mb-1.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="text-sm py-3 px-4 w-full rounded-lg outline-none bg-slate-800 border border-slate-700 text-slate-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-500"
                type="date"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-slate-400 mb-1.5">Assign to</h3>
              <select
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="text-sm py-3 px-4 w-full rounded-lg outline-none bg-slate-800 border border-slate-700 text-slate-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer"
              >
                <option value="">Select Employee</option>
                {userData.map((emp) => (
                  <option key={emp.id} value={emp.firstName}>
                    {emp.firstName} ({emp.email})
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-slate-400 mb-1.5">Category</h3>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="text-sm py-3 px-4 w-full rounded-lg outline-none bg-slate-800 border border-slate-700 text-slate-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer"
              >
                <option value="">Select Category</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Documentation">Documentation</option>
                <option value="Marketing">Marketing</option>
                <option value="Research">Research</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="w-full md:w-[48%] flex flex-col items-start">
            <h3 className="text-sm text-slate-400 mb-1.5">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-64 text-sm py-3 px-4 rounded-lg outline-none bg-slate-800 border border-slate-700 text-slate-100 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-500 resize-none"
              placeholder="Enter task description..."
            ></textarea>
            <button 
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-5 rounded-lg text-sm mt-6 w-full font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99]"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;

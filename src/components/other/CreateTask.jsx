import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
const [userdata,setuserdata]=useContext(AuthContext);



  const [taskTitle, settaskTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [Category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      title: taskTitle,
      description: Description,
      date: taskDate,
      category: Category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userdata;
console.log(data);

    data.forEach((emp) => {
      if (emp.firstName === assignTo) {
        emp.tasks.push(task);
        emp.taskStats.newTask = emp.taskStats.newTask + 1;
      }
    });

    // localStorage.setItem("employees", JSON.stringify(data));

setuserdata(data);
console.log(data);

    settaskTitle("");
    setDescription("");
    settaskDate("");
    setassignTo("");
    setCategory("");
  };

  return (
    <div>
      <div className="p-10  bg-[#1c1c1c] mt-7 rounded ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  settaskTitle(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  settaskDate(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setassignTo(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={Category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={Description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;

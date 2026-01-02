import React, { createContext, useEffect, useState, useCallback } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { setSecureItem } from '../utils/secureStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      try {
        setLocalStorage();
        const { employees } = getLocalStorage();
        setUserData(employees);
        setLoading(false);
      } catch (err) {
        setError('Failed to load data');
        setLoading(false);
      }
    }, []);

    // Persist to localStorage whenever userData changes
    useEffect(() => {
      if (userData) {
        setSecureItem('employees', userData);
      }
    }, [userData]);

    // Update task status for a specific employee
    const updateTaskStatus = useCallback((employeeId, taskTitle, updates) => {
      setUserData((prevData) => {
        if (!prevData) return prevData;
        
        return prevData.map((employee) => {
          if (employee.id === employeeId) {
            const updatedTasks = employee.tasks.map((task) => {
              if (task.title === taskTitle) {
                return { ...task, ...updates };
              }
              return task;
            });

            // Recalculate task stats
            const taskStats = {
              newTask: updatedTasks.filter((t) => t.newTask && !t.active && !t.completed && !t.failed).length,
              active: updatedTasks.filter((t) => t.active && !t.completed && !t.failed).length,
              completed: updatedTasks.filter((t) => t.completed).length,
              failed: updatedTasks.filter((t) => t.failed).length,
            };

            return { ...employee, tasks: updatedTasks, taskStats };
          }
          return employee;
        });
      });
    }, []);

    // Accept a task (move from new to active)
    const acceptTask = useCallback((employeeId, taskTitle) => {
      updateTaskStatus(employeeId, taskTitle, {
        newTask: false,
        active: true,
        completed: false,
        failed: false,
      });
    }, [updateTaskStatus]);

    // Complete a task
    const completeTask = useCallback((employeeId, taskTitle) => {
      updateTaskStatus(employeeId, taskTitle, {
        newTask: false,
        active: false,
        completed: true,
        failed: false,
      });
    }, [updateTaskStatus]);

    // Fail a task
    const failTask = useCallback((employeeId, taskTitle) => {
      updateTaskStatus(employeeId, taskTitle, {
        newTask: false,
        active: false,
        completed: false,
        failed: true,
      });
    }, [updateTaskStatus]);

    // Delete a task
    const deleteTask = useCallback((employeeId, taskTitle) => {
      setUserData((prevData) => {
        if (!prevData) return prevData;
        
        return prevData.map((employee) => {
          if (employee.id === employeeId) {
            const updatedTasks = employee.tasks.filter((task) => task.title !== taskTitle);

            // Recalculate task stats
            const taskStats = {
              newTask: updatedTasks.filter((t) => t.newTask && !t.active && !t.completed && !t.failed).length,
              active: updatedTasks.filter((t) => t.active && !t.completed && !t.failed).length,
              completed: updatedTasks.filter((t) => t.completed).length,
              failed: updatedTasks.filter((t) => t.failed).length,
            };

            return { ...employee, tasks: updatedTasks, taskStats };
          }
          return employee;
        });
      });
    }, []);

    // Add a new task to an employee
    const addTask = useCallback((employeeName, task) => {
      setUserData((prevData) => {
        if (!prevData) return prevData;
        
        return prevData.map((employee) => {
          if (employee.firstName.toLowerCase() === employeeName.toLowerCase()) {
            const updatedTasks = [...employee.tasks, task];

            // Recalculate task stats
            const taskStats = {
              newTask: updatedTasks.filter((t) => t.newTask && !t.active && !t.completed && !t.failed).length,
              active: updatedTasks.filter((t) => t.active && !t.completed && !t.failed).length,
              completed: updatedTasks.filter((t) => t.completed).length,
              failed: updatedTasks.filter((t) => t.failed).length,
            };

            return { ...employee, tasks: updatedTasks, taskStats };
          }
          return employee;
        });
      });
    }, []);

    // Edit an existing task
    const editTask = useCallback((employeeId, oldTaskTitle, updatedTask) => {
      setUserData((prevData) => {
        if (!prevData) return prevData;
        
        return prevData.map((employee) => {
          if (employee.id === employeeId) {
            const updatedTasks = employee.tasks.map((task) => {
              if (task.title === oldTaskTitle) {
                return { ...task, ...updatedTask };
              }
              return task;
            });

            // Recalculate task stats
            const taskStats = {
              newTask: updatedTasks.filter((t) => t.newTask && !t.active && !t.completed && !t.failed).length,
              active: updatedTasks.filter((t) => t.active && !t.completed && !t.failed).length,
              completed: updatedTasks.filter((t) => t.completed).length,
              failed: updatedTasks.filter((t) => t.failed).length,
            };

            return { ...employee, tasks: updatedTasks, taskStats };
          }
          return employee;
        });
      });
    }, []);

    // Get current employee data (useful for real-time updates)
    const getEmployeeById = useCallback((employeeId) => {
      if (!userData) return null;
      return userData.find((emp) => emp.id === employeeId);
    }, [userData]);

    const contextValue = {
      userData,
      setUserData,
      loading,
      error,
      acceptTask,
      completeTask,
      failTask,
      deleteTask,
      addTask,
      editTask,
      getEmployeeById,
    };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
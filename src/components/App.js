import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [category, setCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)
  

  function handleDeleteTask(text){
    setTasks(tasks.filter((task) => task.text !== text))
  }

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )

  function addTaskToList(newTask){
    setTasks([...tasks, newTask])
  }


  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectedCategory={setCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={addTaskToList}
      />
      
      
      <TaskList 
        tasks={visibleTasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
 
import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({text, category})
    setText("")
    setCategory("Food")
  }


  const categoryOptions = categories.map((category) =>{
    if (category !== "All"){
    return(
      <option key={category}>
        {category}
      </option>
    )
    }
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          onChange= {(event) => setText(event.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          onChange= {(event) => setCategory(event.target.value)}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm; 

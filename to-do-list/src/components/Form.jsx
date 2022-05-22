import React, { useState } from "react";

const Form = () => {
  const [task, setTask] = useState({
    Taskname: "",
    isComplete: false,
  });

  //represents the list containing all the task objects
  const [listOfTasks, setListOfTasks] = useState([]);

  const changeHandler = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  //when we submit the form, we will add the task object to our last array
  const submitTask = (e) => {
    e.preventDefault();
    setListOfTasks([...listOfTasks, task]);

    setTask({
      Taskname: "",
      isComplete: false,
    });
  };

  const completeTask = (e, i) => {
    console.log("done with the task at index number", i);
    setListOfTasks(listOfTasks.filter((tasks, idx) => idx !== i));
    // let [...updatedListofTasks] = listOfTasks;
    // console.log("updated list looks like", updatedListofTasks);
    // updatedListofTasks[i];
  };

  return (
    <div>
      <h4>Add a task below</h4>
      <form onSubmit={submitTask}>
        <div className="form-group">
          <label htmlFor="">Task:</label>
          <input
            onChange={changeHandler}
            type="text"
            name="Taskname"
            value={task.Taskname}
            id=""
            className="form-control"
          />
        </div>
        <input
          type="submit"
          value="Add Task"
          className="btn btn-success"
        ></input>
      </form>
      {listOfTasks.map((taskObject, i) => {
        return (
          <div key={i}>
            <h3>
              {taskObject.Taskname}{" "}
              <input
                onClick={(e) => completeTask(e, i)}
                type="checkbox"
                name=""
              />
              <input
                onClick={(e) => completeTask(e, i)}
                type="submit"
                value="Delete"
                className="btn btn-success"
              ></input>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Form;

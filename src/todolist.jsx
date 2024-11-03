import { useState } from "react";

function Todo(){


    var count = 0;
    const [task, setTask] = useState(["Eat Breakfast", "Do Lunch", "Sleep", "Eat Dinner", "Sleep Again"]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);    
        }
        setNewTask("");
    }
    function removeTask(index){
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }
    function moveTaskUp(){}
    function moveTaskDown(){}

    return (
        <>
            <h1>Things To Do</h1>
            <input 
                type="text" 
                placeholder="Add new"
                value={newTask} 
                // onChange={handleInputChange}
                onChange={handleInputChange}
                 />
            <button onClick={addTask} className="btn--add">submit</button><br />
            <ol>
                {task.map((task, index) =>
                    <li>
                        <div className="controls controls2">
                            <span className="text">{task}</span>
                            <p className="removeMargin">
                                <button onClick={removeTask} className="btn--ad"><p>-</p></button>
                                <button onClick={moveTaskUp} className="btn--up"><p className="triangle_up"></p></button>
                                <button onClick={moveTaskDown} className="btn--down"><p className="triangle_down"></p></button>
                            </p>
                        </div>
                    </li>
                )}
            </ol>
            <hr />
            <div className="controls">
                <p>
                    <button onClick={addTask} className="btn--ad"><p>+</p></button>
                    {/* <button onClick={addTask} className="btn--ad"><p>+</p></button> */}
                </p>
                <span className="task-count">|{count} items left</span>
            </div>
            {/* <button className="btn--remove">remove</button> */}
        </>)
}
export default Todo
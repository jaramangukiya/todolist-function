import { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            todo: "task 1",
        },
        {
            todo: "task 2",
        }
    ]);
    const [task,setTask] = useState("");
    return (
        <>
            <Col xs={5} className="mx-auto mt-5">
                <h2>there are no task</h2>
                <InputGroup>
                    <input placeholder="Write Your task" className="form-control" onChange={(e) => {
                        setTask(e.target.value)
                    }}></input>
                    <button onClick={() => {
                        setTasks([...tasks,{todo:task}])
                    }}>Add</button>
                </InputGroup>
                {
                    tasks.map((task) => {
                        return <p>{task.todo}</p>
                    })
                }
            </Col>
        </>
    );
}
export default TodoList;
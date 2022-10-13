import { useState } from "react";
import { Button, Col, Form, InputGroup, ListGroup, ListGroupItem, Modal } from "react-bootstrap";

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            todo: "task 1",
        },
        {
            todo: "task 2",
        }
    ]);
    const [task, setTask] = useState("");
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Col xs={5} className="mx-auto mt-5">
                <h2>there are no task</h2>
                <InputGroup>
                    <Form.Control placeholder="Write Your task" className="shadow-none" onChange={(e) => {
                        setTask(e.target.value)
                    }}></Form.Control>
                    <Button className="shadow-none" onClick={() => {
                        setTasks([...tasks, { todo: task }])
                    }}>Add</Button>
                </InputGroup>
                <ListGroup className="mt-5">
                    {
                        tasks.map((task) => {
                            return <ListGroupItem className="d-flex align-items-center"><input type="checkbox" className="me-3"></input> {task.todo}<Button className="ms-auto" variant="danger" onClick={handleShow}>.</Button></ListGroupItem>
                        })
                    }
                </ListGroup>
            </Col>
            <Col xs={8} className="mx-auto">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Conformation of delete task</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure to delete ?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>Yes</Button>
                        <Button variant="success" onClick={handleClose}>No</Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </>
    );
}
export default TodoList;
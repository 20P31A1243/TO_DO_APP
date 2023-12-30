import React, { useState,useEffect } from 'react'
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Modal, Button, Form, Badge, Card } from 'react-bootstrap';

function Home() {

  return (
    <>
         <div className="container-fluid">
      <div className="row">
        {/* Sidebar - Only visible on larger screens */}
        <div id='menumenu' className=" col-md-2 d-none d-md-block bg-light min-vh-100 shadow">
          <div id='listlist'  className="mx-0">
                <div id='menuheading'>
                    <strong>
                <i className="bi bi-list-columns bg-transparent" style={{color:'blue', fontWeight:'bold'}}></i> Task boards
                </strong>
                </div>
          </div>
          <div id='projectslist' >
          {yourArray.map((item, index) => (
  <div key={index} id='projectsublist' onClick={() => handleProjectClick(item)}>
    {item}
    <button
      onClick={() => deleteProject(item)}
      className='bg-transparent'
      style={{ float: 'right', marginRight: '20px', border: 'none' }}
    >
      <i className="fa fa-trash" aria-hidden="true"></i>
    </button>
  </div>
))}

        <button style={{color:'blue', fontSize:'13px', border:'0'}} onClick={addproject}>&nbsp;&nbsp;&nbsp;+&nbsp;Add New Project</button>
          </div>
        </div>
        {/* Main content */}
        <div className="col-md-10 col-sm-12  min-vh-100"  id='todolist'>
        {/* style={{borderLeft:'2px solid black'}} */}
          {/* Hamburger icon to toggle the sidebar on smaller screens */}
          <button
              className="d-md-none btn p-0 border-0" // Custom styles to remove background and border
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="sidebar"
              style={{ padding: '0px', marginTop: '10px',backgroundColor:'white',width:'30px', height:'30px' }} // Additional inline style
            >
              {/* Font Awesome icon */}
              <i className="fas fa-bars text-dark"></i> {/* This icon represents the menu */}
            </button>

          {/* Collapsible sidebar for smaller screens */}
          <div
            className="offcanvas offcanvas-start d-md-none"
            tabIndex="-1"
            id="sidebar"
            aria-labelledby="sidebarLabel"
          >
            <div className="offcanvas-header">
              
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              {/* Your sidebar content goes here */}
              Sidebar content
            </div>
          </div>

          {/* Main content */}
          <div id='listlist2'>
                <div id='menuheading1'>
             My Projects
                </div>
                <div id='taskslist' className='row'>
                  <div className='col-md-3' style={{ height:'100vh'}}>

                    <div id='todobtn'>
                     To Do
                    </div>
                    <div id='taskcards'>
                    {filteredTasks('To Do').map((task, index) => (
                    <Card key={index} className="mb-2">
                    <Card.Body>
                      <Card.Title>{task.name}</Card.Title>
                      <Card.Text>
                        Start Date: {task.startDate} | End Date: {task.endDate}
                      </Card.Text>
                      <Badge bg="primary">{task.status}</Badge>
                      <div className="d-flex justify-content-between mt-3">
                        <Button
                          variant="info"
                          className="ms-2"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                  
                  ))}
                    </div>


                    <button id='' variant="primary" onClick={handleShow}  style={{paddingTop:'10px',paddingBottom:'10px', paddingLeft:'50px', paddingRight:'50px', marginLeft:'4vw', backgroundColor:'rgb(196, 240, 255)', border:'none',borderRadius:'10px', color:'blue',fontSize:'15px'}}>
                    + Add New
      </button>
                  </div>
                  <div className='col-md-3 ' style={{ height:'100vh'}}>
                  <div id='progressbtn'>
                     In Progress
                    </div>
                    <div id='taskcards'>
                    {filteredTasks('In Progress').map((task, index) => (
                    <Card key={index} className="mb-2">
                    <Card.Body>
                      <Card.Title>{task.name}</Card.Title>
                      <Card.Text>
                        Start Date: {task.startDate} | End Date: {task.endDate}
                      </Card.Text>
                      <Badge bg="primary">{task.status}</Badge>
                      <div className="d-flex justify-content-between mt-3">
                        <Button
                          variant="info"
                          className="ms-2"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                  ))}
                    </div>


                    <button id='' variant="primary" onClick={handleShow}  style={{paddingTop:'10px',paddingBottom:'10px', paddingLeft:'50px', paddingRight:'50px', marginLeft:'4vw', backgroundColor:'rgb(255, 230, 233)', border:'none',borderRadius:'10px', color:' rgb(255, 39, 71)',fontSize:'15px'}}>
                    + Add New
      </button>
                  </div>
                  <div className='col-md-3' style={{ height:'100vh'}}>
                  <div id='reviewbtn'>
                     In Review
                    </div>
                    <div id='taskcards'>
                    {filteredTasks('In Review').map((task, index) => (
                   <Card key={index} className="mb-2">
                   <Card.Body>
                     <Card.Title>{task.name}</Card.Title>
                     <Card.Text>
                       Start Date: {task.startDate} | End Date: {task.endDate}
                     </Card.Text>
                     <Badge bg="primary">{task.status}</Badge>
                     <div className="d-flex justify-content-between mt-3">
                       <Button
                         variant="info"
                         className="ms-2"
                         onClick={() => handleEdit(index)}
                       >
                         Edit
                       </Button>
                       <Button
                         variant="danger"
                         onClick={() => handleDelete(index)}
                       >
                         Delete
                       </Button>
                     </div>
                   </Card.Body>
                 </Card>
                  ))}
                    </div>


                    <button id='' variant="primary" onClick={handleShow}  style={{paddingTop:'10px',paddingBottom:'10px', paddingLeft:'50px', paddingRight:'50px', marginLeft:'4vw', backgroundColor:'rgb(196, 240, 255)', border:'none',borderRadius:'10px', color:'blue',fontSize:'15px'}}>
                    + Add New
      </button>
                  </div>
                  <div className='col-md-3' style={{ height:'100vh'}}>
                  <div id='completedbtn'>
                     Completed
                    </div>
                    <div id='taskcards'>
                    {filteredTasks('Completed').map((task, index) => (
                    <Card key={index} className="mb-2">
                    <Card.Body>
                      <Card.Title>{task.name}</Card.Title>
                      <Card.Text>
                        Start Date: {task.startDate} | End Date: {task.endDate}
                      </Card.Text>
                      <Badge bg="primary">{task.status}</Badge>
                      <div className="d-flex justify-content-between mt-3">
                        <Button
                          variant="info"
                          className="ms-2"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                  ))}
                    </div>


                    <button id='' variant="primary" onClick={handleShow}  style={{paddingTop:'10px',paddingBottom:'10px', paddingLeft:'50px', paddingRight:'50px', marginLeft:'4vw', backgroundColor:'rgb(185, 231, 185)', border:'none',borderRadius:'10px', color:'green',fontSize:'15px'}}>
                    + Add New
      </button>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>

    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="taskName">
              <Form.Label>Name of the Task</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={taskData.name}
                onChange={handleChange}
                placeholder="Enter task name"
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={taskData.startDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={taskData.endDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={taskData.status}
                onChange={handleChange}
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>In Review</option>
                <option>Completed</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Home;

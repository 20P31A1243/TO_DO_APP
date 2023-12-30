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









  )
}

export default Home;

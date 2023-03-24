import React from 'react';
import '../App.css';

function Modal ({closeModal}) {
  return (
      <div className='modalContainer'>
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> x </button>
          </div>
        <div className='title'>
          <h2>Create A New Task</h2>
        </div>
        <div className='body'>
          <p>Enter Title</p>
          <p>Select category</p>
        </div>
        <div className='footer'>
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Submit</button>
        </div>
      </div>
  )
}

export default Modal
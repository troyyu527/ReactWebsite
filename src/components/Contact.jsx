import React from 'react'
function Contact(props) {
  //const {name,pos,currentPlayer} = props
  
  
  return (
    <div className='page'>
      <div className="contact">
        <h1>Contact Me</h1>
        
        <form>
          <div className='name'>
            <label>First Name*</label>
            <input type='text'></input>
            <label>First Name*</label>
            <input type='text'></input>
          </div>
          <div className='email'>
            <label>Email*</label>
            <input type='email'></input>
          </div>
          <div className='subject'>
            <label>Subject</label>
            <input type='text'></input>
          </div>
          <div className='Message'>
            <label>Message</label>
            <textarea></textarea>
          </div>
          <button>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
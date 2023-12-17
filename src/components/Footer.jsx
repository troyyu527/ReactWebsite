import React from 'react'
function Footer(props) {
  //const {name,pos,currentPlayer} = props
  
  
  return (
    <div className="footer">
      <div className="copyright">
        <p>Copyright @2023 by Troy Yu</p>
        <p>All data source are for private learning</p>
        <p>No commercial use allowed</p>
      </div>
      <div className='footer-info'>
        <div className='container'>
          <p>Call</p>
          <p>(+1)347-634-1025</p>
        </div>
        <div className='container'>
          <p>Email</p>
          <p>troy0527@gmail.com</p>
        </div>
        <div className='container'>
          <p>My Sites</p>
          <p>github</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

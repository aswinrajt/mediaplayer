import React from 'react'
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
function Header() {

  const nav=useNavigate()
  
  const logout=()=>{
    nav('/')
    sessionStorage.removeItem(`userData`)
  }




  return (
  <>
 
 <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-brands fa-youtube fa-beat"  style={{color: "#1174c0",}} />
            {' '}
           Media Player
          </Navbar.Brand>
        </Container>
        <button className="btn btn-danger" onClick={logout}>LOGOUT</button>
      </Navbar>
  </>
)
}


export default Header
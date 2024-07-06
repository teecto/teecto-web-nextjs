import React from 'react'
import { Container } from '@mui/material'


function Footer() {
  return (
    <>
    <div className="footer">
        <Container>  
            <div className="footer-wrapper">
                <div className="logo">
                    <img src='images/logo.png' alt="" />
                </div>
                <span>© 2024 <span>TEECTO</span>. All rights reserved</span>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Footer
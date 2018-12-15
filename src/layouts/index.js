import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation.js'
import Opening from '../components/opening'
import styled from 'styled-components'
import logoLN from '../images/logoLN.svg'
import messenger from '../images/messenger.svg'
import wave from '../images/wave.svg'

const Background = styled.div`
   width: 100%;
   height:100vh;
   background:#112b4d;
   position: absolute;
   top: 50%; left: 50%;
   transform: translate(-50%, -50%);
`;

class Template extends React.Component {


  render() {
    const { location, children } = this.props
    let header




    return (
      <div>



          <Background >

          <Navigation />
          <span></span>

    <div className="background">

            {children()}

            <a href="https://www.linkedin.com/in/adrien-blanchot-24825487"><img className='logoLN' src={logoLN} /></a>
              <a href="https://m.me/Ad-Blanchot"> <img  className='logoMessenger' src={messenger} /> </a>
</div>
          </Background>





      </div>
    )
  }
}

export default Template

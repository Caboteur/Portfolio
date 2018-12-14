import React from 'react'
import styled from 'styled-components'
import styles from './opening.css'


const Introduction = styled.div`
   width: 60%;
   height:100vh;
   background:white;
   position: absolute;
   right:0;
   top:0;
`;

const Close = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
`;

const Apptitle = styled.h1`
 text-align:center;
 color:#112b4d;
 `;

export default class Opening extends React.Component {


  render() {

    const style = {
      display: this.props.open
    }


    return (
      <Introduction  id="opening-introduction" style={style}>
        <div className="border">
       <Close className="close" onClick={this.props.click}></Close>

       <Apptitle style={{color:"#fff1e0"}}>{this.props.tile}</Apptitle>


        <div className="div-para">{this.props.para}</div>

        <img className="img-opening" src={this.props.img} />
        <img className="img-opening" src={this.props.img1} />
        <img className="img-opening" style={{marginTop: "20%"}} src={this.props.img2} />

        </div>

      </Introduction>
    )
  }
}

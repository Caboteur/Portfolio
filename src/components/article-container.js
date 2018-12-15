import React from 'react'
import styled from 'styled-components'
import styles from './article-container.css'
import Pic from '../images/ArticlePhoto.svg'

export default class RootIndex extends React.Component {



  render() {

    console.log(this.props.title)

    return (
      <div name={this.props.num}>

         {this.props.name === "Les Saisons" ?
          (
     <video src={this.props.image} style={{cursor: "pointer" , boxShadow: "rgba(255, 255, 255, 0.39) -2px 0px 20px 13px", height: "40vh", margin: "auto", display: "block", marginTop:"20%"}} title={this.props.title} type="video/mov" preload controls />
    ) : (
      <img style={{boxShadow: "rgba(255, 255, 255, 0.39) -2px 0px 20px 20px", cursor: "pointer", maxHeight:"60vh", margin:"auto", display:"block", marginTop:"10%"}} src={this.props.image} />
    )}

         <h1 className="title">{this.props.name}</h1>

      </div>
    )
  }
}

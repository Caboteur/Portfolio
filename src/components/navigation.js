import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.css'
import logo from '../images/logo.svg'

class Navigation extends React.Component {

  constructor(){
    super();
    this.state= {
      stroke:"line-through",
      point:"realisation",
      active:"false"
    }
  }

  handleClick(e) {
    this.setState({
             point: e.target.name
          });

  }

  render() {





    return (
      <nav role="navigation">
        <ul className="navigation">
        <Link  to="/main" onClick={this.handleClick.bind(this)}>
           <img className="Mainlogo" to="/main" src={logo} />
           </Link>
          <li  className="navigationItem"  >
            <Link name="realisation" to="/blog/" onClick={this.handleClick.bind(this)} style={this.state.point == "realisation"? {textDecoration:"none"} : {textDecoration:"line-through"}}>Réalisations</Link>
          </li>
          <li className="navigationItem" >
            <Link name="skills" to="/skills" onClick={this.handleClick.bind(this)} style={this.state.point == "skills"? {textDecoration:"none"} : {textDecoration:"line-through"}}>Skills</Link>
          </li>
          <li className="navigationItem" >
            <Link name="contact" to="/contact/" onClick={this.handleClick.bind(this)} style={this.state.point == "contact"? {textDecoration:"none"} : {textDecoration:"line-through"}}>Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation

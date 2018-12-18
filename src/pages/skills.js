import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import skillsMaps from '../images/skillsMap.svg'
import styled from './skills.css'

class Skills extends React.Component {


  render() {


    return (
    <div>
         <img className="skills-wrapper" src={skillsMap} />
    </div>
    )
  }
}

export default Skills

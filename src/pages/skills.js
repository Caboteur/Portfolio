import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Motion from '../images/motion-web.svg'
import skills from '../images/SkillsMap.svg'
import main from './main.css'

class Skills extends React.Component {


  render() {


    return (
    <div>
         <img className="skills-wrapper" style={{border: '2px solid white', maxWidth:'500px', width:'50%', margin:'auto', display:'block'}} src={skills} />
    </div>
    )
  }
}

export default Skills

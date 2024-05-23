import React from 'react'
import linkedin from '../assets/li.svg.png'
import facebook from '../assets/fb.svg.png'
import Github from '../assets/git.png'
const Links = () => {
  return (
    <div className='link-wrapper'>
      <a target='_blank' href="https://www.facebook.com/yuji.hashimoto.7758"><img className='link-image' src={facebook} alt="" /></a>
      <a target='_blank' href="https://au.linkedin.com/in/yuji-hashimoto-488861281"><img className='link-image' src={linkedin} alt="" /></a>
      <a target='_blank' href="https://github.com/yujimoto"><img style={{borderRadius:'8px'}} className='link-image' src={Github} alt="" /></a>
      
    </div>
  )
}

export default Links
import React, { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import style from './welcome.module.css'
import welcomeImg from '../../assets/images/sidebar/welcomeimg.svg'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'

function Wellcome(props) {
  const [offcanvas, setOffcanvas] = useState(false)
  return (
    <div className={`${style.parent}`}>
      <div className={`${style.sidebar}`}>
        <Navbar func={() => {
          setOffcanvas(!offcanvas)
        }} />
        <SideBar panelName={props.name}/>
        <HROffcanvas status={offcanvas} />
      </div>
      <div className={style.welcome}>
        <img src={welcomeImg} alt="" />
        <p>Welcome to Admin Panel!</p>
      </div>
    </div>
  )
}

export default Wellcome

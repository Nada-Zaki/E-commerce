import React from 'react'
import classes from './MainImage.module.css'
import img from '../../assets/bg3.jpg'

const MainImage = () => {
  return (
      <section className={classes.home}>
        <div className={classes["main-img"]}>
          <img src={img} alt="main-img" loading="lazy"/>
        </div>
        <div className={classes.description}>
            <h2>Store For Women And Men</h2>
            <p>Here, you can find all you need</p>
            <a className='btn' href='#products'>Shop Now</a>
        </div>
      </section>
  )
}

export default MainImage
import React from 'react'
import styles from './Home.module.css'
import Sidebar from '../Sidebar'
import Feed from '../Feed'
import Suggestions from '../Suggestions'

const Home = () => {
  return (
    <>
       <div className={styles.supreme_container}>
        <div className={styles.sidebar}>
          <Sidebar/>
        </div>
        <div className={styles.feed}>
          <Feed/>
          <Suggestions/>
        </div>
       </div>
    </>
  )
}

export default Home
import React from 'react'
import styles from './home.module.css'

const home = () => (
  <div className={styles.header}>
    <h2>Welcome to Math Magicians Website</h2>
    <p className={styles.text}>
      Math has a certain logic to it. If you use it to accurately describe a situation, sometimes you can predict the inevitable — for instance, the moment an eclipse will take place — centuries in advance. 
      In today’s Insights puzzle we’ll explore four examples of mathematical magic that can seem, at first glance, like mind reading. Just like stage magic, these examples can leave you wondering, “How did they know that?”
    </p>
    <p className={styles.text}>
      Many of us have experienced this as children. We are asked by a friend to think of a certain number without revealing it. We are then asked to do a series of simple arithmetical operations on it. Finally, our friend astonishes us by telling us our secret number. So how is this done?
      Here’s a simple example that might astonish a child in your life and even inspire a fascination with math. It was used for this purpose by Lewis Carroll, the author of Alice’s Adventures in Wonderland. Carroll was an Oxford mathematician and avid puzzler, whose math puzzles have entertained many mathematicians, including the famous Terence Tao.
    </p>
  </div>
)

export default home
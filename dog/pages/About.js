import React from "react";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to About</h1>
      <div className={styles.profile_pic}>
        <img
          className={styles.image}
          src="/home.jpg"
          alt="profile pic"
          height={150}
          width={150}
        />
      </div>
      <h1>About Me</h1>
      <p className={styles.para}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
        accusamus sequi, minima laudantium inventore ducimus architecto
        corrupti, eos est sit et! Dignissimos voluptatibus ipsum quis.
        Dignissimos maiores eos numquam quis perspiciatis aliquam voluptas ex.
      </p>
    </div>
  );
};
export default About;

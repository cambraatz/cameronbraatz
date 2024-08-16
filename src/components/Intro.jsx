import React from 'react';
import styles from '../styles/IntroSection.module.css';
import Headshot from '../assets/canoe.jpg';

const IntroSection = () => {
  return (
    <section className={styles.intro}>
        <div className={styles.greenBackground}>
            <img
                loading="lazy"
                src={Headshot}
                className={styles.profileImage}
                alt="Profile"
            />
            <div className={styles.contentWrapper}>
                <h3 className={styles.greeting}>hi!</h3>
                <p className={styles.description}>
                    i'm a software engineer and landscape designer with over 6+ years of professional design, development and management experience
                </p>
                <p className={styles.location}>
                    denver, co
                </p>
            </div>
        </div>
    </section>
  );
};

export default IntroSection;
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
                    my name is cameron braatz
                </p>
                <p className={styles.description}>
                    i'm a denver-based software engineer and landscape designer with over 6 years of professional design, development and management experience
                </p>
                <p className={styles.location}>
                    this page serves as a collection of work from my professional + academic projects over my career
                </p>
            </div>
        </div>
    </section>
  );
};

export default IntroSection;
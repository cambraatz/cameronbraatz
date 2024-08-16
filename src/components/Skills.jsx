import React from 'react';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skills}>
        <div className={styles.blueBackground}>
            <div className={styles.contentWrapper}>
                <h3 className={styles.header}>skills</h3>
                <h5 className={styles.description}>software engineering</h5>
                <p className={styles.list}>
                    full-stack software development<br/>
                    application design + development<br/>
                    website design + development<br/>
                    algorithms + algorithmic strategies<br/>
                    data structures + data representation<br/>
                    data analysis + information visualization<br/>
                    artificial intelligence algorithms<br/>
                    sql + nosql database management<br/>
                    apache web server implementation<br/>
                    linux server management + processes<br/>
                    python, c++, scala, javascript, html, css<br/>
                    react, .net, django, flask<br/>
                    figma, adobe creative suite, sketchup, lumion<br/>
                </p>
            </div>
        </div>
        <div className={styles.whiteBackground}>
            <div className={styles.contentWrapper}>
                <h5 className={styles.description}>landscape architecture</h5>
                <p className={styles.list}>
                    full-stack software development<br/>
                    application design + development<br/>
                    website design + development<br/>
                    algorithms + algorithmic strategies<br/>
                    data structures + data representation<br/>
                    data analysis + information visualization<br/>
                    artificial intelligence algorithms<br/>
                    sql + nosql database management<br/>
                    apache web server implementation<br/>
                    linux server management + processes<br/>
                    python, c++, scala, javascript, html, css<br/>
                    react, .net, django, flask<br/>
                    figma, adobe creative suite, sketchup, lumion<br/>
                </p>
            </div>
        </div>
        <div className={styles.greenBackground}>
            <div className={styles.contentWrapper}>
                <h3 className={styles.header}>education</h3>
                <h5 className={styles.description}>university of colorado - boulder</h5>
                <p className={styles.list}>
                    bachelor of science - applied computer science<br/>
                    graduation fall 2024<br/>
                </p>
                <br/>
                <h5 className={styles.description}>university of wisconsin - madison</h5>
                <p className={styles.list}>
                    bachelor of science - landscape architecture<br/>
                    certificate of fine art - sculpture (glass/wood)<br/>
                    graduated spring 2018<br/>
                </p>
            </div>
        </div>
    </section>
  );
};

export default Skills;
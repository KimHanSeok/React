import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './about.module.css';

const About = () => {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/main');
    }

    return(
        <section className = {styles.about}>
            <div className = {styles.main}>
                <div className = {styles.aboutimg}>
                    <img className={styles.aboutimg} src="img/about.jpg" alt='photo1' />
                </div>
                <div className = {styles.abouttext}>
                    <h1>About Us</h1>
                    <h5>Consumer<span> & Producer</span></h5>         
                <p>I wanted to introduce the real taste to consumers who vaguely thought that only expensive ingredients 
                    would be good food, and it began to provide a stable sales channel 
                    for farmers who persist in pesticide-free, a master who silently makes sauce in remote mountains for decades.
                </p>
                <button className = {styles.button} onClick={onClickHandler}>Explore our market</button>
                </div>
            </div>
        </section>
    );
}

export default About;
import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.maintitle}>WHO WE ARE</h1>
      <div className={styles.row}>
        <div className={styles.contactCol}>
          <div className={styles.contact1}>
            <img
              className={styles.avatar}
              src="img/face01.jpg"
              alt="profile photo0"
            />
            <div className={styles.info}>
              <h1 className={styles.name}>Kim Jun Ho</h1>
              <p className={styles.company}>Student</p>
              <p className={styles.title}>Small Market FullStack</p>
              <p className={styles.email}>foxmon1524@gmail.com</p>
              <p className={styles.message}>For forever happiness !</p>
            </div>
          </div>
        </div>
        <div className={styles.contactCol}>
          <div className={styles.contact2}>
            <img
              className={styles.avatar}
              src="img/face04.jpg"
              alt="profile photo1"
            />
            <div className={styles.info}>
              <h1 className={styles.name}>Kim Ho Jin</h1>
              <p className={styles.company}>Student</p>
              <p className={styles.title}>Small Market FrontEnd</p>
              <p className={styles.email}>kimhojin3714@naver.com</p>
              <p className={styles.message}>Study Computer</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.contactCol}>
          <div className={styles.contact3}>
            <img
              className={styles.avatar}
              src="img/face03.jpg"
              alt="profile photo2"
            />
            <div className={styles.info}>
              <h1 className={styles.name}>Park Jae Hyeon</h1>
              <p className={styles.company}>Student</p>
              <p className={styles.title}>Small Market FrontEnd</p>
              <p className={styles.email}>jhpark4884@gmail.com</p>
              <p className={styles.message}>I'm JaeHyeon Park</p>
            </div>
          </div>
        </div>
        <div className={styles.contactCol}>
          <div className={styles.contact4}>
            <img
              className={styles.avatar}
              src="img/face02.jpg"
              alt="profile photo3"
            />
            <div className={styles.info}>
              <h1 className={styles.name}>Kim Han Seok</h1>
              <p className={styles.company}>Student</p>
              <p className={styles.title}>Small Market Design</p>
              <p className={styles.email}>hanzang0706@naver.com</p>
              <p className={styles.message}>Study for Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { registerRequest } from '../../redux/action/authAction';
import styles from './register.module.css';
import { Link } from 'react-router-dom';

function Register() {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPasswrod, setCheckPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registerFlag, setRegisterFlag] = useState(false);
  const history = useHistory();

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const checkPasswordChangeHandler = (event) => {
    setCheckPassword(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const checkInformation = () => {
    if(username.length < 4) {
      alert('Username should be at least 4 characters...');
      setRegisterFlag(false);
    } else if(password.length < 8) {
      alert('Password should be at least 8 characters...');
      setRegisterFlag(false);
    } else if(password !== checkPasswrod) {
      alert('Please check your password...');
      setRegisterFlag(false);
    } else if(name.length === 0) {
      alert('Name is missing...');
      setRegisterFlag(false);
    } else {
      setRegisterFlag(true);
    }

    return registerFlag;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (checkInformation()) {
      dispatch(registerRequest(username, password, email, name));

      if(window.confirm("Success Register! Do you want to Shop?")) {
        history.push('/main');
      } else {
        history.push('/');
      }
    } else {
      alert('Check your information!');
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Link to="/">
        <div>
          <img
            className={styles.intro}
            src="/img/reg_smallmarket.png"
            alt="reg_intro"
          />
        </div>
      </Link>
      <div className={styles.wapper}>
        <div className={styles.content}>
          <div>
            <h3>ID</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="Enter ID"
                onChange={userNameChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>PASSWORD</h3>
            <span className={styles.box_id}>
              <input
                type="password"
                className={styles.int}
                placeholder="Enter password"
                onChange={passwordChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>CONFIRM PASSWORD</h3>
            <span className={styles.box_id}>
              <input
                type="password"
                className={styles.int}
                placeholder="Confirm password"
                onChange={checkPasswordChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>E-MAIL</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="ex) sungkonghoe@skhu.ac.kr"
                onChange={emailChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>NICK NAME</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="Your name in SmallMarket"
                onChange={nameChangeHandler}
              ></input>
            </span>
          </div>
          <div className={styles.btn}>
            <button className={styles.btnJoin} type="submit">
              <span>Ready to Jump</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Register;

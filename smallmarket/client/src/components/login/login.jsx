import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/action/authAction';
import styles from './login.module.css';
import { RiLockPasswordFill, RiUser3Line } from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user);
  const { login, error } = user;
  useEffect(() => {
    dispatch(loginRequest(username, password));
  }, [dispatch, username, password]);

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const registerHandler = () => {
    history.push('/register');
  }


  const onSubmitForm = (event) => {
    dispatch(loginRequest(username, password));
    event.preventDefault();
    if(login) {
      if(window.confirm('Login Success! Do you want to go shop?')) {
        history.push('/items');
      } else {
        history.push('/main');
      }
    } else {
      alert('Login failed...');
    }
  }

  return (
    <>
      <Link to="/">
        <div className={styles.login_logo}>
          <img
            className={styles.logo_text}
            src="/img/reg_smallmarket.png"
            alt="logoText"
          ></img>
        </div>
      </Link>
      <form className={styles.loginWrap} onSubmit={onSubmitForm}>
        <div className={styles.loginIndex}>
          <h3> 로그인 </h3>
          <input
            type="text"
            className={styles.idInput}
            placeholder="아이디를 입력해주세요."
            onChange={userNameChangeHandler}
          ></input>
          <i className={styles.id_icons}>
            <RiUser3Line />
          </i>
          <input
            type="password"
            className={styles.pwInput}
            placeholder="비밀번호를 입력해주세요."
            onChange={passwordChangeHandler}
          ></input>
          <i className={styles.pw_icons}>
            <RiLockPasswordFill />
          </i>
          <button className={styles.btLogin}>로그인</button>
          <button className={styles.btReg} onClick={registerHandler}>회원가입</button>
        </div>
      </form>
    </>
  );
}

export default Login;

import React, { useState } from 'react';
import styles from './new_sms_form.module.css';

const NewSmsForm = ({ smsService }) => {
  const [sms, setSms] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    smsService
      .postSms(sms)
      .then((created) => {
        setSms('');
      })
      .catch(error => console.log(error));
  };

  const onChange = (event) => {
    setSms(event.target.value);
  };

  return (
    <form className={styles.smsForm} onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Edit your sms..!'
        value={sms}
        required
        autoFocus
        onChange={onChange}
        className={styles.smsInput}
      />
      <button type='submit' className={styles.smsButton}>
        CREATE
      </button>
    </form>
  );
};

export default NewSmsForm;
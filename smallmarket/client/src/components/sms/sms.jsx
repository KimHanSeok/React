import React, { memo, useEffect, useState } from 'react';
import NewSmsForm from './sms_form/new_sms_form';
import SmsCard from './smsCard/sms_card';
import styles from './sms.module.css';

const Sms = memo(({ smsService, username, addable }) => {
  const userTest = {
    username: 'foxmon',
  }
  const [sms, setSms] = useState([]); 
  const [error, setError] = useState('');
  const user = userTest;

  useEffect(() => {
    smsService
      .getSmSs(username)
      .then((sms) => setSms([...sms]))
      .catch(onError);
    return smsService.onSync((sms) => onCreated(sms));
  }, [smsService, username, user]);

  const onCreated = (sms) => {  
    setSms((smss) => [sms, ...smss]);
  };

  const onError = (error) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <>
      {addable && (
        <NewSmsForm smsService={smsService} onError={onError} />
      )}
      {sms.length === 0 && <p className={styles.smsEmpty}>No Sms Yet</p>}
      <ul className={styles.sms}>
        {sms.map((item) => (
          <SmsCard
            key={new Date()}
            sms={item}
          />
        ))}
      </ul>
    </>
  );
});
export default Sms;

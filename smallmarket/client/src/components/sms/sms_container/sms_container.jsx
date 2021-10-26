import React, { memo } from 'react';
import styles from './sms_container.module.css';
import AllSms from '../pages/allSms';
import HttpClientFetch from '../../../network/httpClientFetch';
import TokenSotrage from '../../../database/token';
import Socket from '../../../network/socket';
import SmsService from '../../../service/smsService';

const SmsContainer = memo(() => {
  const tokenStorage = new TokenSotrage();
  const base = process.env.REACT_APP_BASE_URL;
  const httpClientFetch = new HttpClientFetch(base);
  const socketClient = new Socket(base, () => tokenStorage.getToken());
  const smsService = new SmsService(httpClientFetch, tokenStorage, socketClient);

  return (
    <div className={styles.app}>
      <AllSms 
        smsService={smsService} 
      />
    </div>
  )
});

export default SmsContainer;
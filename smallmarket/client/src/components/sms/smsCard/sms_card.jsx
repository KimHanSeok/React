import React, { memo } from 'react';
import parseDate from '../../../util/parseDate';
import styles from './sms_card.module.css';

const SmsCard = memo(
  ({ sms }) => {
    const { username, name, text, createdAt } = sms;

    return (
      <li className={styles.sms}>
        <section className={styles.smsContainer}>
          <div className={styles.smsBody}>
            <span className={styles.smsName}>{name}</span>
            <span
              className={styles.smsUsername}
            >
              @{username}
            </span>
            <span className={styles.smsDate}> · {parseDate(createdAt)}</span>
            <p>{text}</p>
          </div>
        </section>
      </li>
    );
  }
);
export default SmsCard;

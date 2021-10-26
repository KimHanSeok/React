import React from 'react';
import Sms from '../sms';

const AllSms = ({ smsService }) => (
  <Sms smsService={smsService} addable={true} />
);

export default AllSms;

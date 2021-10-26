import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styles from './pay.module.css';

const postcodeStyle = {
  width: 500,
};

const main = 'http://localhost:3000/main';

const Pay = (effect, deps) => {
  // 아임포트 API
  useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';

    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init('imp36622352');

    //결제
    const data = {
      pg: 'html5_inicis', // 필수
      pay_method: 'card', // 수단 (필수)
      name: '이름을 입력해 주세용~', //주문명 (필수)
      amount: 64900, // 금액(필수)
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { success, error_msg } = response;

    if (success) {
      alert('결제 성공');
      window.location.href = main;
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  //다음 API
  const [fullAddress, setFullAddress] = useState();
  const [zoneCode, setZoneCode] = useState();
  const [isDaumPost, setIsDaumPost] = useState(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let zoneCode = data.zonecode;
    let extraAddress = '';

    setFullAddress(fullAddress);
    setZoneCode(zoneCode);

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress);
    console.log(zoneCode);
    console.log(data);
  };

  const handleOpenPost = () => {
    setIsDaumPost(true);
  };

  return (
    <div className={styles.pay_wrap}>
      <div className={styles.pay_title}>
        <h2>결제 주문서</h2>
      </div>
      <div className={styles.pay_order_wrap}>
        <div className={styles.pay_order}>
          <h2 className={styles.pay_order_title}>주문 상품</h2>
        </div>
        <div className={styles.pay_order_container}>
          <div className={styles.pay_order_items}>
            <img src="img/pix01.jpeg" alt="order_img"></img>
          </div>
          <div className={styles.pay_order_items}>
            <h4>[회사이름] : 상품명</h4>
          </div>
          <div className={styles.pay_order_items}>
            <h4>1개</h4>
          </div>
          <div className={styles.pay_order_items}>
            <h4>0000원</h4>
          </div>
        </div>

        <div className={styles.purchaser_order}>
          <h2 className={styles.pay_order_title}>주문자 정보</h2>
        </div>
        <div className={styles.pay_info_wrap}>
          <div className={styles.info_container}>
            <span className={styles.info_name}>발송자</span>
            <input
              className={styles.info_input}
              placeholder="이름을 입력해주세요."
            ></input>
          </div>
          <div className={styles.info_container}>
            <span className={styles.info_name}>휴대폰</span>
            <input
              className={styles.info_input}
              placeholder="숫자만 입력해주세요."
            ></input>
          </div>
          <div className={styles.info_container}>
            <span className={styles.info_name}>이메일</span>
            <input
              className={styles.info_input}
              placeholder="예) sungkonghoe@skhu.ac.kr"
            ></input>
          </div>
        </div>

        <div className={styles.delivery_wrap}>
          <h2 className={styles.pay_order_title}>배송 정보</h2>
        </div>
        <div className={styles.delivery_info_wrap}>
          <div>
            <div className={styles.delivery_zone_code}>
              {zoneCode}
              <div className={styles.btn_delivery_register_wrap}>
                <button
                  type="button"
                  className={styles.btn_delivery_register}
                  onClick={handleOpenPost}
                >
                  <span>우편번호 등록</span>
                </button>
              </div>
            </div>
            <div className={styles.delivery_full_address}>
              {fullAddress}
              <input
                className={styles.delivery_other_address}
                type="text"
              ></input>
              {isDaumPost ? (
                <DaumPostcode
                  onComplete={handleComplete}
                  style={postcodeStyle}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.delivery_wrap}>
          <h2 className={styles.pay_order_title}>결제</h2>
        </div>
        <div className={styles.payment_wrap}>
          <button
            type="button"
            className={styles.btn_payment}
            onClick={onClickPayment}
          >
            <span>결제 하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pay;

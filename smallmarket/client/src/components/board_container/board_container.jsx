import React, { useState } from 'react';
import QuestionBoard from '../board/qestion_board';
import styles from './board_container.module.css';

const BoardContainer = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onClickHandler = () => {
  }

  return (
    <>
      <header className={styles.title}>
        <h1 className={styles.name}>Q & A</h1>
        <button 
          className={styles.postButton}
          onClick={onClickHandler}
        >POST
        </button>
      </header>
      <div className={styles.container}>
        <QuestionBoard />
        <QuestionBoard />
        <QuestionBoard />
        <QuestionBoard />
        <QuestionBoard />
        <QuestionBoard />
        <QuestionBoard />
        <QuestionBoard />
      </div>
    </>
  );
}

export default BoardContainer;
import React from 'react';
import styles from './question_board.module.css';

const QuestionBoard = () => {
  return (
    <div className={styles.post}>
        <div className={styles.title}>
          <h1>Title</h1>
          <div className={styles.author}>
            <p>Author</p>
          </div>
        </div>
        <div className={styles.body}>
          <p>Description</p>
        </div>
      </div>
  );
}

export default QuestionBoard;
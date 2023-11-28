/* BoardWrite.js */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './BoardWrite.module.css'; // Import the CSS module

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: '',
    createdBy: '',
    contents: '',
    location: '',
  });

  const { title, createdBy, contents, location } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const saveBoard = async () => {
    await axios.post(`//localhost:8080/board`, board).then((res) => {
      alert('등록되었습니다.');
      navigate('/board');
    });
  };

  const backToList = () => {
    navigate('/board');
  };

  return (
    <div className={styles.container}>
      <div>
        <label className={styles.label}>제목</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      <br />
      <div>
        <label className={styles.label}>습득위치</label>
        <input
          type="text"
          name="createdBy"
          value={createdBy}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      <br />
      <div>
        <label className={styles.label}>놓아둔 장소</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      <br />
      <div>
        <label className={styles.label}>내용</label>
        <textarea
          name="contents"
          cols="30"
          rows="10"
          value={contents}
          onChange={onChange}
          className={styles.textarea}
        ></textarea>
      </div>
      <br />
      <div className={styles.button-container}>
        <button onClick={saveBoard} className={styles.button}>
          저장
        </button>
        <button onClick={backToList} className={styles.button}>
          취소
        </button>
      </div>
    </div>
  );
};

export default BoardWrite;


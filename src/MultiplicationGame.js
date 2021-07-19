import React, { useReducer, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowAltCircleDown, FaArrowLeft } from "react-icons/fa";

const initialState = {
  questionNumber: 0,
  correctAnswers: 0,
  firstNumber: 0,
  secondNumber: 0,
  answer: 0,
  alertStatus: "",
  lastNumbers: [0, 0],
};

const generateTwoRandomNumbers = (id) => {
  let rand1, rand2;
  if (id === 1) {
    rand1 = Math.floor(Math.random() * 9) + 1;
    rand2 = Math.floor(Math.random() * 9) + 1;
  }
  if (id === 2) {
    rand1 = Math.floor(Math.random() * 99) + 1;
    rand2 = Math.floor(Math.random() * 99) + 1;
  }
  if (id === 3) {
    rand1 = Math.floor(Math.random() * 999) + 1;
    rand2 = Math.floor(Math.random() * 999) + 1;
  }
  return [rand1, rand2];
};

const reducer = (state, action) => {
  if (action.type === "FIRST_RUN") {
    let [rand1, rand2] = generateTwoRandomNumbers(action.payload);

    return {
      ...state,
      questionNumber: 1,
      correctAnswers: 0,
      firstNumber: rand1,
      secondNumber: rand2,
      answer: rand1 * rand2,
    };
  }
  if (action.type === "ANSWER") {
    let [rand1, rand2] = generateTwoRandomNumbers(action.payload[1]);
    if (action.payload[0] === "correct") {
      return {
        ...state,
        lastNumbers: [state.firstNumber, state.secondNumber],
        alertStatus: "correct",
        questionNumber: state.questionNumber + 1,
        correctAnswers: state.correctAnswers + 1,
        firstNumber: rand1,
        secondNumber: rand2,
        answer: rand1 * rand2,
      };
    } else {
      return {
        ...state,
        lastNumbers: [state.firstNumber, state.secondNumber],
        alertStatus: "wrong",
        questionNumber: state.questionNumber + 1,
        firstNumber: rand1,
        secondNumber: rand2,
        answer: rand1 * rand2,
        showAlert: false,
      };
    }
  }
};

const MultiplicationGame = () => {
  let { id } = useParams();
  id = parseInt(id);

  const [state, dispatch] = useReducer(reducer, initialState);

  const inputRef = useRef(null);

  useEffect(() => {
    dispatch({ type: "FIRST_RUN", payload: id });
  }, [id]);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      const value = parseInt(inputRef.current.value);
      if (value === state.answer) {
        dispatch({ type: "ANSWER", payload: ["correct", id] });
        console.log("correct");
      } else {
        dispatch({ type: "ANSWER", payload: ["wrong", id] });
        console.log("wrong");
      }
      inputRef.current.value = "";
    }
  };

  return (
    <main>
      <div className="main-container">
        <div className="addition-game-title">
          <h4>Multiplication</h4>
          <p>
            UP TO {`${id === 1 ? `${id} DIGIT` : `${id} DIGITS`}`} - QUESTION{" "}
            {state.questionNumber}
          </p>
          <p>
            CORRECT {state.correctAnswers}/{state.questionNumber - 1}
          </p>
        </div>
        <div className="addition-game-hero">
          <h1>
            {state.firstNumber} x {state.secondNumber}
          </h1>
        </div>
        <form className="addition-game-form" onSubmit={handleSubmit}>
          <input type="number" className="input-form" ref={inputRef} />
          <button type="submit" className="btn-submit">
            <FaArrowAltCircleDown className="submit-icon" />
          </button>
        </form>
        {state.alertStatus === "wrong" && (
          <div className="addition-game-info">
            <p className="alert">WRONG ANSWER!</p>
            <p>
              {state.lastNumbers[0]} x {state.lastNumbers[1]} ={" "}
              {state.lastNumbers[0] * state.lastNumbers[1]}
            </p>
          </div>
        )}
        {state.alertStatus === "correct" && (
          <div className="addition-game-info">
            <p className="alert correct">CORRECT ANSWER!</p>
            <p>
              {state.lastNumbers[0]} x {state.lastNumbers[1]} ={" "}
              {state.lastNumbers[0] * state.lastNumbers[1]}
            </p>
          </div>
        )}
        <Link to="/multiplication">
          <div className="btn-back">
            <FaArrowLeft className="back-icon" />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default MultiplicationGame;

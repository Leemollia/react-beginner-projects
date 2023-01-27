import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correctAnswers, setActiveSlide, setCorrectAnswers}) {
  const clickReset = () => {
    setActiveSlide(0);
    setCorrectAnswers(0);
  }
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correctAnswers} ответа из {questions.length}</h2>
      <button onClick={clickReset}>Попробовать снова</button>
    </div>
  );
}

function Game({ activeSlide, setActiveSlide, correctAnswers, setCorrectAnswers }) {

  const clickVariant = (ind) => {
    setActiveSlide(activeSlide + 1);
    if (questions[activeSlide].correct === ind) {
      setCorrectAnswers(correctAnswers + 1);
    }
  }

  return (
    <>
      <div className="progress">
        <div style={{ width: activeSlide * 100 / questions.length + '%' }} className="progress__inner"></div>
      </div>
      <h1>{questions[activeSlide].title}</h1>
      <ul>
        {questions[activeSlide].variants.map((item, ind) => <li key={ind + item} onClick={() => clickVariant(ind)}>{item}</li>)}
      </ul>
    </>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);

  return (
    <div className="App">
      {activeSlide < questions.length ?
        <Game activeSlide={activeSlide} setActiveSlide={setActiveSlide} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} /> :
        <Result activeSlide={activeSlide} setActiveSlide={setActiveSlide} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers}/>}
    </div>
  );
}

export default App;

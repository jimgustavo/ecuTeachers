import React, { Component } from "react";
import quizQuestions from "./api/quizQuestions";
import Quiz from "./quizFiles/Quiz";
import Result from "./quizFiles/Result";
import logo from "./svg/logo.svg";
import "./App.css";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passage: [
        {
          topic: "Techonology",
          title: "Friendships that depend on technology",
          passage:
            " According to a recent survey, two thirds of the interaction between friends now takes place electronically. Research into modern friendship shows that time spent in direct contact, talking on the phone or meeting a person, is much less than the contact through texts, emails and social media."
        }
      ],
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        Nintendo: 0,
        Microsoft: 0,
        Sony: 0
      },
      result: ""
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  /*
  componentDidMount() {
    Axios.get("/api/assessment")
      .then(res => {
        const quizQuestions = res.data;
        this.setState({ quizQuestions });
        console.log(quizQuestions);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  */

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
      passage: [
        {
          topic: "Social Organization",
          title: "Science",
          passage: "it´s a new passage"
        }
      ]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: state.answersCount[answer] + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    console.log(this.state.passage);
    return (
      <div classname="containerQuiz">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="containerPassage">
          <div>
            {this.state.passage.map(({ title, topic, passage }) => (
              <div className="passage">
                <div className="topic">{topic}</div>
                <h2>{title}</h2>
                <div>{passage}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="containerQuestions">
          <div>
            {this.state.result ? this.renderResult() : this.renderQuiz()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

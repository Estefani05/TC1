import {  useState } from "react";
import { data } from "./assets/data2";
export const Request = ({children,name,onSubmited}) => {
  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

 
  //const allData = {}
  //const data = [];
  
/*
  useEffect( ()=>{
    async function requestData(){

      fetch('http://localhost:1234/Questions')
      .then(res => res.json())
      .then(allData => {

        //const allData = JSON.parse(json)
        
        setAnswers(allData.Responces)
       // setQuestions(allData.Questions)
        // do something with data
      })
      .catch(rejected => {
          console.log(rejected);
      })}requestData()},[]);
*/
/*
      const res = await fetch('http://localhost:1234/Questions')
      const json = await res.json()
      const allData = JSON.parse(json)
      const data = allData.Questions
      console.log(data)
      setAnswers(allData.Responces)

      setQuestions(data)
      */
 
const answers = [
  "q11-a",
  "q18-c",
  "q19-a",
  "q15-a",
  "q17-c",
  "q14-c",
  "q16-a",
  "q7-b",
  "q8-a",
  "q2-b"
]
  //const answers = ["q1-a", "q2-b", "q3-c", "q4-a", "q5-b"];

  function atras(){
      onSubmited('./Name', '');
  }



  const handleChange = ({ target }) => {
    const nextState = questions.map((question) => {
      if (question.name !== target.name) {
        return question;
      }

      return {
        ...question,
        options: question.options.map((opt) => {
          const checked = opt.radioValue === target.value;
          return {
            ...opt,
            selected: checked,
          };
        }),
        currentAnswer: target.value,
      };
    });
    setQuestions(nextState);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    let counter = 0;
    let flag = false;

    for (const [index, question] of questions.entries()) {
      if (false){//!question.currentAnswer) {
        flag = true;
        alert("Por favor responde la pregunta #" + (index + 1));
        break;
      } else {
        if (question.currentAnswer === answers[index]) {
          ++counter;
        }
      }
    }

    if (!flag) {
      setTotal(counter);
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      <>
        <h1>App Quiz</h1>

        <h2>Esta jugando {name}</h2>
        <p>Responde las siguientes preguntas</p>
      </>
      <section>
        {submitted && (
          <div className="result">
            <h3>
              Obtuviste {total} de {answers.length} puntos
            </h3>
          </div>
        )}
        <form onSubmit={onSubmit}>
          {questions.map((question, idx) => (
            <div key={`group-${idx}`}>
              <h3>
                {idx + 1}. {question.questionText}
              </h3>
              {question.options.map((option, idx) => {
                return (
                  <div key={`option-${idx}`}>
                    <input
                      type="radio"
                      name={question.name}
                      value={option.radioValue}
                      checked={option.selected}
                      onChange={handleChange}
                    />
                    {option.choice}
                  </div>
                );
              })}
            </div>
          ))}
          <button className="sendInfo" onClick={onSubmit}>
            Submit
          </button>

          <button className="sendInfo" onClick={atras}>
            atras
          </button>
        </form>
      </section>
    </div>
  );
};

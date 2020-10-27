(function(){
    function buildQuiz(){
      const output = [];
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<<scripting>scripting>",
            b: "<<js>js>",
            c: "<<javascript>javascript>",
            d: "script"
        },
        correctAnswer: "d"
      },
      {
        question: "The external JavaScript file must contain the script tag",
        answers: {
            a: "True",
            b: "False",
            c: "None",
            d: "Both",
          },
          correctAnswer: "a"
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
          a: "alert('Hello World');",
          b: "alertBox('Hello World');",
          c: "msg('Hello World');",
          d: "msgBox('Hello World')",
        },
        correctAnswer: "a"
      }
    ];
    buildQuiz();
    submitButton.addEventListener('click', showResults);
  })();
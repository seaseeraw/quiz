


// const QUIZ_TIME = 100; // Quiz duration in seconds
// const QUIZ_QUESTION_POINTS = 1; // Points per question
// const PASS_PERCENT = 50; // Passing percentage

// // Global variables
// let quiz = [];
// let timer = 0;
// let currentQuestionIndex = 0; // Track the current question
// let setInterValId;
// let timerAudio = document.getElementById("timerAudio");
// let cheerAudio = document.getElementById("cheerAudio");
// let booAudio = document.getElementById("booAudio");

// // Fetch quiz questions
// async function fetchQuizQuestions() {
//     try {
//         const response = await fetch("quiz.json");
//         const data = await response.json();
//         quiz = data;
//         console.log("Quiz Data:", quiz);
//         showModule('start-module');
//     } catch (error) {
//         console.error("Error fetching quiz questions:", error);
//     }
// }

// // Initialize fetching of quiz questions
// fetchQuizQuestions();

// function showModule(moduleName) {
//     const moduleList = document.querySelectorAll(".module");
//     moduleList.forEach(m => {
//         m.style.display = (m.id === moduleName) ? "block" : "none";
//     });
// }

// function startQuiz() {
//     showModule("quiz-module");
//     currentQuestionIndex = 0;
//     showQuestion(); // Display the first question
//     startTimer(); // Start the timer
// }

// function startTimer() {
//     const timerElement = document.getElementById("timer");
//     timer = QUIZ_TIME;
//     setInterValId = setInterval(() => {
//         timerElement.innerText = timer;
//         timer -= 1;
//         if (timer < 0) {
//             stopQuiz();
//         }
//     }, 1000);
// }

// function stopQuiz() {
//     clearInterval(setInterValId);
//     showModule("score-module");
//     calculateResult();
// }

// function calculateResult() {
//     const selectedOptionList = document.querySelectorAll('input[type="radio"]:checked');
//     let score = 0;
//     let result = "Failed";

//     console.log("Selected Options:", Array.from(selectedOptionList).map(input => input.id));

//     selectedOptionList.forEach(item => {
//         const [ , questionNo, , answerSelected] = item.id.split("-").map(Number);

//         // Ensure the questionNo and answerSelected are valid
//         if (quiz[questionNo] && quiz[questionNo].answer === answerSelected) {
//             score += QUIZ_QUESTION_POINTS;
//         }
//     });

//     const resultPercent = (score / (QUIZ_QUESTION_POINTS * quiz.length)) * 100;

//     if (resultPercent >= PASS_PERCENT) {
//         result = "PASSED";
//         cheerAudio.play();
//     } else {
//         booAudio.play();
//     }

//     console.log("Score:", score);
//     console.log("Result Percent:", resultPercent);

//     document.getElementById("score").innerText = `Score: ${score}`;
//     document.getElementById("result").innerText = `Result: ${result}`;
// }

// function resetQuiz() {
//     clearInterval(setInterValId);
//     document.getElementById("timer").innerText = "--";
//     showModule("start-module");
// }

// function showQuestion() {
//     const questionObj = quiz[currentQuestionIndex];
//     const quizList = document.getElementById("quizList");

//     quizList.innerHTML = ''; // Clear previous question

//     const questionList = document.createElement("li");
//     questionList.classList.add("quiz-question");

//     const questionSpan = document.createElement("span");
//     questionSpan.innerText = `Question ${currentQuestionIndex + 1}: ${questionObj.question}`;

//     const optionsUL = document.createElement("ul");
//     optionsUL.classList.add("quiz-answer");

//     questionObj.options.forEach((option, optionIndex) => {
//         const optionList = document.createElement("li");

//         const inputElement = document.createElement("input");
//         inputElement.id = `q-${currentQuestionIndex}-a-${optionIndex}`;
//         inputElement.type = "radio";
//         inputElement.name = `question-${currentQuestionIndex}`;

//         const inputLabel = document.createElement("label");
//         inputLabel.setAttribute("for", inputElement.id);
//         inputLabel.innerText = option;

//         optionList.append(inputElement);
//         optionList.append(inputLabel);
//         optionsUL.append(optionList);
//     });

//     questionList.append(questionSpan);
//     questionList.append(optionsUL);
//     quizList.append(questionList);

//     // Enable the "Next" button only when an option is selected
//     document.querySelectorAll(`input[name="question-${currentQuestionIndex}"]`).forEach(input => {
//         input.addEventListener('change', () => {
//             document.getElementById("next-button").disabled = false;
//         });
//     });

//     // Handle button visibility
//     document.getElementById("prev-button").style.display = currentQuestionIndex === 0 ? "none" : "inline";
//     document.getElementById("next-button").style.display = currentQuestionIndex === quiz.length - 1 ? "none" : "inline";
// }

// function showNextQuestion() {
//     currentQuestionIndex++;
//     showQuestion();
//     document.getElementById("next-button").disabled = true; // Disable "Next" button until an option is selected
// }

// function showPreviousQuestion() {
//     currentQuestionIndex--;
//     showQuestion();
//     document.getElementById("next-button").disabled = true; // Disable "Next" button until an option is selected
// }


const QUIZ_QUESTION_POINTS = 1; // Points per question
const PASS_PERCENT = 50; // Passing percentage

const QUIZ_TIME = 100;
let currentQuestionIndex = 0; 
let timer= 0;
let setInterValId;
let quiz =[];
async function fetchQuizQuestions() {
    const response = await fetch("quiz.json");
    const data = await response.json();
    quiz = data;
    console.log("Quiz Data:",quiz);
    showModule('start-module')
}
fetchQuizQuestions()

function showModule(moduleName) {
    const moduleList = document.querySelectorAll(".module");
    moduleList.forEach(m => {
        m.style.display = (m.id === moduleName) ? "block" : "none";
    });
}



function startQuiz() {
    showModule("quiz-module");
    currentQuestionIndex = 0;
    showQuestion();
    startTimer();
}

function startTimer() {
    const timerElement = document.getElementById("timer");
     const sound = document.getElementById("timerAudio");
    timer = QUIZ_TIME;
    setInterValId = setInterval(() => {
        sound.play();
        timerElement.innerText = timer;
        timer -= 1;
        if (timer < 0) {
            
            stopQuiz();
        }
    }, 1000);
}


const questionObj = quiz[currentQuestionIndex];

function showQuestion() {
    const quizList = document.getElementById("quizList");
    quizList.innerHTML = ''; 

    quiz.forEach((questionObj, questionIndex) => {
        const questionItem = document.createElement("li");
        const questionSpan = document.createElement("span");
        questionSpan.innerText = `Question ${questionIndex + 1}: ${questionObj.question}`;
        questionItem.appendChild(questionSpan);

        const optionsUL = document.createElement("ul");

        questionObj.options.forEach((option, optionIndex) => {
            const optionLI = document.createElement("li");

            const inputElement = document.createElement("input");
            inputElement.id = `q-${questionIndex}-a-${optionIndex}`;
            inputElement.type = "radio";
            inputElement.name = `question-${questionIndex}`;

            const inputLabel = document.createElement("label");
            inputLabel.setAttribute("for", inputElement.id);
            inputLabel.innerText = option;

            optionLI.appendChild(inputElement);
            optionLI.appendChild(inputLabel);
            optionsUL.appendChild(optionLI);
        });

        questionItem.appendChild(optionsUL);
        quizList.appendChild(questionItem);
    });
}


function calculateResult() {
    const selectedOptionList = document.querySelectorAll('input[type="radio"]:checked');
    let score = 0; 

    selectedOptionList.forEach(item => {
        
        const [ , questionIndex, , ] = item.id.split("-").map(Number);

     
        const selectedAnswer = document.querySelector(`label[for="${item.id}"]`).innerText;

        
        if (quiz[questionIndex] && selectedAnswer === quiz[questionIndex].answer) {
            score += QUIZ_QUESTION_POINTS; 
        }
    });

    
    const resultPercent = (score / quiz.length) * 100;
    const result = resultPercent >= PASS_PERCENT ? "PASSED" : "FAILED";

    
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("result").innerText = `Result: ${result}`;
}


showQuestion();


function stopQuiz() {
    clearInterval(setInterValId);
    showModule("score-module");
    calculateResult();
}

function resetQuiz() {
    clearInterval(setInterValId);
    document.getElementById("timer").innerText = "--";
    showModule("start-module");
}







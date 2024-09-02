// 100sec
// const QUIZ_TIME = 100;
// // Quesyion points
// const Quiz_QUESTION_POINTS = 1;
// // passpetcentage
// const PASS_PERCENT =50;
// // Global variable
// let quiz =[];
// let timer = 0;
// let setInterValId;
// let timerAudio = document.getElementById("timerAudio");
// let cheerAudio = document.getElementById("cheerAudio");
// let booAudio = document.getElementById("booAudio");

// async function fetchQuizQuestion() {
//     const response = await fetch("quiz.json");
//     const data = await response.json();
//     quiz = data;
//     console.log(quiz);

//     showModule('start-module');
    
// }
// // fetching  quiz question
// fetchQuizQuestion();

// function showModule(moduleName){
//     // get all module class element
//     const moduleList = document.querySelectorAll(".module");
//    for (m of moduleList){
//     if(m.id === moduleName){
//         m.style.display = "block";
//     }
//     else{
//         m.style.display = "none";
//     }
//    }
// }

// const startQuiz = () =>{
//     showModule("quiz-module");

//     const questionUL = document.getElementById("quizList");
//     questionUL.innerHTML ="";
//     console.log(quiz);
//     for(quizIndex in quiz){
//         const questionList =document.createElement("li");
//         questionList.classList.add("quiz-question");

//         const questionSpan =document.createElement("span");
//         questionSpan.innerText = quiz[quizIndex].question;

//         const optionsUL =document.createElement("ul");
//         optionsUL.classList.add("quiz-answer");

//         for (optionIndex in quiz[quizIndex].options){
//             const optionList = document.createElement("li");
//             const inputElement = document.createElement("input");
//             inputElement.id = "q-" + quizIndex + "-a-" + optionIndex;
//             inputElement.type ="radio";
//             inputElement.name = "question-" + quizIndex;
//             const inputLabel = document.createElement("label");
//             inputLabel.setAttribute(
//                 "for",
//                 "q-" + quizIndex + "-a" + optionIndex
//             );
//             inputLabel.innerText = quiz[quizIndex].options[optionIndex];
//             optionList.append(inputElement);
//             optionList.append(inputLabel);
//             optionsUL.append(optionList);

//         }
//         questionList.append(questionSpan);
//         questionList.append(optionsUL);


//         questionUL.append(questionList);

//     }
//     timer = QUIZ_TIME;
//     setInterValId=setInterval(startTimer,1000);
// };
// const startTimer = () =>{
//    let timerElement = document.getElementById("timer");
// timerElement.innerText = timer;
// timer -= 1;
//     console.log("timer");
//     if (timer <= 0){
//         stopQuiz();
//     }
// };
// const stopQuiz = () => {
//     console.log("stop Quiz");
//     clearInterval(setInterValId);
//     showModule("score-module");
//     calculateResult();
// };

// const calculateResult = () => {
//     const selectedOptionList = document.querySelectorAll(
// 'input[type="radio"]:checked'
//     );
//     let score = 0;
//     let result ="Failed";

//     for( item of selectedOptionList){
//         questionNo = item.id.split("."[1]);
//         answerSelected = item.id.split("-")[3];
//         if(
//             quiz[questionNo].answer === quiz[questionNo].options[answerSelected]
//         ){
//             score = score + QUIZ_QUESTION_POINTS;
//         }
//     };
//     const resultPercent = (score/(QUIZ_QUESTION_POINTS* quiz.length))*100;
    
//     if (resultPercent >= PASS_PERCENT){
//         result="PASSED";
//         cheerAudio.play();
//     }
// else{
//     booAudio.play();
// }
// const scoreElement = document.getElementById("score");
// scoreElement.innerText = score;

// const resultElement = document.getElementById("result");
// resultElement.innerText = result;
// }; 

// const resetQuiz = () =>{
//     console.log("reset");
//     // reset timer
//     const timerElement = document.getElementById("timer");
//     timerElement.innerText = "--";
//     showModule("start-modle");
// };




// const QUIZ_TIME = 100; // Quiz duration in seconds
// const QUIZ_QUESTION_POINTS = 1; // Points per question
// const PASS_PERCENT = 50; // Passing percentage

// // Global variables
// let quiz = [];
// let timer = 0;
// let setInterValId;
// let timerAudio = document.getElementById("timerAudio");
// let cheerAudio = document.getElementById("cheerAudio");
// let booAudio = document.getElementById("booAudio");

// async function fetchQuizQuestions() {
//     const response = await fetch("quiz.json");
//     const data = await response.json();
//     quiz = data;
//     console.log(quiz);
//     showModule('start-module');
// }

// // Fetching quiz questions
// fetchQuizQuestions();

// function showModule(moduleName) {
//     const moduleList = document.querySelectorAll(".module");
//     moduleList.forEach(m => {
//         if (m.id === moduleName) {
//             m.style.display = "block";
//         } else {
//             m.style.display = "none";
//         }
//     });
// }

// const startQuiz = () => {
//     showModule("quiz-module");

//     const questionUL = document.getElementById("quizList");
//     questionUL.innerHTML = "";

//     quiz.forEach((questionObj, quizIndex) => {
//         const questionList = document.createElement("li");
//         questionList.classList.add("quiz-question");

//         const questionSpan = document.createElement("span");
//         questionSpan.innerText = questionObj.question;

//         const optionsUL = document.createElement("ul");
//         optionsUL.classList.add("quiz-answer");

//         questionObj.options.forEach((option, optionIndex) => {
//             const optionList = document.createElement("li");
//             const inputElement = document.createElement("input");
//             inputElement.id = `q-${quizIndex}-a-${optionIndex}`;
//             inputElement.type = "radio";
//             inputElement.name = `question-${quizIndex}`;

//             const inputLabel = document.createElement("label");
//             inputLabel.setAttribute("for", inputElement.id);
//             inputLabel.innerText = option;

//             optionList.append(inputElement);
//             optionList.append(inputLabel);
//             optionsUL.append(optionList);
//         });

//         questionList.append(questionSpan);
//         questionList.append(optionsUL);
//         questionUL.append(questionList);
//     });

//     timer = QUIZ_TIME;
//     setInterValId = setInterval(startTimer, 1000);
// };

// const startTimer = () => {
//     const timerElement = document.getElementById("timer");
//     timerElement.innerText = timer;
//     timer -= 1;
//     if (timer <= 0) {
//         stopQuiz();
//     }
// };

// const stopQuiz = () => {
//     console.log("Quiz stopped");
//     clearInterval(setInterValId);
//     showModule("score-module");
//     calculateResult();
// };

// const calculateResult = () => {
//     const selectedOptionList = document.querySelectorAll('input[type="radio"]:checked');
//     let score = 0;
//     let result = "Failed";

//     selectedOptionList.forEach(item => {
//         const questionNo = parseInt(item.id.split("-")[1]);
//         const answerSelected = parseInt(item.id.split("-")[3]);
//         if (quiz[questionNo].answer === quiz[questionNo].options[answerSelected]) {
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

//     const scoreElement = document.getElementById("score");
//     scoreElement.innerText = `Score: ${score}`;

//     const resultElement = document.getElementById("result");
//     resultElement.innerText = `Result: ${result}`;
// };

// const resetQuiz = () => {
//     console.log("Quiz reset");
//     // Reset timer
//     const timerElement = document.getElementById("timer");
//     timerElement.innerText = "--";
//     showModule("start-module");
// };


// const QUIZ_TIME = 100; // Quiz duration in seconds
// const QUIZ_QUESTION_POINTS = 1; // Points per question
// const PASS_PERCENT = 50; // Passing percentage

// let quiz = [];
// let timer = 0;
// let setInterValId;
// let currentQuestionIndex = 0;
// let totalQuestions = 0;

// let timerAudio = document.getElementById("timerAudio");
// let cheerAudio = document.getElementById("cheerAudio");
// let booAudio = document.getElementById("booAudio");

// async function fetchQuizQuestions() {
//     const response = await fetch("quiz.json");
//     const data = await response.json();
//     quiz = data;
//     totalQuestions = quiz.length;
//     console.log(quiz);
//     showModule('start-module');
// }

// function showModule(moduleName) {
//     const moduleList = document.querySelectorAll(".module");
//     moduleList.forEach(m => {
//         m.style.display = m.id === moduleName ? "block" : "none";
//     });
// }

// function showQuestion(index) {
//     if (index < 0 || index >= quiz.length) return;

//     const questionContainer = document.getElementById("question-container");
//     questionContainer.innerHTML = "";

//     const questionObj = quiz[index];

//     const questionElement = document.createElement("div");
//     questionElement.classList.add("quiz-question");

//     const questionSpan = document.createElement("span");
//     questionSpan.innerText = questionObj.question;

//     const optionsUL = document.createElement("ul");
//     optionsUL.classList.add("quiz-answer");

//     questionObj.options.forEach((option, optionIndex) => {
//         const optionList = document.createElement("li");
//         const inputElement = document.createElement("input");
//         inputElement.id = `q-${index}-a-${optionIndex}`;
//         inputElement.type = "radio";
//         inputElement.name = `question-${index}`;

//         const inputLabel = document.createElement("label");
//         inputLabel.setAttribute("for", inputElement.id);
//         inputLabel.innerText = option;

//         optionList.append(inputElement);
//         optionList.append(inputLabel);
//         optionsUL.append(optionList);
//     });

//     questionElement.append(questionSpan);
//     questionElement.append(optionsUL);
//     questionContainer.append(questionElement);

//     // Update progress
//     document.getElementById("current-question").innerText = index + 1;
//     document.getElementById("total-questions").innerText = totalQuestions;

//     document.getElementById("prev-button").style.display = index === 0 ? "none" : "inline-block";
//     document.getElementById("next-button").style.display = index === quiz.length - 1 ? "none" : "inline-block";
// }

// const startQuiz = () => {
//     showModule("quiz-module");
//     currentQuestionIndex = 0;
//     showQuestion(currentQuestionIndex);

//     timer = QUIZ_TIME;
//     setInterValId = setInterval(startTimer, 1000);
// };

// const startTimer = () => {
//     const timerElement = document.getElementById("timer");
//     timerElement.innerText = timer;
//     timer -= 1;
//     if (timer <= 0) {
//         stopQuiz();
//     }
// };

// const stopQuiz = () => {
//     console.log("Quiz stopped");
//     clearInterval(setInterValId);
//     showModule("score-module");
//     calculateResult();
// };

// const calculateResult = () => {
//     const selectedOptionList = document.querySelectorAll('input[type="radio"]:checked');
//     let score = 0;
//     let result = "Failed";

//     selectedOptionList.forEach(item => {
//         const questionNo = parseInt(item.id.split("-")[1]);
//         const answerSelected = parseInt(item.id.split("-")[3]);
//         if (quiz[questionNo].answer === quiz[questionNo].options[answerSelected]) {
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

//     const scoreElement = document.getElementById("score");
//     scoreElement.innerText = `Score: ${score}`;

//     const resultElement = document.getElementById("result");
//     resultElement.innerText = `Result: ${result}`;
// };

// const showNextQuestion = () => {
//     if (currentQuestionIndex < quiz.length - 1) {
//         currentQuestionIndex++;
//         showQuestion(currentQuestionIndex);
//     }
// };

// const showPreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//         currentQuestionIndex--;
//         showQuestion(currentQuestionIndex);
//     }
// };

// const resetQuiz = () => {
//     console.log("Quiz reset");
//     const timerElement = document.getElementById("timer");
//     timerElement.innerText = "--";
//     showModule("start-module");
// };

// // Fetch quiz questions on page load
// fetchQuizQuestions();



// const QUIZ_TIME = 100; // Quiz duration in seconds
// const QUIZ_QUESTION_POINTS = 1; // Points per question
// const PASS_PERCENT = 50; // Passing percentage

// // Global variables
// let quiz = [];
// let timer = 0;
// let setInterValId;
// let currentQuestionIndex = 0;

// // Audio elements
// let timerAudio = document.getElementById("timerAudio");
// let cheerAudio = document.getElementById("cheerAudio");
// let booAudio = document.getElementById("booAudio");

// // Fetch quiz questions from JSON
// async function fetchQuizQuestions() {
//     const response = await fetch("quiz.json");
//     const data = await response.json();
//     quiz = data;
//     console.log(quiz);
//     showModule('start-module');
// }

// // Fetching quiz questions
// fetchQuizQuestions();

// function showModule(moduleName) {
//     const moduleList = document.querySelectorAll(".module");
//     moduleList.forEach(m => {
//         if (m.id === moduleName) {
//             m.style.display = "block";
//         } else {
//             m.style.display = "none";
//         }
//     });
// }

// function showQuestion() {
//     const questionUL = document.getElementById("quizList");
//     questionUL.innerHTML = ""; // Clear previous questions

//     if (currentQuestionIndex < quiz.length) {
//         const questionObj = quiz[currentQuestionIndex];
        
//         const questionList = document.createElement("li");
//         questionList.classList.add("quiz-question");

//         const questionSpan = document.createElement("span");
//         questionSpan.innerText = questionObj.question;

//         const optionsUL = document.createElement("ul");
//         optionsUL.classList.add("quiz-answer");

//         questionObj.options.forEach((option, optionIndex) => {
//             const optionList = document.createElement("li");
//             const inputElement = document.createElement("input");
//             inputElement.id = `q-${currentQuestionIndex}-a-${optionIndex}`;
//             inputElement.type = "radio";
//             inputElement.name = `question-${currentQuestionIndex}`;
//             inputElement.value = optionIndex;
//             inputElement.addEventListener('change', () => {
//                 document.getElementById("next-button").disabled = false; // Enable the Next button
//             });

//             const inputLabel = document.createElement("label");
//             inputLabel.setAttribute("for", inputElement.id);
//             inputLabel.innerText = option;

//             optionList.append(inputElement);
//             optionList.append(inputLabel);
//             optionsUL.append(optionList);
//         });

//         questionList.append(questionSpan);
//         questionList.append(optionsUL);
//         questionUL.append(questionList);

//         // Update question navigation
//         document.getElementById("current-question").innerText = currentQuestionIndex + 1;
//         document.getElementById("total-questions").innerText = quiz.length;

//         // Show or hide navigation buttons
//         document.getElementById("prev-button").style.display = currentQuestionIndex === 0 ? "none" : "inline";
//         document.getElementById("next-button").style.display = currentQuestionIndex === quiz.length - 1 ? "none" : "inline";
//     }
// }

// const startQuiz = () => {
//     showModule("quiz-module");
//     currentQuestionIndex = 0; // Start with the first question
//     showQuestion();
    
//     timer = QUIZ_TIME;
//     setInterValId = setInterval(startTimer, 1000);
// };

// const startTimer = () => {
//     const timerElement = document.getElementById("timer");
//     timerElement.innerText = timer;
//     timer -= 1;
//     if (timer <= 0) {
//         stopQuiz();
//     }
// };

// const stopQuiz = () => {
//     console.log("Quiz stopped");
//     clearInterval(setInterValId);
//     showModule("score-module");
//     calculateResult();
// };

// const calculateResult = () => {
//     const selectedOptionList = document.querySelectorAll('input[type="radio"]:checked');
//     let score = 0;
//     let result = "Failed";

//     selectedOptionList.forEach(item => {
//         const questionNo = parseInt(item.id.split("-")[1]);
//         const answerSelected = parseInt(item.value);
//         if (quiz[questionNo].answer === quiz[questionNo].options[answerSelected]) {
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

//     const scoreElement = document.getElementById("score");
//     scoreElement.innerText = `Score: ${score}`;

//     const resultElement = document.getElementById("result");
//     resultElement.innerText = `Result: ${result}`;
// };

// const showNextQuestion = () => {
//     if (currentQuestionIndex < quiz.length - 1) {
//         currentQuestionIndex++;
//         showQuestion();
//         document.getElementById("next-button").disabled = true; // Disable the Next button until an answer is selected
//     }
// };

// const showPreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//         currentQuestionIndex--;
//         showQuestion();
//         document.getElementById("next-button").disabled = true; // Disable the Next button until an answer is selected
//     }
// };

// const resetQuiz = () => {
//     console.log("Quiz reset");
//     // Reset timer
//     const timerElement = document.getElementById("timer");
//     timerElement.innerText = "--";
//     showModule("start-module");
// };


const QUIZ_TIME = 100; // Quiz duration in seconds
const QUIZ_QUESTION_POINTS = 1; // Points per question
const PASS_PERCENT = 50; // Passing percentage

// Global variables
let quiz = [];
let timer = 0;
let currentQuestionIndex = 0; // Track the current question
let setInterValId;
let timerAudio = document.getElementById("timerAudio");
let cheerAudio = document.getElementById("cheerAudio");
let booAudio = document.getElementById("booAudio");

async function fetchQuizQuestions() {
    const response = await fetch("quiz.json");
    const data = await response.json();
    quiz = data;
    console.log(quiz);
    showModule('start-module');
}

// Fetching quiz questions
fetchQuizQuestions();

function showModule(moduleName) {
    const moduleList = document.querySelectorAll(".module");
    moduleList.forEach(m => {
        if (m.id === moduleName) {
            m.style.display = "block";
        } else {
            m.style.display = "none";
        }
    });
}

const startQuiz = () => {
    showModule("quiz-module");
    currentQuestionIndex = 0;
    showQuestion(); // Display the first question
    startTimer(); // Start the timer
};

const startTimer = () => {
    const timerElement = document.getElementById("timer");
    timer = QUIZ_TIME;
    setInterValId = setInterval(() => {
        timerElement.innerText = timer;
        timer -= 1;
        if (timer <= 0) {
            stopQuiz();
        }
    }, 1000);
};

const stopQuiz = () => {
    clearInterval(setInterValId);
    showModule("score-module");
    calculateResult();
};

const calculateResult = () => {
    const selectedOptionList = document.querySelectorAll('input[type="radio"]:checked');
    let score = 0;
    let result = "Failed";

    selectedOptionList.forEach(item => {
        const questionNo = parseInt(item.id.split("-")[1]);
        const answerSelected = parseInt(item.id.split("-")[3]);
        if (quiz[questionNo].answer === quiz[questionNo].options[answerSelected]) {
            score += QUIZ_QUESTION_POINTS;
        }
    });

    const resultPercent = (score / (QUIZ_QUESTION_POINTS * quiz.length)) * 100;

    if (resultPercent >= PASS_PERCENT) {
        result = "PASSED";
        cheerAudio.play();
    } else {
        booAudio.play();
    }

    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Score: ${score}`;

    const resultElement = document.getElementById("result");
    resultElement.innerText = `Result: ${result}`;
};

const resetQuiz = () => {
    clearInterval(setInterValId);
    const timerElement = document.getElementById("timer");
    timerElement.innerText = "--";
    showModule("start-module");
};

function showQuestion() {
    const questionObj = quiz[currentQuestionIndex];
    const quizList = document.getElementById("quizList");

    quizList.innerHTML = ''; // Clear previous question

    const questionList = document.createElement("li");
    questionList.classList.add("quiz-question");

    const questionSpan = document.createElement("span");
    questionSpan.innerText = `Question ${currentQuestionIndex + 1}: ${questionObj.question}`;

    const optionsUL = document.createElement("ul");
    optionsUL.classList.add("quiz-answer");

    questionObj.options.forEach((option, optionIndex) => {
        const optionList = document.createElement("li");

        const inputElement = document.createElement("input");
        inputElement.id = `q-${currentQuestionIndex}-a-${optionIndex}`;
        inputElement.type = "radio";
        inputElement.name = `question-${currentQuestionIndex}`;

        const inputLabel = document.createElement("label");
        inputLabel.setAttribute("for", inputElement.id);
        inputLabel.innerText = option;

        optionList.append(inputElement);
        optionList.append(inputLabel);
        optionsUL.append(optionList);
    });

    questionList.append(questionSpan);
    questionList.append(optionsUL);
    quizList.append(questionList);

    // Enable the "Next" button only when an option is selected
    document.querySelectorAll('input[name="question-' + currentQuestionIndex + '"]').forEach((input) => {
        input.addEventListener('change', () => {
            document.getElementById("next-button").disabled = false;
        });
    });

    // Handle button visibility
    document.getElementById("prev-button").style.display = currentQuestionIndex === 0 ? "none" : "inline";
    document.getElementById("next-button").style.display = currentQuestionIndex === quiz.length - 1 ? "none" : "inline";
}

function showNextQuestion() {
    currentQuestionIndex++;
    showQuestion();
    document.getElementById("next-button").disabled = true; // Disable "Next" button until an option is selected
}

function showPreviousQuestion() {
    currentQuestionIndex--;
    showQuestion();
    document.getElementById("next-button").disabled = true; // Disable "Next" button until an option is selected
}

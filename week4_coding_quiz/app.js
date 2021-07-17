const sectionStartQuiz = document.getElementById("section-start-quiz");
const sectionQuizQuestion = document.getElementById("section-quiz-questions");
const buttonStartQuiz = document.getElementById("btn-start-quiz");
const questionTitle = document.getElementById("question-title");
const questionBody = document.getElementById("question-body");
const choiceContainer = document.getElementById('question-choices-container');
const timer = document.getElementById('timer');

const state = {
    currentQuestionIndex: 0,
    time: 5, // in seconds
    intervalId: 0,
}

function startTimer(params) {
    state.intervalId = setInterval(function(){
        state.time -= 1;
        timer.textContent = state.time;

        if(state.time <= 0){
            clearInterval(state.intervalId);

            // go to the end screen 
        }

    }, 1000)
}

function startQuiz(event) {
    event.preventDefault();

    // hide the section start quiz
    sectionStartQuiz.setAttribute("class", "d-hide");

    // show the section quiz qs
    sectionQuizQuestion.classList.remove('d-hide');

    timer.textContent = state.time;
    startTimer();
    renderQuestion(state.currentQuestionIndex);
}

function deductTime(amount){
    // if(typeof amount !== "number"){
    //     throw new Error("Invalid Data for time");
    // }
    state.time -= amount;
}

function checkAnswer(event) {
    const isCorrect = event.target.getAttribute('data-is-answer') === 'true';
    

    // if answer is wrong, deduct time, move on to the next qs
    if(!isCorrect){
        // deduct time
        deductTime();
    }
    state.currentQuestionIndex += 1;

    if(state.currentQuestionIndex === questions.length ){
        // go to the ending screen
        
    }

    // if answer is correct, move on to the next question
    renderQuestion(state.currentQuestionIndex);
    
}


function createChoiceLi(title, isAnswer) {

    
    const questionChoices = document.createElement("div");
    questionChoices.classList.add("question-choices");

    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    const prepend = document.createElement("div");
    prepend.classList.add("input-group-prepend");

    const groupText = document.createElement("div");
    groupText.classList.add("input-text");

    const li = document.createElement("li");
    li.classList.add("form-control");
    li.classList.add("choice-selection");

    li.setAttribute("data-is-answer", String(isAnswer));
    li.textContent = title;

    li.addEventListener('click', checkAnswer);

    groupText.appendChild(li);

    prepend.appendChild(groupText);

    inputGroup.appendChild(prepend);

    questionChoices.appendChild(inputGroup);


    return questionChoices;
}

function renderQuestion(index) {
    const question = questions[index];

    // set title
    questionTitle.textContent = question.title;

    // set desc
    questionBody.textContent = question.desc;

    choiceContainer.textContent = "";

    // generate the choices list
    for (let index = 0; index < question.choices.length; index++) {
        const choice = question.choices[index];

        const choiceLi = createChoiceLi(choice.title, choice.answer);

        choiceContainer.appendChild(choiceLi);
        
        
    }
}

window.onload = function () {
    buttonStartQuiz.addEventListener("click", startQuiz);
};

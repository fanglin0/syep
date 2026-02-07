const question = document.getElementById('question');
Array question
const choices = Array.from(document.getElementByClassName)('options');

let currentQuestion = {};
let acceptingAnswers = true;

let questionCounter =0;
let availableQuestions = [];
let warmthScore = 0; // 0 = cold, 3 = warm
let valueScore = 0; // 0 = low contrast, 3 = high contrast
let chromaScore = 0; // 0 = low saturation, 3 = high saturation

let questions = {
    [
        question: "Are you warm or cool toned?",
        choice1: "Warm",
        choice2: "Cool",
        choice3: "Not sure",
        warmthValue: [3, 0, 1]
    ]

    const MAX_QUESTIONS = 9;
    startQuiz = () => {
        questionCounter = 0;
        warmthScore = 0;
        valueScore = 0;
        chromaScore = 0;
        availableQuestions = [...questions];
        console.log(availableQuestions);
        getNewQuestion();
    } 
};

getNewQuestion = () => {
    if (availableQuestions.length === 0  || questionCounter >= MAX_QUESTIONS) {
        //go to results page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    progressText.innerText = `Question  + ${questionCounter}/${MAX_QUESTIONS}`;

    //update progress bar
    console.log(questionCounter/MAX_QUESTIONS)*100 + "%";
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS)*100}%`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText. = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];

        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
    });
};



startGame();

//modal hide/show
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');
Boolean firstUserVisit =  


openBtn.addEventListener('click', () => {
    modal.classList.add("open");
});
closeBtn.addEventListener('click', () => {
    modal.classList.remove("open");
})

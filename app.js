document.addEventListener('DOMContentLoaded', initQuizApp);

// Function that initialises the quiz
function initQuizApp() {
    // Retrieving quiz form ID
    const quizForm = document.getElementById('quizForm');
    
    // Retrieving quizInfo ID
    const quizInfo = document.getElementById('quizInfo');

    // Retrieving score element ID
    const scoreParagraph = document.getElementById('score');

    // Retrieving the results div element
    const resultsDiv = document.getElementById('results');

    // Creating and setting up the retake button
    const retakeButton = createRetakeButton(quizForm, quizInfo, resultsDiv);

    // Looks out for when submitting event
    quizForm.addEventListener('submit', (event) => handleFormSubmit(event, quizForm, quizInfo, scoreParagraph, resultsDiv, retakeButton));
}


// Function that creates the retake button
function createRetakeButton(quizForm, quizInfo, resultsDiv) {
    // Creating a retake button element
    const retakeButton = document.createElement('button');

    // Adding text to the button
    retakeButton.textContent = 'Retake Quiz';

    // Looks out for when the button is clicked
    retakeButton.addEventListener('click', () => handleRetake(quizForm, quizInfo, resultsDiv));
    return retakeButton;
}


// Functiom that handles the retake event (retake button being clicked)
function handleRetake(quizForm, quizInfo, resultsDiv) {
    // Resets quiz after the button is clicked
    quizForm.reset();

    // Shows the quiz and quizInfo after the button is clicked
    quizForm.classList.remove('hidden');
    quizInfo.classList.remove('hidden');

    // Hides the results section after the button is clicked
    resultsDiv.classList.add('hidden');
}


// Function that handles the submit event
function handleFormSubmit(event, quizForm, quizInfo, scoreParagraph, resultsDiv, retakeButton) {
    // Prevent form being sent to a server and page reloading
    event.preventDefault();

    // Creating the correct answer dictionary for each question
    const correctAnswer = getCorrectAnswers();

    // Creating the correct answer table dictionary for each question
    const correctTable = getCorrectAnswersTable();

    // Collects name and values from the quiz submission
    const formData = new FormData(quizForm);

    // Calculate score and feedback
    const { score, feedback } = calculateScore(formData, correctAnswer, correctTable);

    // Display results after submission
    displayResults(score, feedback, correctAnswer, scoreParagraph, quizForm, quizInfo, resultsDiv, retakeButton);
}


// Function that gets the correct answers to the questions
function getCorrectAnswers() {
    return {
        q1: '67,000,000',
        q2: '45%',
        q3: '1,500,000',
        q4: '600,000,000',
        q5: '12'
    };
}


function getCorrectAnswersTable() {
    return{
        q1: 'Table hint: Comm_Revenue',
        q2: 'Table hint: Flight_Legs and Comm_Revenue',
        q3: 'Table hint: Comm_Sales',
        q4: 'Table hint: Comm_Loyalty',
        q5: 'Table hint: Comm_Customers and Comm_Loyalty'
    };
}


// Function that calculates the users score
function calculateScore(formData, correctAnswer, correctTable) {
    // Setting initial score to 0
    let score = 0;

    // Setting initial feedback to be empty
    const feedback = [];

    // Iterates through all responses from the form and adds to the score if questions are correct, adds feedback otherwise
    for (let [question, answer] of formData.entries()) {
        if (correctAnswer[question] === answer) {
            score++;
        } else {
            feedback.push(`Question ${question.slice(1)} was incorrect. The correct answer was ${correctAnswer[question]}.
            <br> ${correctTable[question]} <br>`);
        }
    }
    return { score, feedback };
}

function displayResults(score, feedback, correctAnswer, scoreParagraph, quizForm, quizInfo, resultsDiv, retakeButton) {
    // Retrieves the number of questions
    const numberOfQuestions = Object.keys(correctAnswer).length;

    /* The following if statement is used to output feedback. If questions there are any wrong answers, it provides feedback
        otherwise it states the user getting full marks */
    if (feedback.length === 0) {    // Identifies when there is no feedback and outputs message accordingly
        scoreParagraph.innerHTML = `Your score: ${score} out of ${numberOfQuestions}, well done, you got all questions correct!`;
    } else {
        scoreParagraph.innerHTML = `Your score: ${score} out of ${numberOfQuestions}.<br><br>${feedback.join('<br>')}`;   // Outputs correct answer and feedback on separate lines  
    }

    // Hides the quiz and quizInfo after submission
    quizForm.classList.add('hidden');
    quizInfo.classList.add('hidden');

    // Shows results section after submission
    resultsDiv.classList.remove('hidden');

    // Adds retake button to the results section after submission
    resultsDiv.appendChild(retakeButton);
}

// Exporting modules for testing
module.exports = {
    initQuizApp,
    createRetakeButton,
    handleRetake,
    handleFormSubmit,
    getCorrectAnswers,
    getCorrectAnswersTable,
    calculateScore,
    displayResults
};

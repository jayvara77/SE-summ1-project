document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');   // Retrieving quiz form ID
    const quizInfo = document.getElementById('quizInfo')
    const scoreParagraph = document.getElementById('score');    // Retrieving score element ID
    const resultsDiv = document.getElementById('results');  // Retrieving the results div element
    const retakeButton = document.createElement('button');  // Creating a retake button element

    /* The following code sets up the retake button and it's functionality*/
    retakeButton.textContent = 'Retake Quiz';   // Adding text to the button
    retakeButton.addEventListener('click', () => {  // Looks out for when the button is clicked
        quizForm.reset();   // Resets quiz after the button is clicked
        quizForm.classList.remove('hidden');
        quizInfo.classList.remove('hidden');    // Shows the quiz after the button is clicked
        resultsDiv.classList.add('hidden');    // Hides the results section after the burron is clicked 
    });

    quizForm.addEventListener('submit', (event) => {    // Looks out for when submitting event
        event.preventDefault(); // Prevent form being sent to a server and page reloading
        
        // Creating the correct answer dictionary for each question
        const correctAnswer = {
            q1: 'Correct Answer',
            q2: 'Correct Answer 2'
        };
        
        let score = 0;  // Setting initial score to 0
        const feedback = [];    // Setting initial feedback to be empty
        const numberOfQuestions = Object.keys(correctAnswer).length;    // Retrieves the number of questions

        const formData = new FormData(quizForm);    // Collects name and values from the quiz submission
        

        /* The following for loop interates through all responses from the form
        and adds to the score if questions are correct and adds feedback otherwise */

        for (let [question, answer] of formData.entries()) {    // Assigning field name to question and field value to answer for each form entry
            if (correctAnswer[question] === answer) {
                score++;
            } else {
                feedback.push(`Question ${question.slice(1)} was incorrect. Correct answer: ${correctAnswer[question]}`);
            }
        }
        /* The following if statement is used to output feedback. If questions there are any wrong answers, it provides feedback
        otherwise it states the user getting full marks */

        if (feedback.length === 0) {    // Identifies when there is no feedback and outputs message accordingly
            scoreParagraph.innerHTML = `Your score: ${score} out of ${numberOfQuestions}, well done, you got all questions correct!`;
        } else {
            scoreParagraph.innerHTML = `Your score: ${score} out of ${numberOfQuestions}.<br><br>${feedback.join('<br>')}`;   // Outputs correct answer and feedback on separate lines  
        }

        quizForm.classList.add('hidden');   // Hides the quiz after submission
        quizInfo.classList.add('hidden');
        resultsDiv.classList.remove('hidden');  // Shows results section after submission
        resultsDiv.appendChild(retakeButton);   // Adds retake button to the results section after submission
    });
});

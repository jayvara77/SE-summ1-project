document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const scoreParagraph = document.getElementById('score');

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const correctAnswer = {
            q1: 'Correct Answer'
        };

        let score = 0;
        const feedback = [];

        const formData = new FormData(quizForm);
        const answerValue = formData.get('q1');
        
        if (correctAnswer['q1'] === answerValue) {
            score++;
        } else {
            feedback.push(`Question 1 was incorrect. Correct answer: ${correctAnswer['q1']}`);
        }

        if (feedback.length === 0) {
            scoreParagraph.innerHTML = `Your score: ${score} out of 1, well done!`;
        } else {
            scoreParagraph.innerHTML = `Your score: ${score} out of 1. The correct answer was: ${correctAnswer['q1']}`;     
        }
    });
});

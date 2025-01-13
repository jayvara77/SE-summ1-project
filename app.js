document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const scoreParagraph = document.getElementById('score') 

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(quizForm)
        const answerValue = formData.get('q1')
        console.log(answerValue);

        let score = answerValue;
        
        scoreParagraph.innerHTML = `${score}`;
    });


})

// Test file for app functions

// Retrieving functions from app
const { calculateScore, getCorrectAnswers, getCorrectAnswersTable } = require('./app');

// Test the `getCorrectAnswers` function
test('getCorrectAnswers returns correct answers object', () => {
    const expectedAnswers = {
        q1: '67,000,000',
        q2: '45%',
        q3: '1,500,000',
        q4: '600,000,000',
        q5: '12'
    };
    expect(getCorrectAnswers()).toEqual(expectedAnswers);
});


// Test the `getCorrectAnswersTable` function
test('getCorrectAnswersTable returns correct answers table object', () => {
    const expectedTable = {
        q1: 'Table hint: Comm_Revenue',
        q2: 'Table hint: Flight_Legs and Comm_Revenue',
        q3: 'Table hint: Comm_Sales',
        q4: 'Table hint: Comm_Loyalty',
        q5: 'Table hint: Comm_Customers and Comm_Loyalty'
    };
    expect(getCorrectAnswersTable()).toEqual(expectedTable);
});


// Test the `calculateScore` function
test('calculateScore calculates score and feedback correctly', () => {
    const correctAnswer = getCorrectAnswers();
    const correctTable = getCorrectAnswersTable();
    
    const formData = new Map([
        ['q1', '67,000,000'],
        ['q2', '45%'],
        ['q3', '1,500,000'],
        ['q4', '600,000,000'],
        ['q5', '12']
    ]);

    const { score, feedback } = calculateScore(formData, correctAnswer, correctTable);

    expect(score).toBe(5); // Expect score to be 5 for all correct answers
    expect(feedback.length).toBe(0); // No feedback since all answers are correct
});


// Test `calculateScore` with incorrect answers
test('calculateScore provides feedback for incorrect answers', () => {
    const correctAnswer = getCorrectAnswers();
    const correctTable = getCorrectAnswersTable();

    const formData = new Map([
        ['q1', 'wrong answer'],
        ['q2', '45%'],
        ['q3', 'wrong answer'],
        ['q4', 'wrong answer'],
        ['q5', '12']
    ]);

    const { score, feedback } = calculateScore(formData, correctAnswer, correctTable);

    expect(score).toBe(2); // Two correct answers
    expect(feedback.length).toBe(3); // Three incorrect answers, so three feedback messages
});

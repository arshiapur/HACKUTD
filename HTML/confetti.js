// Import the confetti library (if using ES6 modules)
import confetti from 'confetti-js';

// Function to trigger confetti
function celebrate() {
    const confettiSettings = { target: 'confetti-container' };
    const confettiInstance = new confetti.ConfettiGenerator(confettiSettings);
    
    confettiInstance.render();
    
    // Stop the confetti after a few seconds (e.g., 10 seconds)
    setTimeout(() => {
        confettiInstance.clear();
    }, 10000);
}

// Add an event listener to trigger confetti when the quiz is completed
if (innerHTML ==)
    // Replace 'quiz-submit-button' with the actual ID or class of your quiz submission button
    celebrate();
});
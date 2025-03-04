document.addEventListener("DOMContentLoaded", () => {
    // Ensure the container is visible and animated
    const noteContainer = document.querySelector('.note-container');
    noteContainer.style.animation = 'fadeIn 2s forwards, scaleIn 1.5s ease-out forwards';

    // Allow the title to fade in first, and then trigger typing animation
    setTimeout(() => {
        const typedText = document.querySelector('.typed-text');
        typedText.style.animation = 'typing 4s steps(50) 1s forwards, fadeInText 1s 5s forwards';
    }, 1000); // Start typing after the title fades in
});

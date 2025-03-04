document.querySelector('.celebrate-btn').addEventListener('click', function () {
    triggerConfetti();
    showSlides();
});

function triggerConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.style.display = 'block';

    // Confetti animation (creating a burst effect)
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confetti.appendChild(confettiPiece);
    }

    // Redirect to the next page after animation ends
    setTimeout(() => {
        window.location.href = "note.html"; // Redirect to note page
    }, 5000); // Duration of the confetti animation
}

function showSlides() {
    let slideIndex = 1;
    const slides = document.querySelectorAll('.slide');

    // Function to show each slide one after the other
    function showNextSlide() {
        if (slideIndex <= slides.length) {
            slides[slideIndex - 1].style.display = 'block';
            slideIndex++;
        }

        if (slideIndex <= slides.length) {
            setTimeout(showNextSlide, 2000); // Show next slide after 2 seconds
        }
    }

    // Start showing the slides
    showNextSlide();
}
document.querySelector('.celebrate-btn').addEventListener('click', function () {
    triggerConfetti();
    showSlides();
});

function triggerConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.style.display = 'block';

    // Confetti animation (creating a burst effect)
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confetti.appendChild(confettiPiece);
    }

    // Redirect to the next page after animation ends
    setTimeout(() => {
        window.location.href = "note.html"; // Redirect to note page
    }, 5000); // Duration of the confetti animation
}

function showSlides() {
    let slideIndex = 1;
    const slides = document.querySelectorAll('.slide');

    // Function to show each slide one after the other
    function showNextSlide() {
        if (slideIndex <= slides.length) {
            slides[slideIndex - 1].style.display = 'block';
            slides[slideIndex - 1].classList.add('slide-in'); // Add animation class for smooth sliding effect
            slideIndex++;
        }

        if (slideIndex <= slides.length) {
            setTimeout(showNextSlide, 2000); // Show next slide after 2 seconds
        } else {
            // After the last slide, trigger a final transition or redirect
            setTimeout(() => {
                window.location.href = "note.html"; // Redirect to the note page or display a message
            }, 2000);
        }
    }

    // Start showing the slides
    showNextSlide();
}
document.querySelector('.celebrate-btn').addEventListener('click', function () {
    triggerConfetti();
    showSlides();
});

function triggerConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.style.display = 'block';

    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confetti.appendChild(confettiPiece);
    }

    // Delay the redirect to note.html after confetti animation
    setTimeout(() => {
        // Trigger fade-out effect on the current page
        document.body.classList.add('fade-out');
        
        // After fade-out animation completes, redirect to the next page
        setTimeout(() => {
            window.location.href = "note.html"; // Redirect to note page
        }, 1500); // Match the duration of the fade-out animation (1.5s)
    }, 5000); // Duration of the confetti animation
}

function showSlides() {
    let slideIndex = 1;
    const slides = document.querySelectorAll('.slide');

    function showNextSlide() {
        if (slideIndex <= slides.length) {
            slides[slideIndex - 1].style.display = 'block';
            slides[slideIndex - 1].classList.add('slide-in');
            slideIndex++;
        }

        if (slideIndex <= slides.length) {
            setTimeout(showNextSlide, 2000); // Show next slide after 2 seconds
        } else {
            setTimeout(() => {
                // Trigger fade-out effect before redirect
                document.body.classList.add('fade-out');

                setTimeout(() => {
                    window.location.href = "note.html"; // Redirect to note page
                }, 1500); // Match the duration of the fade-out animation
            }, 2000); // Delay the redirect after the last slide animation completes
        }
    }

    showNextSlide();
}


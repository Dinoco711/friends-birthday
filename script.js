document.addEventListener('DOMContentLoaded', function () {
    createConfetti();
    document.getElementById('imageContainer').addEventListener('click', createConfetti);
});

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#FFC700', '#FF3D00', '#4CAF50', '#00B0FF', '#FF4081'];

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 1 + 1 + 's'; // Random duration between 1s and 2s
        confettiPiece.style.animationDelay = Math .random() * 2 + 's'; // Random delay between 0s and 2s
        confettiContainer.appendChild(confettiPiece);

        // Remove the confetti piece after the animation ends
        confettiPiece.addEventListener('animationend', function () {
            confettiPiece.remove();
        });
    }
}
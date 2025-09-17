document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const firstScreen = document.getElementById('first-screen');
    const secondScreen = document.getElementById('second-screen');

    // Fungsi untuk membuat tombol "masih" bergerak acak
    yesBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
        yesBtn.style.position = 'absolute';
        yesBtn.style.left = `${x}px`;
        yesBtn.style.top = `${y}px`;
    });

    // Fungsi untuk menampilkan tampilan kedua
    noBtn.addEventListener('click', () => {
        firstScreen.style.display = 'none';
        secondScreen.style.display = 'flex';

        // Memicu animasi hati
        const heart = document.createElement('div');
        heart.className = 'heart-animation';
        secondScreen.prepend(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500); 
    });
});

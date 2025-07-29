const fullImgBox = document.getElementById('fullImgBox');
const fullImg = document.getElementById('fullImg');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const thumbs = Array.from(document.querySelectorAll('.img-gallery img'));

let currentIndex = 0;

// Open fullscreen image
thumbs.forEach((img, i) => {
    img.addEventListener('click', () => openFullImg(i));
});

function openFullImg(index) {
    currentIndex = index;
    fullImg.src = thumbs[currentIndex].src;
    fullImgBox.style.display = 'flex';
}

// Close fullscreen view
function closeFullImg() {
    fullImgBox.style.display = 'none';
}

// Show next or previous image
function showImage(step) {
    currentIndex = (currentIndex + step + thumbs.length) % thumbs.length;
    fullImg.src = thumbs[currentIndex].src;
}

nextBtn.addEventListener('click', () => showImage(1));
prevBtn.addEventListener('click', () => showImage(-1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (fullImgBox.style.display === 'none') return;
    if (e.key === 'ArrowRight') showImage(1);
    if (e.key === 'ArrowLeft') showImage(-1);
    if (e.key === 'Escape') closeFullImg();
});
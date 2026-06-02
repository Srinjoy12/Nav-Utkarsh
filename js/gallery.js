/* ===================================================
   Navutkarsh — Dynamic Flipping Gallery Logic
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure galleryImages array exists (from gallery-data.js)
  if (typeof galleryImages === 'undefined' || !galleryImages.length) {
    console.warn('galleryImages is not defined or empty. Falling back to static gallery.');
    return;
  }

  const cards = document.querySelectorAll('.gallery-card');
  if (!cards.length) return;

  // Shuffle the image paths list on load for random sequence
  const shuffledImages = [...galleryImages].sort(() => Math.random() - 0.5);

  // Track index for next image to load
  let imgIndex = 0;

  // Track which images are currently displayed on cards to avoid duplicates
  const activeImages = new Set();

  // Helper to get a new unique image path
  function getNextImage() {
    let attempts = 0;
    while (attempts < shuffledImages.length) {
      const imgPath = shuffledImages[imgIndex];
      imgIndex = (imgIndex + 1) % shuffledImages.length;
      if (!activeImages.has(imgPath)) {
        return imgPath;
      }
      attempts++;
    }
    // Fallback if all are somehow active
    return shuffledImages[Math.floor(Math.random() * shuffledImages.length)];
  }

  // Initialize active images from the static HTML markup on load
  cards.forEach(card => {
    const frontImg = card.querySelector('.gallery-card__front img');
    if (frontImg && frontImg.getAttribute('src')) {
      activeImages.add(frontImg.getAttribute('src'));
    }
  });

  // Function to flip a specific card and load a new image
  function flipCard(card) {
    const isFlipped = card.classList.contains('flipped');
    const frontImg = card.querySelector('.gallery-card__front img');
    const backImg = card.querySelector('.gallery-card__back img');

    const targetImgEl = isFlipped ? frontImg : backImg;
    const oldImgEl = isFlipped ? backImg : frontImg;

    const nextImgSrc = getNextImage();
    activeImages.add(nextImgSrc);

    // Preload image before flipping
    const tempImg = new Image();
    tempImg.onload = () => {
      targetImgEl.setAttribute('src', nextImgSrc);
      card.classList.toggle('flipped');

      // Delay cleaning up old image source to avoid layout flashes during flip
      setTimeout(() => {
        if (oldImgEl.getAttribute('src')) {
          activeImages.delete(oldImgEl.getAttribute('src'));
        }
      }, 800);
    };
    tempImg.src = nextImgSrc;
  }

  // Flip one random card every 2 seconds
  let lastCardIndex = -1;
  setInterval(() => {
    // Pick a card index that is different from the last flipped card
    let cardIndex;
    do {
      cardIndex = Math.floor(Math.random() * cards.length);
    } while (cardIndex === lastCardIndex && cards.length > 1);

    lastCardIndex = cardIndex;
    flipCard(cards[cardIndex]);
  }, 2000);
});

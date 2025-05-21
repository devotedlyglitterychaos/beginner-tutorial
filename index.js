// =============================================
// STEP 1: Set up the image array 
// =============================================
// Array of all images to cycle through
// Customize these paths to your own images
document.addEventLister(DOMContentLoaded',() => {
const images = [
  './assets/image-content/image-1.png',
  './assets/image-content/image-2.png',
  './assets/image-content/image-3.png',
  './assets/image-content/image-4.png',
  './assets/image-content/image-5.png',
  './assets/image-content/image-6.png'
];

const buttonTexts = [
  'Find Your Breath: Inhale.',
  'Soften: Exhale.',
  'Awaken: Inhale.',
  'Release: Exhale.',
  'Make Space. Inhale.',
];

const imageContent = document.querySelector('.image-content');  // Image container
const mainButton = document.getElementbyId('main-button');      // Image switch button
const finalMessage = document.querySelector('.final-message');  // Final message
let currentStep = 0;

function updateImage() {
  imageContent.style.opacity = 0;
  const img = new Image();
  img.src = images[currentIndex];
  img.onload = () => {
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    imageContent.style.opacity = 1;
  };
}


// =============================================
// STEP 5: Initial image display 
// =============================================
// Show first image when page loads
updateImage(currentStep);
mainButton.textContent = buttonTexts[currentStep];
// =============================================
// STEP 6: Button click handler 
// =============================================
// Change image when button is clicked
mainButton.addEventListener('click', () => {
  // Go to next image
  currentStep++;
  
  // Update if not at the end
  if (currentStep< images.length) {
    updateImage(currentStep);
    mainButton.textContent = buttonTexts [currentStep];
  }
  
  // Once at the last image, show the final message and hide the button 
  if (currentStep === images.length - 1) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
  }
});
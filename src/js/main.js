/* Your JS here. */
console.log('Hello World!')

// HTML structure remains the same as described earlier

const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    currentSlide = index;
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    } else {
        showSlide(slides.length - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(0);
    }
});


// JavaScript for modal and grid interactions
const modal = document.getElementById('imageModal');
// const closeButton = document.getElementById('closeButton');
const fullScreenImage = document.getElementById('fullScreenImage');
const gridImages = document.querySelectorAll('.grid-image');

// Function to open the modal with a specific image
function openModal(imageSrc) {
  fullScreenImage.src = imageSrc;
  modal.style.display = 'block';
}

// Attach click event listeners to grid images
gridImages.forEach((gridImage) => {
  gridImage.addEventListener('click', () => {
    const imageSrc = gridImage.src;
    openModal(imageSrc);
  });
});

// // Close the modal when the close button is clicked
// closeButton.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// Close the modal when the user clicks outside the modal content
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});



 // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
 window.onscroll = function () { scrollFunction() };

 function scrollFunction() {
     const logo = document.querySelector(".logo");
     const navLinks = document.querySelectorAll(".navbar ul li a");
     if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
         logo.style.width = "80px";
         navLinks.forEach((link) => {
            link.style.fontSize = "15px"; 
          });
     }else {
         logo.style.width = "120px"; 
         navLinks.forEach((link) => {
            link.style.fontSize = "20px";
          });
     }
 }


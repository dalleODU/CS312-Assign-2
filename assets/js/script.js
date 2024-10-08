

window.onscroll = function() {slideDownNavBar()};

/**
 * Slides out the navigation bar if the user scrolls > 20 pixels from the top of the page.
 * Otherwise, the navigation bar slides back in (hidden away).
 */
function slideDownNavBar() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("nav-bar").style.top = "0"; // Slide out the nav-bar.
    } else {
      document.getElementById("nav-bar").style.top = "-50px"; // Slide up the nav bar.
    }
  }


let slideIndex = 0;
autoImageSlideShow();

/* An auto slide image gallery */
function autoImageSlideShow() {
  
  // Get all slides and dot indicators.
  let slides = document.getElementsByClassName("slides");
  let dotIndicator = document.getElementsByClassName("dot-indicator");

  // Hide all of the slides.
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Increment to move towards the the next slide.
  slideIndex++;

  // If we exceed the number of slides, go back to the first slide.
  if (slideIndex > slides.length) {slideIndex = 1}

  // Remove the active class name from all dot indicators.
  for (let i = 0; i < dotIndicator.length; i++) {
    dotIndicator[i].className = dotIndicator[i].className.replace(" active", "");
  }

  // Display current slide.
  slides[slideIndex-1].style.display = "block";
  
  // Add the active class tot he corresponding dot indicator.
  dotIndicator[slideIndex-1].className += " active";

  // Change the image in slide show every 3 seconds.
  setTimeout(autoImageSlideShow, 3000);
}


/* Simulate contact form submission. */
document.getElementById('send').addEventListener('click', function() {
  // Shows the response message.
  document.getElementById('message-sent').style.display = 'block';

  // Clear the form contents.
  document.getElementById('contact-form').reset();

  // Set message-sent display value to none after 2 seconds.
  setTimeout(function() {
    document.getElementById('message-sent').style.display='none';
  }, 2000);
});


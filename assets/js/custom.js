// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollButton");
    const targetSection = document.getElementById("targetSection");
  
    scrollButton.addEventListener("click", function() {
        scrollToSection(targetSection, 4000); // Scroll to the section over 5 seconds (5000 milliseconds)
    });
  });
  
  function scrollToSection(element, duration) {
    const start = window.scrollY;
    const target = element.getBoundingClientRect().top;
    const startTime = performance.now();
  
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        window.scrollTo(0, easeInOutQuad(elapsedTime, start, target, duration));
        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }
  
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(scrollAnimation);
  }
// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    const Homebutton = document.getElementById("Homebutton");
    const targetHomeButton = document.getElementById("targetHomeButton");
  
    Homebutton.addEventListener("click", function() {
        scrollToSection(targetHomeButton, 4000); // Scroll to the section over 5 seconds (5000 milliseconds)
    });
  });
  
  function scrollToSection(element, duration) {
    const start = window.scrollY;
    const target = element.getBoundingClientRect().top;
    const startTime = performance.now();
  
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        window.scrollTo(0, easeInOutQuad(elapsedTime, start, target, duration));
        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }
  
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(scrollAnimation);
  }
// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    const AboutButton = document.getElementById("AboutButton");
    const targetAboutButton = document.getElementById("targetAboutButton");
  
    AboutButton.addEventListener("click", function() {
        scrollToSection(targetAboutButton, 4000); // Scroll to the section over 5 seconds (5000 milliseconds)
    });
  });
  
  function scrollToSection(element, duration) {
    const start = window.scrollY;
    const target = element.getBoundingClientRect().top;
    const startTime = performance.now();
  
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        window.scrollTo(0, easeInOutQuad(elapsedTime, start, target, duration));
        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }
  
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(scrollAnimation);
  }
// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    const PriceButton = document.getElementById("PriceButton");
    const targetPriceButton = document.getElementById("targetPriceButton");
  
    PriceButton.addEventListener("click", function() {
        scrollToSection(targetPriceButton, 4000); // Scroll to the section over 5 seconds (5000 milliseconds)
    });
  });
  
  function scrollToSection(element, duration) {
    const start = window.scrollY;
    const target = element.getBoundingClientRect().top;
    const startTime = performance.now();
  
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        window.scrollTo(0, easeInOutQuad(elapsedTime, start, target, duration));
        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }
  
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(scrollAnimation);
  }
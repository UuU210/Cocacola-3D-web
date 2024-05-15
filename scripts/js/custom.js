

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

document.addEventListener('DOMContentLoaded', function() {
    const bubbleContainer = document.getElementById('bubble-background');
    
    function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      const size = Math.random(); // Random size
      if (size > 0.96) {
        bubble.classList.add('large');
      } else if (size > 0.33) {
        bubble.classList.add('medium');
      } else {
        bubble.classList.add('small');
      }
  
      const position = Math.random() * 100; // Random horizontal position
      bubble.style.left = position + '%';
  
      bubbleContainer.appendChild(bubble);
  
      // Remove bubble after it floats away
      setTimeout(() => {
        bubble.remove();
      }, 25000); // should match the longest animation duration
    }
  
    // Create new bubble every 800 milliseconds
    setInterval(createBubble, 800);
  });
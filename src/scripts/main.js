import '../styles/main.css';

// Attach the function to the button's click event
document.getElementById("toggleButton").style.display='block';
document.getElementById("toggleButton").addEventListener("click", EnableMobileMenu);

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function EnableMobileMenu() {
    var infoBlock = document.getElementById("collapsibleContent");
    var symbol = document.getElementById('toggleSymbol');

    if (infoBlock.style.display === "block") {
      infoBlock.style.display = "none";
      symbol.textContent = '+'; // Change to plus symbol
    } 
    
    else {
      infoBlock.style.display = "block";
      symbol.textContent = '-'; // Change to minus symbol
    }
  }


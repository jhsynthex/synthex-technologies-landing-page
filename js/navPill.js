 // Get the current file name from the URL
 const currentPage = window.location.pathname.split("/").pop() || "index.html";
      
 // Get all nav links
 const navLinks = document.querySelectorAll(".navButtonContainer a");

 navLinks.forEach(link => {
   // Compare link href with the current page
   const href = link.getAttribute("href");
   if (href === currentPage) {
     link.classList.add("active");
   }
 });
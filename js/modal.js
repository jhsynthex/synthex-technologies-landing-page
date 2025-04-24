// modal.js

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('earlyAccessModal');
  const openButtons = document.querySelectorAll('.earlyAccessButton');
  const closeButton = document.querySelector('.closeButton');

  // Open modal when any early access button is clicked
  openButtons.forEach(button => {
    button.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  });

  // Close modal when clicking on the close button
  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside of modal content
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
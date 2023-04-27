// You can add some JavaScript code to add some interactivity to your page
// For example, you could use the following code to change the background color of the header when the user hovers over it:

const header = document.querySelector('header');
header.addEventListener('mouseover', function() {
  header.style.backgroundColor = '#666';
});

header.addEventListener('mouseout', function() {
  header.style.backgroundColor = '#333';
});

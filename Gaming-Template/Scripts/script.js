const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent the default behavior of the link
    e.preventDefault();
    
    // Remove the active class from all links
    links.forEach(link => link.classList.remove('active'));
    
    // Add the active class to the clicked link
    this.classList.add('active');
  });
});

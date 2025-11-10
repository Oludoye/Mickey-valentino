function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('active');
  }

 document.getElementById('contactLink').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Open, Pick an app?');
  });  
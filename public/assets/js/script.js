(function () {
   let ul = document.getElementById('nav-url');
   let optionClick = document.getElementById('check-option');
   let sections = document.querySelectorAll('section');
   let nav = document.querySelector('nav');

   optionClick.addEventListener('click', () => {
      if (ul.classList.contains('activeUl')) {
         ul.classList.remove('activeUl');
         nav.style.backgroundColor = 'transparent';
         listSections('block');
      } else {
         ul.classList.add('activeUl');
         listSections('none');
         nav.style.backgroundColor = '#222';
      }
   });

   function listSections(display) {
      sections.forEach(s => {
         s.style.display = display;
      });
   }
   
}());
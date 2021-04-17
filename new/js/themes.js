let body = document.body;
let toggleBtn = document.querySelector('.pin');
let currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
  body.classList.add('light-theme');
}

toggleBtn.addEventListener('click', function () {
  body.classList.toggle('light-theme');
  
  if(body.classList.contains('light-theme')){
    localStorage.setItem('currentTheme', 'themeActive');
  }else{
    localStorage.removeItem('currentTheme');
  }
  
})
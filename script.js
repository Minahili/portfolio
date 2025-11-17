// MODULE BUTTONS
const buttons = document.querySelectorAll('.module-btn');
const modules = document.querySelectorAll('.module');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    modules.forEach(mod => {
      if(mod.id === target){
        mod.style.display = 'block';
      } else {
        mod.style.display = 'none';
      }
    });
  });
});

// DOWNLOAD CV
const downloadBtn = document.getElementById('downloadCV');
downloadBtn.addEventListener('click', () => {
  const a = document.createElement('a');
  a.href = 'cv.pdf'; // make sure cv.pdf is in project folder
  a.download = 'Minahil_CV.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
});

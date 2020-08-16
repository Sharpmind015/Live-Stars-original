//UI VAR
const closeBtn = document.querySelector('#js-close'),
      overlay = document.querySelector('#js-overlay'),
      sidebar = document.querySelector('.sidebar');
//Event Listeners
document.body.addEventListener('click', (e) => {
  if(e.target.id === "js-open") {    
  sidebar.classList.remove('shut');
  overlay.classList.add('vis');
  closeBtn.classList.remove('d-none');
}
if(e.target.id === "js-close" || e.target.id === "js-overlay") {
  sidebar.classList.add('shut');
  overlay.classList.remove('vis');
  closeBtn.classList.add('d-none');
}
})
const blackShiba = document.querySelector('.closed');
const tanShiba = document.querySelector('.open');
//event

blackShiba.addEventListener('click', () => {
    if(tanShiba.classList.contains('open')) {
        tanShiba.classList.add('active');
    }
});
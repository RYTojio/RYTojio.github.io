const blackShiba = document.querySelector('.closed');
const tanShiba = document.querySelector('.open');
//event

/*if statement*/
blackShiba.addEventListener('click', () => {
    if(tanShiba.classList.contains('open')) {
        tanShiba.classList.add('active');
        blackShiba.classList.remove('active');
    }
});

tanShiba.addEventListener('click', () => {
    if(blackShiba.classList.contains('closed')) {
        blackShiba.classList.add('active');
        blackShiba.classList.remove('active');
    }
});
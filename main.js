const btns = document.querySelectorAll('.enrollBtn');
const popup = document.querySelector('.enrollWindow-overlay');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        document.querySelector('.enrollWindow').classList.add('enrollWindow--visible');
        popup.classList.add('enrollWindow-overlay--visible');
    })
})

popup.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.classList.remove('enrollWindow-overlay--visible');
    }
})
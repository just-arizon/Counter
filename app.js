const count = 0;
const value = document.querySelector('.value');

// console.log(value);
const btns = document.querySelectorAll('.btn');
// console.log(btns);
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
     const styles = e.currentTarget.classList;
     if (styles.contains('decrease')) {
        
     }
    })
})
var count = 0 ;
setInterval(() => {
    count++
let form_bx = document.querySelector(`.form_bx`);
form_bx.style.setProperty(`--deg`,`${count}deg`);
count >= 360  ? count = 0 : null;
}, 10); 
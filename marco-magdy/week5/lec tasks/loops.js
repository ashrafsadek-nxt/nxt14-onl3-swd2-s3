body=document.querySelector('body');
btn=document.querySelector('#btn');
let done=false;
btn.addEventListener('click', function() {
    if (done) {
        return
    }
    for (let i = 0; i < 4; i++) {
        body.innerHTML += `<div class="container"> ${i} </div>`;
    }
    done = true;
});
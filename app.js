const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal')
const signUp = document.querySelector('.sign-up')
const modalForm = document.querySelector('#modal-form')
const client = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('.msg')
const overlay = document.querySelector('.overlay')


navBtn.addEventListener('click', function () {
    sideNav.classList.add('show');
    document.body.classList.add('no-scroll');
    overlay.classList.add('overlay-show')
})

cancelBtn.addEventListener('click', function () {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
    document.body.classList.remove('no-scroll');
    overlay.classList.remove('overlay-show')
})
signUp.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('showModal');
    sideNav.classList.remove('show');
    document.body.classList.add('no-scroll');
    overlay.classList.add('overlay-show')
})

window.addEventListener('click', function (e) {
    if (e.target === 'modal') {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal')
    }
});

modalForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (client.value === '' || email.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
       
    //    client.reset();
    //    email.reset();
    } else {
        setTimeout(() => client.value.remove(), 3000);
        setTimeout(() => email.value.remove(), 3000);
    }
}
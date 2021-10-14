$('.for-whom-scroll').on('click', function () {
    $('html,body').animate({ scrollTop: $('.for-intensive-title').offset().top + "px" }, { duration: 1000 });
 });

$('.what-will-happen').on('click', function () {
    $('html,body').animate({ scrollTop: $('.intensive-content-title').offset().top + "px" }, { duration: 1000 });
});

$('.about-representatives').on('click', function () {
    $('html,body').animate({ scrollTop: $('.information-about-speaker-text').offset().top + "px" }, { duration: 1000 });
});

$('.tariffs').on('click', function () {
    $('html,body').animate({ scrollTop: $('.rates-title').offset().top + "px" }, { duration: 1000 });
});

$('.up').on('click', function () {
    $('html,body').animate({ scrollTop: $('.course-representative-wrapper').offset().top + "px" }, { duration: 1000 });
});
        
$('.btn-form1-scroll').on('click', function () {
    $('html,body').animate({ scrollTop: $('.rates-title').offset().top + "px" }, { duration: 1000 });
});

$('.program-btn-scroll').on('click', function () {
    $('html,body').animate({ scrollTop: $('.intensive-program-title').offset().top + "px" }, { duration: 1000 });
});

$('.btn-form-record').on('click', function () {
    $('html,body').animate({ scrollTop: $('.rates-title').offset().top + "px" }, { duration: 1000 });
});

$('.scroll').on('click', function () {
    $('html,body').animate({ scrollTop: $('.intensive-program-title').offset().top + "px" }, { duration: 1000 });
});


let prerecord1 = document.getElementById('prerecord1');
let popupFade = document.getElementById ('popupFade');
let modalWrapper = document.getElementById('modalWrapper');
let overflow = document.querySelector('body');
let closeModal = document.getElementById('closeModal');

let prerecord2 = document.getElementById('prerecord2');

let prerecord3 = document.getElementById('prerecord3');

// let lessonForm = document.getElementById('lessonForm');

prerecord1.addEventListener('click', () => {
    popupFade.classList.remove('d-none-opacity');
    modalWrapper.classList.remove('d-none-modal-wrapper');
    overflow.classList.add('overflow');
});
prerecord2.addEventListener('click', () => {
    popupFade.classList.remove('d-none-opacity');
    modalWrapper.classList.remove('d-none-modal-wrapper');
    overflow.classList.add('overflow');
});
prerecord3.addEventListener('click', () => {
    popupFade.classList.remove('d-none-opacity');
    modalWrapper.classList.remove('d-none-modal-wrapper');
    overflow.classList.add('overflow');
});

closeModal.addEventListener('click', () => {
    popupFade.classList.add('d-none-opacity');
    modalWrapper.classList.add('d-none-modal-wrapper');
    overflow.classList.remove('overflow');
});



let lessonFormList = document.getElementsByClassName('lesson-form');
console.log(lessonFormList)
for (let i = 0; i < lessonFormList.length; i++) {
    lessonFormList[i].addEventListener('click', function() {
        this.firstElementChild.classList.toggle('active');
        this.lastElementChild.classList.toggle('d-none-wrapper');
    });
}
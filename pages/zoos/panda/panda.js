const readLessBtn = document.querySelector('.read-less');
readLessBtn.addEventListener('click', readMore);
const infoBlock = document.querySelector('.animal-information-block');


function readMore() {
    if (infoBlock.classList.contains('short-text')) {
        infoBlock.classList.remove('short-text');
        readLessBtn.innerHTML = 'Read Less';
    } else {
        infoBlock.classList.add('short-text');
        readLessBtn.innerHTML = 'Read More';
    }

};
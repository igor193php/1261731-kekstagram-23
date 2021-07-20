const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImgElement = document.querySelector('.big-picture__img img');
const likesCountElement = document.querySelector('.likes-count');

const createBigImage = (evt) => {
  if (evt.target.className === 'picture__img') {
    const srcValueMiniPicture = evt.target.getAttribute('src');
    bigPictureImgElement.src = srcValueMiniPicture;
    bigPictureElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    console.log(likesCountElement.textContent);
  }
};

export {createBigImage};

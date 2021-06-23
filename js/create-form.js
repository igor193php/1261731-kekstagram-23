const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.body;

const createForm = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
};

export {createForm};

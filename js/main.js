import {createData} from './create-data.js';
import {createMiniature} from './сreate-miniature.js';
import {createForm} from './create-form.js';
import {isEscEvent} from './util.js';

const data = createData();
const picturesElement = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const uploadFileElement = document.querySelector('#upload-file');
const uploadCancelElement = document.querySelector('#upload-cancel');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');

for (let i = 0; i < data.length; i++) {
  const element = createMiniature(data[i]);
  fragment.appendChild(element);
}

picturesElement.appendChild(fragment);

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

const closeWindow = () => {
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
};

const openWindow = () => {
  createForm();

  document.addEventListener('keydown', onPopupEscKeydown);
};

uploadFileElement.addEventListener('change', () => {
  openWindow();
});

uploadCancelElement.addEventListener('click', () => {
  closeWindow();
});

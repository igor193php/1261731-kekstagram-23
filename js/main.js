import {createData} from './create-data.js';
import {createMiniature} from './сreate-miniature.js';
import {createForm} from './create-form.js';
import {isEscEvent} from './util.js';
import {regExp} from './util.js';

const data = createData();
const picturesElement = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const uploadFileElement = document.querySelector('#upload-file');
const uploadCancelElement = document.querySelector('#upload-cancel');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const textHashtagsElement = document.querySelector('.text__hashtags');
const textDescriptionElement = document.querySelector('.text__description');

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


const HASH_TAG = '^#';
const REG_FULL = '^#[A-Za-zA-Яа-я0-9]{1,19}$';
const MAX_TEXT_LENGTH = 140;


textHashtagsElement.addEventListener('input', () => {
  const valueTextHashtags = textHashtagsElement.value;

  if (!regExp(HASH_TAG).test(valueTextHashtags)) {
    textHashtagsElement.setCustomValidity('Начните с #');
  }

  textHashtagsElement.reportValidity();
});

textDescriptionElement.addEventListener('input', (evt) => {
  evt.stopPropagation();
  const valueTextDescriptionLength = textDescriptionElement.value.length;

  if (valueTextDescriptionLength > MAX_TEXT_LENGTH) {
    textDescriptionElement.setCustomValidity(`Удалите лишние ${ valueTextDescriptionLength - MAX_TEXT_LENGTH } симв.`);
  }

  textDescriptionElement.reportValidity();
});

const MAX_TEXT_LENGTH = 140;
const MAX_TAG_LENGTH = 20;
const MAX_TAGS_AMOUNT = 5;

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

textHashtagsElement.addEventListener('input', () => {
  const valueTextHashtags = textHashtagsElement.value;
  let tags = valueTextHashtags.split(' ');
  tags = tags.map((x) => x.toUpperCase());

  tags.forEach((item) => {
    if (item.length > MAX_TAG_LENGTH) {
      textHashtagsElement.setCustomValidity(`Удалите лишние ${ item.length - MAX_TAG_LENGTH } симв.`);
    } else if (!item.includes('#')) {
      textHashtagsElement.setCustomValidity('Начните с #');
    } else if (item === '#') {
      textHashtagsElement.setCustomValidity('Тег не должен состоять только из #');
    } else if (!regExp('^#[A-Za-zА-Яа-я0-9]{1,19}$').test(item)) {
      textHashtagsElement.setCustomValidity('Название содержит недопустимые символы');
    } else if (tags.length > MAX_TAGS_AMOUNT) {
      textHashtagsElement.setCustomValidity('тегов не д.б больше 5');
    } else if (tags.includes(item, 1)) {
      textHashtagsElement.setCustomValidity('Тег дублируется');
    } else {
      textHashtagsElement.setCustomValidity('');
    }
  });

  textHashtagsElement.reportValidity();
});

textDescriptionElement.addEventListener('input', () => {
  const valueTextDescriptionLength = textDescriptionElement.value.length;

  if (valueTextDescriptionLength > MAX_TEXT_LENGTH) {
    textDescriptionElement.setCustomValidity(`Удалите лишние ${ valueTextDescriptionLength - MAX_TEXT_LENGTH } симв.`);
  }

  textDescriptionElement.reportValidity();
});

textDescriptionElement.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

textHashtagsElement.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

uploadFileElement.addEventListener('change', () => {
  openWindow();
});

uploadCancelElement.addEventListener('click', () => {
  closeWindow();
});

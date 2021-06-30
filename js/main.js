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

const MAX_TEXT_LENGTH = 140;
const MAX_TEG_LENGTH = 20;
const SINGS = ['#', '@', '$', '-', ',', '.', ';'];


textHashtagsElement.addEventListener('input', () => {
  const valueTextHashtags = textHashtagsElement.value;
  const arrayTages = valueTextHashtags.split(' ');

  arrayTages.forEach((item) => {
    if (item.length > MAX_TEG_LENGTH) {
      textHashtagsElement.setCustomValidity(`Удалите лишние ${ item.length - MAX_TEXT_LENGTH } симв.`);
    }

    if (!item.includes('#')) {
      textHashtagsElement.setCustomValidity('Начните с #');
    }

    if (item.substring(1, 3) === '') {
      textHashtagsElement.setCustomValidity('Тег не должен состоять только из #');
    }

    SINGS.forEach((item1) => {
      if (item.includes(item1, 2)) {
        textHashtagsElement.setCustomValidity(`Название содержит ${item1} симв.`);
      }
    });
  });

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

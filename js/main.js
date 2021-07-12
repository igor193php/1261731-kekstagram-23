import {createData} from './create-data.js';
import {createMiniature} from './сreate-miniature.js';
import {createForm} from './create-form.js';
import {isEscEvent} from './util.js';
import {regExp} from './util.js';
import {changeScale} from './change-scale.js';
import {changeTranformImg} from './change-tranform-img.js';
import {createSlider} from './create-slider.js';
createSlider();

const MAX_TEXT_LENGTH = 140;
const MAX_TAG_LENGTH = 20;
const MAX_TAGS_AMOUNT = 5;

const data = createData();
const picturesElement = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const uploadFileElement = document.querySelector('#upload-file');
const uploadCancelElement = document.querySelector('#upload-cancel');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const textHashtagsElement = document.querySelector('.text__hashtags');
const textDescriptionElement = document.querySelector('.text__description');
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');

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

  for (let i = 0; i < tags.length; i++) {
    if (tags[i].length > MAX_TAG_LENGTH) {
      textHashtagsElement.setCustomValidity(`Удалите лишние ${ tags[i].length - MAX_TAG_LENGTH } симв.`);
      break;
    } else if (!tags[i].includes('#')) {
      textHashtagsElement.setCustomValidity('Начните с #');
      break;
    } else if (tags[i] === '#') {
      textHashtagsElement.setCustomValidity('Тег не должен состоять только из #');
      break;
    } else if (!regExp('^#[A-Za-zА-Яа-я0-9]{1,19}$').test(tags[i])) {
      textHashtagsElement.setCustomValidity('Название содержит недопустимые символы');
      break;
    } else if (tags.length > MAX_TAGS_AMOUNT) {
      textHashtagsElement.setCustomValidity('тегов не д.б больше 5');
      break;
    } else if (tags.includes(tags[i], i + 1)) {
      textHashtagsElement.setCustomValidity('Тег дублируется с');
      break;
    } else {
      textHashtagsElement.setCustomValidity('');
    }
  }

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

scaleControlSmallerElement.addEventListener('click', () => {
  const scaleValueNew = changeScale(0);
  changeTranformImg(scaleValueNew);
});

scaleControlBiggerElement.addEventListener('click', () => {
  const scaleValueNew = changeScale(1);
  changeTranformImg(scaleValueNew);
});

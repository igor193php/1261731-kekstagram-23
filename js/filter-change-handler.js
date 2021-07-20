import { addFilterImg } from './add-filter-img.js';

const EFFECTS = {
  'chrome': 'effects__preview--chrome',
  'sepia': 'effects__preview--sepia',
  'marvin': 'effects__preview--marvin',
  'phobos': 'effects__preview--phobos',
  'heat': 'effects__preview--heat',
  'none': 'effects__preview--none',
};

const FILTERS = {
  'chrome': 'grayscale',
  'sepia': 'sepia',
  'marvin': 'invert',
  'phobos': 'blur',
  'heat': 'brightness',
};

const sliderElement = document.querySelector('.effect-level__slider');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');

const filterChangeHandler = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const className = imgUploadPreviewElement.className;
    console.log(className);
    if (className) {
      imgUploadPreviewElement.classList.remove(className);
    }

    const tageEffect = EFFECTS[evt.target.value];
    const filterName = FILTERS[evt.target.value];
    const filterFullName = String(addFilterImg(filterName));
    console.log(filterFullName);
    imgUploadPreviewElement.classList.add(filterFullName);
    imgUploadPreviewElement.classList.add(tageEffect);
  }

  if (imgUploadPreviewElement.className === EFFECTS['chrome'] || imgUploadPreviewElement.className === EFFECTS['sepia']) {
    sliderElement.noUiSlider.updateOptions({
        range: {
            min: 0,
            max: 1
        },
        start: 1,
        step: 0.1
    });
} else if(imgUploadPreviewElement.className === EFFECTS['heat']) {
    sliderElement.noUiSlider.updateOptions({
        range: {
            min: 1,
            max: 3,
        },
        step: 0.1
    });

}

};

export {filterChangeHandler};

const EFFECTS = {
  'chrome': 'effects__preview--chrome',
  'sepia': 'effects__preview--sepia',
  'marvin': 'effects__preview--marvin',
  'phobos': 'effects__preview--phobos',
  'heat': 'effects__preview--heat',
  'none': 'effects__preview--none',
};

const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');

const filterChangeHandler = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const className = imgUploadPreviewElement.className;
    if (className) {
      imgUploadPreviewElement.classList.remove(className);
    }

    const tageEffect = EFFECTS[evt.target.value];
    imgUploadPreviewElement.classList.add(tageEffect);
  }

};

export {filterChangeHandler};

const EFFECTS = {
  'chrome': 'effects__preview--chrome',
  'sepia': 'effects__preview--sepia',
  'marvin': 'effects__preview--marvin',
  'phobos': 'effects__preview--phobos',
  'heat': 'effects__preview--heat',
};

const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');
console.log(imgUploadPreviewElement);

const filterChangeHandler = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const tageEffect = EFFECTS[evt.target.value];
    imgUploadPreviewElement.classList.add(tageEffect);
    console.log(tageEffect);
  }

};

export {filterChangeHandler};

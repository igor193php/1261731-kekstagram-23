const createSlider = () => {
  const sliderElement = document.querySelector('.effect-level__slider');
  const valueElement = document.querySelector('.effect-level__value');

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
    valueElement.value = unencoded[handle];
    console.log(valueElement.value);
  });
};

export {createSlider};

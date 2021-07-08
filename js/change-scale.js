const INTERVAL_SCALE = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;

const scaleControlValueElement = document.querySelector('.scale__control--value');
const valueCurrentScale = scaleControlValueElement.value.slice(0, -1);


const changeScale = (typeButton) => {
  let valueScaleNew = valueCurrentScale;

  if (typeButton === 1 && valueCurrentScale <= SCALE_MAX) {
    valueScaleNew = valueCurrentScale + INTERVAL_SCALE;
  }

  if (typeButton === 0 && valueCurrentScale >= SCALE_MIN) {
    valueScaleNew = valueCurrentScale - INTERVAL_SCALE;
  }

  return valueScaleNew;
};

export {changeScale};

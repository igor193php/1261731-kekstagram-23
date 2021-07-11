const INTERVAL_SCALE = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;

const changeScale = (typeButton) => {
  const scaleControlValueElement = document.querySelector('.scale__control--value');
  const valueCurrentScale = scaleControlValueElement.value.slice(0, -1);

  let valueScaleNew = Number(valueCurrentScale);

  if (typeButton === 1 && valueScaleNew < SCALE_MAX) {
    valueScaleNew = valueScaleNew + INTERVAL_SCALE;
  }

  if (typeButton === 0 && valueScaleNew > SCALE_MIN) {
    valueScaleNew = valueScaleNew - INTERVAL_SCALE;
  }

  return valueScaleNew;
};

export {changeScale};

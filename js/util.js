//Случайное целое число в диапазоне, включая минимальное и максимальное.
function getRandomInRange(min, max) {
  let errorMessage = '';

  if (min < 0) {
    errorMessage = 'Минимальное значение меньше нуля';
  } else if (max <= min) {
    errorMessage = 'Минимальное значение больше или равно максимальному';
  }

  if (!errorMessage) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  window.console.error(errorMessage);
}

//Функция для проверки максимальной длины строки
const checkLengthStr = (str, maxLengthForStr) => {
  let result = true;

  if (maxLengthForStr < str.length) {
    result = false;
  }

  return result;
};

const getRandomArrayElement = (elements) => elements[getRandomInRange(0, elements.length - 1)];

checkLengthStr('123', 2);

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const regExp = (regValue) => new RegExp(regValue);

export {checkLengthStr, getRandomInRange, getRandomArrayElement, isEscEvent, regExp};

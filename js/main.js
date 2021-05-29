//Случайное целое число в диапазоне, включая минимальное и максимальное.
function getRandomInRange(min, max) {
  let errorMessage = '';
  let result;

  if (min < 0) {
    errorMessage = 'Минимальное значение меньше нуля';
  }

  if (max <= min) {
    if (errorMessage) {
      errorMessage = errorMessage + ' и больше или равно максимальному';
    } else {
      errorMessage = 'Минимальное значение больше максимального';
    }
  }

  if (!errorMessage) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    result = errorMessage;
  }

  return result;
}

function checkLengthStr(str, maxLengthForStr) {
  return (maxLengthForStr < str.length) ? false : true;
}

getRandomInRange(2, 4);
checkLengthStr('123', 4);

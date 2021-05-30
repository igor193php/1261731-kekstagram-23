//Случайное целое число в диапазоне, включая минимальное и максимальное.
function getRandomInRange(min, max) {
  let errorMessage = '';
  let result;

  if (min < 0) {
    errorMessage = 'Минимальное значение меньше нуля';
  }

  if (max <= min) {
    if (errorMessage) {
      const editionMessage = ' и больше или равно максимальному';
      errorMessage = errorMessage + editionMessage;
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

//Функция для проверки максимальной длины строки
function checkLengthStr(str, maxLengthForStr) {
  let result = true;

  if (maxLengthForStr < str.length) {
    result = false;
  }

  return result;
}

getRandomInRange(-2, -2);
checkLengthStr('123', 2);

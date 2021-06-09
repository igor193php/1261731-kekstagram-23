//Функция для проверки максимальной длины строки
const checkLengthStr = (str, maxLengthForStr) => {
  let result = true;

  if (maxLengthForStr < str.length) {
    result = false;
  }

  return result;
};

checkLengthStr('123', 2);

export {checkLengthStr};

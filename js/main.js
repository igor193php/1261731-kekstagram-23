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
function checkLengthStr(str, maxLengthForStr) {
  let result = true;

  if (maxLengthForStr < str.length) {
    result = false;
  }

  return result;
}


getRandomInRange(-2, -2);
checkLengthStr('123', 2);

const MIN_NUMBER_FOR_GENERATION_ITEMS = 1;
const MAX_NUMVER_FOR_GENERATION_ITEMS = 25;
const MIN_NUMBER_FOR_LIKES = 15;
const MAX_NUMBER_FOR_LIKES = 200;
let idNumber = 1;

const DESCRIPTONS_FOR_PHOTO = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum.',
  'Nullam in massa nisl. Cras non sapien tellus. Nullam in pretium neque. Sed pulvinar maximus nunc',
  'Nam laoreet eu ipsum et tincidunt. Nam vel libero quis nisi eleifend euismod non in turpis.',
  'Aliquam efficitur ultricies sapien, nec vulputate arcu. Nullam gravida eros id mattis ultrices.',
  'Donec mi velit, rhoncus et nisl et, scelerisque molestie nibh.',
  'Ut scelerisque semper ligula, eget interdum ipsum egestas non.',
  'Fusce feugiat elementum magna at consequat. Nulla vel facilisis ipsum, vel posuere lectus.',
  'Phasellus pharetra justo porta magna fermentum dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  'Lorem ipsum dolor sit amet, consectetur. Integer rutrum.',
  'Nullam in massa nisl. Cras non sapien tellus.',
  'Nam laoreet eu ipsum et tincidunt.',
  'Aliquam efficitur ultricies sapien',
  'Donec mi velit, rhoncus et nisl et.',
  'Ut scelerisque semper ligula, eget.',
  'Fusce feugiat elementum magna at consequat.',
  'Phasellus pharetra justo porta magna.',
  'In egestas.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in.',
  'Lorem ipsum dolor sit amet, consectetur Integer rutrum.',
  'Nullam in pretium neque. Sed pulvinar maximus nunc',
  'Nam laoreet eu ipsum et tincidunt. Nam vel libero  non in turpis.',
];

const MESSAGES_USERS = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USERS = [
  'user1',
  'user2',
  'user3',
  'user4',
  'user5',
  'user6',
  'user7',
  'user8',
  'user9',
  'user10',
  'user11',
  'user12',
  'user213',
  'user14',
  'user15',
  'user16',
  'user17',
  'user18',
  'user19',
  'user20',
  'user21',
  'user22',
  'user23',
  'user24',
  'user25',
];

const getRandomArrayElement = (elements) => elements[getRandomInRange(0, elements.length - 1)];


const createPhoto = () =>
  ({
    id: idNumber++,
    url: `photos/${getRandomInRange(MIN_NUMBER_FOR_GENERATION_ITEMS, MAX_NUMVER_FOR_GENERATION_ITEMS)}.jpg`,
    description: getRandomArrayElement(DESCRIPTONS_FOR_PHOTO),
    likes: getRandomInRange(MIN_NUMBER_FOR_LIKES, MAX_NUMBER_FOR_LIKES),
    comments: [
      {
        id: idNumber,
        name: getRandomArrayElement(USERS),
        message: getRandomArrayElement(MESSAGES_USERS),
        avatar: `img/avatar-${getRandomInRange(MIN_NUMBER_FOR_GENERATION_ITEMS, MAX_NUMVER_FOR_GENERATION_ITEMS)}.svg`,
      },
    ],
  });

const similarPhotos = new Array(MAX_NUMVER_FOR_GENERATION_ITEMS).fill(null).map(() => createPhoto());

window.console.log(similarPhotos);

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

function getRandomItem(items, cb) {

}

function getObjects() {
  const MIN_NUMBER_FOR_GENERATION_ITEMS = 1;
  const MAX_NUMVER_FOR_GENERATION_ITEMS = 25;
  const MIN_NUMBER_FOR_LIKES = 15;
  const MAX_NUMBER_FOR_LIKES = 200;

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
    'Nam laoreet eu ipsum et tincidunt. Nam vel libero  non in turpis.'
  ];

  const MESSAGES_USERS = [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet, consectetur',
      'Lorem ipsum dolor',
      'Nullam in massa nisl. Cras non sapien',
      'Nam laoreet eu ipsum et tincidunt. Nam vel libero ',
      'Aliquam efficitur ultricies sapien, nec vulputate',
      'Donec mi velit, rhoncu',
      'Ut scelerisque semper ligula, ',
      'Fusce feugiat elementum magna at co',
      'Phasellus pharetra j',
      'Lorem ipsum dolor sit a',
      'Lorem ipsum dolor sit',
      'Lorem ipsum dolor sit ame',
      'Nullam in massa nisl.',
      'Nam laoreet eu ipsum e',
      'Aliquam efficitur ul',
      'Donec mi velit, rhonc',
      'Ut scelerisque semper ',
      'Fusce feugiat elementum',
      'Phasellus pharetra just.',
      'In egestas.',
      'Lorem ipsum dolor sit amet, consectetur adip',
      'Lorem ipsum dolor sit amet, consecte',
      'Nullam in pretium neque. Sed pulvinar ',
      'Nam laoreet eu ipsum et tincidunt. N.'
  ]

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
    'user25'
  ];



  const templateObject = {
    url: 'photos/' + getRandomInRange(MIN_NUMBER_FOR_GENERATION_ITEMS, MAX_NUMVER_FOR_GENERATION_ITEMS) + '.jpg',
    description: DESCRIPTONS_FOR_PHOTO[getRandomInRange(MIN_NUMBER_FOR_GENERATION_ITEMS, MAX_NUMVER_FOR_GENERATION_ITEMS)],
    likes: getRandomInRange(MIN_NUMBER_FOR_LIKES, MAX_NUMBER_FOR_LIKES),
    comments: [
      {
        name: USERS[getRandomInRange(MIN_NUMBER_FOR_GENERATION_ITEMS, MAX_NUMVER_FOR_GENERATION_ITEMS)],
        message:  MESSAGES_USERS[getRandomInRange(MIN_NUMBER_FOR_GENERATION_ITEMS, MAX_NUMVER_FOR_GENERATION_ITEMS)],
        avatar: 'img/avatar.jpg'
      }
    ],
  };

  const objectsList = [];


  return objectsList;
}

imageValues[0] = {
  name: "LEGITIM",
  link: "http://fozzyshop.com.ua/72653-thickbox_default/voda-mineralnaya-borjomi-evro-steklo.jpg",
  rate: "5",
  price:  "5$"
}
imageValues[1] = {
  name: "bread",
  link: "",
  rate: "5",
  price:  "5$"
}

for (var i = 0; i < imageValues.length; i++) {
var element = "<p><h3>"+imageValues[i].name+"</h3>"+
              "<br /> <img src='"+imageValues[i].link+"'width='50px' height='50px' />"+
              "<br /> Rate : "+ imageValues[i].rate +
              "<br /> Price : "+ imageValues[i].price +
              "</p>";


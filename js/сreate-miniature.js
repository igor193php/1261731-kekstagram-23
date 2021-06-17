import {createData} from './create-data.js';

const createMiniature = () => {

  const data = createData();
  const picturesElement = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureElement = pictureTemplate.querySelector('.picture');
  console.log(pictureElement);
  console.log(picturesElement);
  const imgElement = pictureElement.querySelector('.picture__img');
  const pictureInfoElement = pictureElement.querySelector('.picture__info');
  const pictureLikesElement = pictureInfoElement.querySelector('.picture__likes');
  const pictureComments = pictureInfoElement.querySelector('.picture__comments');
  const fragment = document.createDocumentFragment();

  for (let ind = 0; ind < data.length; ind++) {
    const element = pictureElement.cloneNode(true);
    imgElement.setAttribute('src', data[0].url);
    pictureLikesElement.textContent = data[0].likes;
    pictureComments.textContent = data[0].comments.length;
    fragment.appendChild();
  }

  return pictureTemlate;
};

export {createMiniature};

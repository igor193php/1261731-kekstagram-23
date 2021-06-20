import {createData} from './create-data.js';

const createMiniature = () => {

  const data = createData();
  const picturesElement = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureElement = pictureTemplate.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  for (let ind = 0; ind < data.length; ind++) {
    const element = pictureElement.cloneNode(true);
    element.querySelector('.picture__img').setAttribute('src', data[ind].url);
    element.querySelector('.picture__likes').textContent = data[ind].likes;
    element.querySelector('.picture__comments').textContent = data[ind].comments.length;
    fragment.appendChild(element);
  }

  return picturesElement.appendChild(fragment);
};

export {createMiniature};

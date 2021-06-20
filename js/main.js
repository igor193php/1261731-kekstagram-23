import {createData} from './create-data.js';
import {createMiniature} from './сreate-miniature.js';

const data = createData();
const picturesElement = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

for (let i = 0; i < data.length; i++) {
  const element = createMiniature().cloneNode(true);
  element.querySelector('.picture__img').setAttribute('src', data[i].url);
  element.querySelector('.picture__likes').textContent = data[i].likes;
  element.querySelector('.picture__comments').textContent = data[i].comments.length;
  fragment.appendChild(element);
}

picturesElement.appendChild(fragment);

window.console.log(createData());
window.console.log(createMiniature());

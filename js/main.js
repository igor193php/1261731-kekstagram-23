import {createData} from './create-data.js';
import {createMiniature} from './сreate-miniature.js';
import {createBigImage} from './create-big-image.js';

const data = createData();
const picturesElement = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

for (let i = 0; i < data.length; i++) {
  const element = createMiniature(data[i]);
  fragment.appendChild(element);
}

picturesElement.appendChild(fragment);

picturesElement.addEventListener('click', createBigImage);

import {createData} from './create-data.js';
import {createMiniature} from './сreate-miniature.js';
import {createForm} from './create-form.js';

const data = createData();
const picturesElement = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const uploadFileElement = document.querySelector('#upload-file');

for (let i = 0; i < data.length; i++) {
  const element = createMiniature(data[i]);
  fragment.appendChild(element);
}

picturesElement.appendChild(fragment);

uploadFileElement.addEventListener('change', () => {
  createForm();
});

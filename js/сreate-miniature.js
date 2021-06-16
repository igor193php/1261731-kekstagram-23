const createMiniature = () => {
const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 3; i++) {

}

//insertAdjacentHTML('beforeend')
pictureTemlate.appendChild(fragment);
return pictureTemlate;
};

export {createMiniature};

const createMiniature = (data) => {

  const pictureTemplate = document.querySelector('#picture').content;
  const pictureElement = pictureTemplate.querySelector('.picture');

  const element = pictureElement.cloneNode(true);
  element.querySelector('.picture__img').setAttribute('src', data.url);
  element.querySelector('.picture__likes').textContent = data.likes;
  element.querySelector('.picture__comments').textContent = data.comments.length;

  return element;
};

export {createMiniature};

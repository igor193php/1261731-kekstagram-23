const createMiniature = () => {

  const pictureTemplate = document.querySelector('#picture').content;

  return pictureTemplate.querySelector('.picture');
};

export {createMiniature};

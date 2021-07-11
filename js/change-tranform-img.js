const scaleControlValueElement = document.querySelector('.scale__control--value');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview');

const changeTranformImg = (scaleValueNew) => {
  scaleControlValueElement.value = `${ scaleValueNew }%`;
  imgUploadPreviewElement.style.transform = `scale(${ scaleValueNew / 100 })`;
};

export {changeTranformImg};

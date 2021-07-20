const SYMBOLS_EFFECT = {
  'invert': '%',
  'blur': 'px',
};

const valueElement = document.querySelector('.effect-level__value');

const addFilterImg = (filterName) => {
  let result = '';
  if (SYMBOLS_EFFECT[filterName]) {
    result = `filter: ${filterName}(${valueElement.value + SYMBOLS_EFFECT[filterName]})`;
  }

  return result;
};

export {addFilterImg};

/*
По умолчанию должен быть выбран эффект «Оригинал».
На изображение может накладываться только один эффект.

При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio,
добавить картинке внутри .img-upload__preview CSS-класс, соответствующий эффекту.
Например, если выбран эффект .effect-chrome, изображению нужно добавить класс
 effects__preview--chrome.

Интенсивность эффекта регулируется перемещением ползунка в слайдере.
Слайдер реализуется сторонней библиотекой для реализации слайдеров noUiSlider.
Уровень эффекта записывается в поле .effect-level__value.
При изменении уровня интенсивности эффекта (предоставляется API слайдера),
CSS-стили картинки внутри .img-upload__preview обновляются следующим образом:
Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;

Для эффекта «Оригинал» CSS-стили filter удаляются.

При выборе эффекта «Оригинал» слайдер скрывается.

При переключении эффектов, уровень насыщенности сбрасывается до начального значения (100%): слайдер, CSS-стиль изображения и значение поля должны обновляться.

==============================================================================================================
const sliderElement = document.querySelector('.level-form__slider');
const valueElement = document.querySelector('.level-form__value');
const specialElement = document.querySelector('.level-form__special');

valueElement.value = 80;

noUiSlider.create(sliderElement, {
    range: {
        min: 0,
        max: 100,
    },
    start: 80,
    step: 1,
    connect: 'lower',
    format: {
        to: function (value) {
            if (Number.isInteger(value)) {
                return value.toFixed(0);
            }
            return value.toFixed(1);
        },
        from: function (value) {
            return parseFloat(value);
        },
    },
});

sliderElement.noUiSlider.on('update', (values, handle) => {
    valueElement.value = values[handle];
});

specialElement.addEventListener('change', (evt) => {
    if (evt.target.checked) {
        sliderElement.noUiSlider.updateOptions({
            range: {
                min: 1,
                max: 10
            },
            start: 8,
            step: 0.1
        });
    } else {
        sliderElement.noUiSlider.updateOptions({
            range: {
                min: 0,
                max: 100,
            },
            step: 1
        });
        sliderElement.noUiSlider.set(80);
    }
});

sliderElement.noUiSlider.destroy();

*/



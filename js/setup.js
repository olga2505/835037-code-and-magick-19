'use strict';

var MIN_NAME_LENGTH = 2;
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setupConfig = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupConfig.querySelector('.setup-close');
var inputNameWizard = setupConfig.querySelector('.upload input');

var setupForm = document.querySelector('.setup-wizard-form');
var colorCoat = document.querySelector('.setup-wizard .wizard-coat');
var colorEyes = document.querySelector('.setup-wizard .wizard-eyes');
var colorFireball = document.querySelector('.setup-fireball-wrap');

var changeFillColor = function (element, item) { // изменение цвета глаз, мантии (fill)
  var color = getRandomElement(item);
  element.style.fill = color;
};

var changeBackgroundColor = function (element, item) { // изменение цвета фаербола (backgroundColor)
  var color = getRandomElement(item);
  element.style.backgroundColor = color;
};

colorCoat.addEventListener('click', function () {
  setupForm.querySelector('input[name="coat-color"]').value = changeFillColor(colorCoat, COAT_COLORS);
});

colorEyes.addEventListener('click', function () {
  setupForm.querySelector('input[name="eyes-color"]').value = changeFillColor(colorEyes, EYES_COLORS);
});

colorFireball.addEventListener('click', function () {
  setupForm.querySelector('input[name="fireball-color"]').value = changeBackgroundColor(colorFireball, FIREBALL_COLORS);
});

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && inputNameWizard !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setupConfig.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupConfig.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

inputNameWizard.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
        'Имя должно состоять минимум из ' +
      MIN_NAME_LENGTH +
      '-х символов'
    );
  } else {
    target.setCustomValidity('');
  }
});

var showPopup = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var getRandomElement = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

var createWizardsArray = function (length) {
  for (var i = 1, array = []; i <= length; i++) {
    array.push({
      'name': getRandomElement(FIRST_NAMES) + ' ' + getRandomElement(LAST_NAMES),
      'coatColor': getRandomElement(COAT_COLORS),
      'eyesColor': getRandomElement(EYES_COLORS)
    });
  }
  return array;
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  wizards.forEach(function (wizard) {
    fragment.appendChild(renderWizard(wizard));
  });
  var similarListElement = document.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
};
var wizardsAll = createWizardsArray(4);

renderWizards(wizardsAll);

showPopup();



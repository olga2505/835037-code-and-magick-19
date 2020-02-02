'use strict';


var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var showPopup = function () {
  document.querySelector('.setup').classList.remove('hidden');
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

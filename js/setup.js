'use strict';

document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: COAT_COLORS[Math.floor(Math.random() * WIZARD_NAMES.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * WIZARD_NAMES.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: COAT_COLORS[Math.floor(Math.random() * WIZARD_NAMES.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * WIZARD_NAMES.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: COAT_COLORS[Math.floor(Math.random() * WIZARD_NAMES.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * WIZARD_NAMES.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)],
    coatColor: COAT_COLORS[Math.floor(Math.random() * WIZARD_NAMES.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * WIZARD_NAMES.length)]
  }
];

var renderWisard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;


  return wizardElement;
};

var Fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  Fragment.appendChild(renderWisard(wizards[i]));
}
similarListElement.appendChild(Fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

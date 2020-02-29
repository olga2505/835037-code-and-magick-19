'use strict';

(function () {
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var createWizardsArray = function (length) {
    for (var i = 1, array = []; i <= length; i++) {
      array.push({
        'name': window.utilities.getRandomElement(FIRST_NAMES) + ' ' + window.utilities.getRandomElement(LAST_NAMES),
        'coatColor': window.utilities.getRandomElement(window.const.COAT_COLORS),
        'eyesColor': window.utilities.getRandomElement(window.const.EYES_COLORS)
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
})();

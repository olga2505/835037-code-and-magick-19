'use strict';

(function () {
  var colorCoat = document.querySelector('.setup-wizard .wizard-coat');
  var colorEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var colorFireball = document.querySelector('.setup-fireball-wrap');
  var setupForm = document.querySelector('.setup-wizard-form');

  var changeFillColorCoat = function (element, item) { // изменение цвета мантии (fill)
    var color = window.utilities.getRandomElement(item);
    element.style.fill = color;
    setupForm.querySelector('input[name="coat-color"]').value = color;
  };

  var changeFillColorEyes = function (element, item) { // изменение цвета глаз (fill)
    var color = window.utilities.getRandomElement(item);
    element.style.fill = color;
    setupForm.querySelector('input[name="eyes-color"]').value = color;
  };

  var changeBackgroundColor = function (element, item) { // изменение цвета фаербола (backgroundColor)
    var color = window.utilities.getRandomElement(item);
    element.style.backgroundColor = color;
    setupForm.querySelector('input[name="fireball-color"]').value = color;
  };

  colorCoat.addEventListener('click', function () {
    changeFillColorCoat(colorCoat, window.const.COAT_COLORS);
  });

  colorEyes.addEventListener('click', function () {
    changeFillColorEyes(colorEyes, window.const.EYES_COLORS);
  });

  colorFireball.addEventListener('click', function () {
    changeBackgroundColor(colorFireball, window.const.FIREBALL_COLORS);
  });
})();

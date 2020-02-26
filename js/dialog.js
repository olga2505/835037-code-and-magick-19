'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var setupConfig = document.querySelector('.setup');
  var inputNameWizard = setupConfig.querySelector('.upload input');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupConfig.querySelector('.setup-close');

  var showPopup = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  showPopup();

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
})();

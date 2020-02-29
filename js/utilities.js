'use strict';

(function () {
  var getRandomElement = function (items) {
    return items[Math.floor(Math.random() * items.length)];
  };
  window.utilities = {
    getRandomElement: getRandomElement,
  };
})();

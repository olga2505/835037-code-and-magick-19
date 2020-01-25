'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;     // коордтнаты облак  X
var CLOUD_Y = 10;      // коордтнаты облака Y
var GAP = 10;          // смещение тени
var COLUMN_GAP = 50;   // расстояние между колонок
var COLUMN_WIDTH = 40; // ширина колонок
var TEXT_Y = 260;      // координаты текста (имён) Y
var TEXT_HEIGHT = 100;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;  // максимальная высота шкалы
var TITLE_Y = 30;     //  координаты "Ура..."  Y
var GAP_TITLE = 20;    // межстрочный отступ


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (var i = 0; i < players.length; i++) {
    var COLUMN_Y = 90 + (barHeight - (barHeight * times[i]) / maxTime);   // координаты шкалы Y
    var TIME_Y = 80 + barHeight - ((barHeight * times[i]) / maxTime);     //  координаты времени Y

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.strokeText('Ура вы победили!', CLOUD_X + COLUMN_GAP, TITLE_Y);
    ctx.strokeText('Список результатов:', CLOUD_X + COLUMN_GAP, TITLE_Y + GAP_TITLE);

    ctx.fillText(Math.floor(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, TIME_Y);
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, TEXT_Y);

    ctx.fillStyle = 'hsl(240, ' + getRandom(1, 100) + '%, 50%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, COLUMN_Y, COLUMN_WIDTH, (barHeight * times[i]) / maxTime);
  }
};

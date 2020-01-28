'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100; // коордтнаты облак  X
var CLOUD_Y = 10; // коордтнаты облака Y
var GAP = 10; // смещение тени
var COLUMN_GAP = 50; // расстояние между колонок
var COLUMN_WIDTH = 40; // ширина колонок
var textBaseline = CLOUD_Y + 20; //  координаты "Ура..."  Y
var GAP_TITLE = 20; // межстрочный отступ
var BAR_HEIGHT = 150; // максимальная высота шкалы

var textName = CLOUD_HEIGHT - 10; // координаты текста (имён) Y


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var getRandom = function (number) {
  return Math.ceil(Math.random() * number);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', CLOUD_X + COLUMN_GAP, textBaseline);
  ctx.strokeText('Список результатов:', CLOUD_X + COLUMN_GAP, textBaseline + GAP_TITLE);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var COLUMN_Y = 90 + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime); // координаты шкалы Y
    var TIME_Y = 80 + BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime); //  координаты времени Y
    // var gapText = CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, TIME_Y);
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, textName);

    ctx.fillStyle = 'hsl(240, ' + getRandom(100) + '%, 50%)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * i, COLUMN_Y, COLUMN_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};

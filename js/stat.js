'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100; // коордтнаты облак  X
var CLOUD_Y = 10; // коордтнаты облака Y
var GAP = 10; // смещение тени
var COLUMN_GAP = 50; // расстояние между колонок
var COLUMN_WIDTH = 40; // ширина колонок
var GAP_TITLE = 20; // межстрочный отступ
var BAR_HEIGHT = 150; // максимальная высота шкалы
var PLAYERS_NAME_Y = CLOUD_HEIGHT - 10; // координаты текста (имён) Y
var TEXT_BASE_LINE = CLOUD_Y + 20; //  координаты "Ура..."  Y

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var getRandom = function (number) {
  return Math.ceil(Math.random() * number);
};

window.renderStatistics = function (ctx, players, times) {
  var renderCloud = function (x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderText = function () {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.strokeText('Ура вы победили!', CLOUD_X + COLUMN_GAP, TEXT_BASE_LINE);
    ctx.strokeText('Список результатов:', CLOUD_X + COLUMN_GAP, TEXT_BASE_LINE + GAP_TITLE);
  };

  var renderHistogram = function () {
    var maxTime = getMaxElement(times);
    players.forEach(function (player, index) {
      var time = times[index];
      var COLUMN_Y = 90 + (BAR_HEIGHT - (BAR_HEIGHT * time) / maxTime); // координаты шкалы Y
      var TIME_Y = 80 + BAR_HEIGHT - ((BAR_HEIGHT * time) / maxTime); //  координаты времени Y
      var gapTextY = CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * index;

      ctx.fillStyle = '#000';
      ctx.fillText(Math.floor(time), gapTextY, TIME_Y);
      ctx.fillText(player, gapTextY, PLAYERS_NAME_Y);

      ctx.fillStyle = player === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + getRandom(100) + '%, 50%)';

      ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_WIDTH + COLUMN_GAP) * index, COLUMN_Y, COLUMN_WIDTH, (BAR_HEIGHT * time) / maxTime);
    });
  };

  renderCloud(CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(CLOUD_X, CLOUD_Y, '#fff');

  renderText();
  renderHistogram();
};

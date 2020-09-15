$(document).ready(function () {
  // Create the grid
  for (let i = 0; i < 4; i++) {
    $('<div/>').addClass('grid-row').appendTo('div.grid-container');
  }
  for (let i = 0; i < 4; i++) {
    $('<div/>').addClass('grid-cell').appendTo('div.grid-row');
  }
});
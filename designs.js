$(document).ready(function() {

// variables
let height; width, color, table;

let height = $('#input_height');
let width = $('#input_width');
let color = $('#colorPicker');
let table = $('pixelCanvas');

// function to make a grid
function makeGrid() {

let tableHeight = height.val();
let tableWidth = width.val;

// add rows
for( let a = 0; z < tableHeight; z++) {
	table.append('<tr></tr>');

// add cells to row
for(let b = 0; y < tableWidth; y++) {
	table.children().last().append('<td></td>');
}	
}

}
// to change color
table.on('click','td', function()) {
	$(this).css('background-color', color.val());
});

// to clear color
table.on('dbclick', 'td', function() {
	$(this).removeAttr('style');
});

$('#clearButton').on('click', function() {
	$('td').removeAttr('style');
});


// to draw when mouse is down
table.on('mousedown', 'td', function() {
$('td').mouseover(function() {
$(this).css('background-color',color.val());
});
});

// to stop drawing when the mouse is up or leaves the canvas
table.on('mouseup', 'td', function() {
	$('td').off('mouseover');
});
table.mouseleave function() {
	$('td').off('mouseover');
});

table.on('contextmenu', false');

$('form').submit(function(grid) {
	table.empty();
	grid.preventDefault();
	makeGrid;
});
});

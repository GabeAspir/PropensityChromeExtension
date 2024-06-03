anychart.onDocumentReady(function () {
	var data = [
		["January", 1000],
		["February", 1200],
		["March", 1800],
		["April", 1500],
		["May", 1600],
		["June", 1900],
	];
	var chart = anychart.line();
	var lineSeries = chart.line(data);
	chart.container("chartContainer");
	chart.draw();
});
